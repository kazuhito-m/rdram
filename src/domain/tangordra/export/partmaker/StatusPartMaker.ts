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
        const startOrEndPoints = allResources.typeOf(ResourceType.始点終点);

        return product.diagrams
            .typeOf(DiagramType.状態モデル図)
            .map(diagram => this.makeStateGroup(diagram, states, usecases, startOrEndPoints, allResources))
            .filter(stateGroup => stateGroup.value.length > 0);
    }

    private makeStateGroup(
        diagram: Diagram,
        states: Resources,
        usecases: Resources,
        startOrEndPoints: Resources,
        allResources: Resources
    ): StateGroup {
        const resultStatus: State[] = [];

        //debug
        let count = 1;

        const relations = new Map<string, Relation>();
        diagram.allRelations()
            .forEach(relation => relations.set(relation.id, relation));
        while (relations.size > 0) {
            const relation = relations.values().next().value;


            // debug
            const fr = allResources.of(relation.fromResourceId);
            const tr = allResources.of(relation.toResourceId);
            console.log('count:%s, size:%s, id:%s, from:%s.%s, to:%s.%s',
                count++, relations.size, relation.id,
                relation.fromResourceId, fr?.name,
                relation.toResourceId, tr?.name);
            if (count > 100) break;


            relations.delete(relation.id);

            const fromId = relation.fromResourceId;
            const toId = relation.toResourceId;
            if (startOrEndPoints.existsIdOf(fromId)
                || usecases.existsIdOf(fromId)
                || !states.existsIdOf(fromId)
                || startOrEndPoints.existsIdOf(toId)
            ) {
                if (usecases.existsIdOf(fromId)) relations.set(relation.id, relation);
                continue;
            }

            const relationsOfConnectUsecase = Array.from(relations.values())
                .filter(r => r.fromResourceId === fromId);
            relationsOfConnectUsecase.forEach(r => relations.delete(r.id));
            relationsOfConnectUsecase.push(relation);

            const useCaseResourceIds = relationsOfConnectUsecase
                .map(r => r.toResourceId);

            const oneState = {
                name: states.of(fromId)?.name,
                usecase: useCaseResourceIds.map(resourceId => this.makeUseCase(resourceId, relations, usecases, states))
            } as State;

            resultStatus.push(oneState)
            console.log("pushの直後-出力用のStatus数:%s", resultStatus.length);
            console.log("残りRelation数:%s", relations.size);
        }

        const result = {
            group: diagram.name,
            value: resultStatus
        } as StateGroup;
        return result;
    }

    private makeUseCase(
        useCaseResourceId: number,
        relations: Map<string, Relation>,
        usecases: Resources,
        states: Resources
    ): UseCase {
        const result = {
            name: usecases.of(useCaseResourceId)?.name
        } as UseCase;

        const relationsOfConnectState = Array.from(relations.values())
            .filter(r => r.fromResourceId === useCaseResourceId);
        for (const relation of relationsOfConnectState) {
            relations.delete(relation.id);
            if (!states.existsIdOf(relation.toResourceId)) continue;
            const stateName = states.of(relation.toResourceId)?.name;
            if (!stateName) continue;
            result.next_state = stateName;
            break;
        }

        return result;
    }
}
