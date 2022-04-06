import { StateGroup, UseCase, State } from '@/domain/tangordra/export/structure/TangoRdra';
import Diagram from '@/domain/diagram/Diagram';
import DiagramType from '@/domain/diagram/DiagramType';
import Product from '@/domain/product/Product';
import Relation from '@/domain/relation/Relation';
import Resources from '@/domain/resource/Resources';
import ResourceType from '@/domain/resource/ResourceType';

export default class StatusPartMaker {
    public make(product: Product): StateGroup[] {
        const allResources = product.resources;
        const states = allResources.typeOf(ResourceType.状態);
        const usecases = allResources.typeOf(ResourceType.ユースケース);

        return product.diagrams
            .typeOf(DiagramType.状態モデル図)
            .map(diagram => this.makeStateGroup(diagram, states, usecases, allResources))
            .filter(stateGroup => stateGroup.value.length > 0);
    }

    private makeStateGroup(
        diagram: Diagram,
        states: Resources,
        usecases: Resources,
        allResources: Resources
    ): StateGroup {
        const resultStatus: State[] = [];

        const relations = new Map<string, Relation>();
        diagram.allRelations()
            .forEach(r => relations.set(r.id, r));

        const remainRelations = new Map(relations);

        const stateResourceIdsOfFromOnlyUnique = Array.from(relations.values())
            .map(r => r.fromResourceId)
            .filter(fromId => states.existsIdOf(fromId))
            .reduce((uniqueSet, fromId) => uniqueSet.add(fromId), new Set<number>());


        for (const stateResourceId of stateResourceIdsOfFromOnlyUnique) {
            const relationsOfConnectUsecase = Array.from(remainRelations.values())
                .filter(r => r.fromResourceId === stateResourceId);
            relationsOfConnectUsecase.forEach(r => remainRelations.delete(r.id));

            const usecaseResourceIds = relationsOfConnectUsecase
                .map(r => r.toResourceId);

            const state = states.of(stateResourceId);
            const oneState = {
                name: state?.name,
                usecase: usecaseResourceIds.map(resourceId => this.makeUseCase(resourceId, remainRelations, usecases, states))
            } as State;

            resultStatus.push(oneState)
        }

        for (const remainRelation of remainRelations.values()) {
            if (!usecases.existsIdOf(remainRelation.fromResourceId)) continue;
            // debug
            const fr = allResources.of(remainRelation.fromResourceId);
            const tr = allResources.of(remainRelation.toResourceId);
            console.log('残りrelation id:%s, from:%s.%s, to:%s.%s',
                remainRelation.id,
                remainRelation.fromResourceId, fr?.name,
                remainRelation.toResourceId, tr?.name);
        }

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
}
