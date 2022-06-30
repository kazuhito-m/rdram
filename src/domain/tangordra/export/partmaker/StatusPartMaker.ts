import { StateGroup, UseCase, State } from '@/domain/tangordra/export/structure/TangoRdra';
import Diagram from '@/domain/diagram/Diagram';
import Product from '@/domain/product/Product';
import Relation from '@/domain/relation/Relation';
import Resources from '@/domain/resource/Resources';
import ResourceType from '@/domain/resource/ResourceType';
import Resource from '@/domain/resource/Resource';
import Rdra20DiagramType from '@/domain/diagram/rdra20/Rdra20DiagramType';

export default class StatusPartMaker {
    public make(product: Product): StateGroup[] {
        const allResources = product.resources;
        const states = allResources.typeOf(ResourceType.状態);
        const usecases = allResources.typeOf(ResourceType.ユースケース);

        return product.diagrams
            .typeOf(Rdra20DiagramType.状態モデル図)
            .map(diagram => this.makeStateGroup(diagram, states, usecases))
            .filter(stateGroup => stateGroup.value.length > 0);
    }

    private makeStateGroup(
        diagram: Diagram,
        states: Resources,
        usecases: Resources
    ): StateGroup {
        const resultStatus: State[] = [];

        const remainRelations = new Map<string, Relation>();
        diagram.allRelations()
            .forEach(r => remainRelations.set(r.id, r));

        const stateResourceIdsOfFromOnlyUnique = Array.from(remainRelations.values())
            .map(r => r.fromResourceId)
            .filter(fromId => states.existsIdOf(fromId))
            .reduce((uniqueSet, fromId) => uniqueSet.add(fromId), new Set<number>());


        for (const stateResourceId of stateResourceIdsOfFromOnlyUnique) {
            const relationsOfConnectUsecase = Array.from(remainRelations.values())
                .filter(r => r.fromResourceId === stateResourceId);
            relationsOfConnectUsecase.forEach(r => remainRelations.delete(r.id));

            const usecaseResourceIds = relationsOfConnectUsecase
                .map(r => r.toResourceId)
                .filter(toResoureId => usecases.existsIdOf(toResoureId));

            if (usecaseResourceIds.length === 0) continue;

            const state = states.of(stateResourceId);
            const oneState = {
                name: state?.name,
                usecase: usecaseResourceIds.map(resourceId => this.makeUseCase(resourceId, remainRelations, usecases, states))
            } as State;

            resultStatus.push(oneState)
        }

        for (const remainRelation of remainRelations.values()) {
            if (!usecases.existsIdOf(remainRelation.fromResourceId)) continue;

            const fromStateResouceIds = diagram.allRelations()
                .map(r => r)
                .filter(r => r.toResourceId === remainRelation.fromResourceId)
                .map(r => r.fromResourceId);
            if (fromStateResouceIds.length === 0) continue;

            const state = states.of(fromStateResouceIds[0]);
            const oneState = {
                name: state?.name as string,
                usecase: [this.makeUseCase(remainRelation.fromResourceId, remainRelations, usecases, states)]
            } as State;

            resultStatus.push(oneState)
        }

        this.findNonRelationStatus(diagram, states)
            .forEach(state => resultStatus.push(state));

        const result = {
            group: diagram.name,
            value: resultStatus
        } as StateGroup;
        return result;
    }

    private makeUseCase(
        useCaseResourceId: number,
        remainRelations: Map<string, Relation>,
        usecases: Resources,
        states: Resources
    ): UseCase {
        const result = {
            name: usecases.of(useCaseResourceId)?.name
        } as UseCase;

        const relationsOfConnectState = Array.from(remainRelations.values())
            .filter(r => r.fromResourceId === useCaseResourceId);
        for (const relation of relationsOfConnectState) {
            remainRelations.delete(relation.id);
            if (!states.existsIdOf(relation.toResourceId)) continue;
            const stateName = states.of(relation.toResourceId)?.name;
            if (!stateName) continue;
            result.next_state = stateName;
            break;
        }

        return result;
    }

    private findNonRelationStatus(diagram: Diagram, status: Resources): State[] {
        const allRelations = diagram.allRelations();
        return diagram.placements
            .map(placement => placement.resourceId)
            .filter(resourceId => status.existsIdOf(resourceId))
            .map(resourceId => status.of(resourceId))
            .filter(state => !allRelations.isUsedOf(state as Resource))
            .map(state => { return { name: state?.name } as State });
    }
}
