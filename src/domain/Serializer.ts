import LocalStrage from "@/domain/strage/LocalStrage";
import UserSettings from '@/domain//setting/UserSettings';
import Product from "@/domain/product/Product";
import Products from "@/domain/product/Products";
import Status from '@/domain/strage/Status';
import Resources from '@/domain/resource/Resources';
import Diagrams from '@/domain/diagram/Diagrams';
import Diagram from '@/domain/diagram/Diagram';

import Resource from '@/domain/resource/Resource';
import Purpose from '@/domain/resource/Purpose';
import Request from '@/domain/resource/Request';
import Requirement from '@/domain/resource/Requirement';

import Placement from '@/domain/diagram/placement/Placement';
import Midpoint from '@/domain/relation/Midpoint';
import Relation from '@/domain/relation/Relation';
import Scenario from '@/domain/resource/Scenario';
import StartOrEndPoint from '@/domain/resource/StartOrEndPoint';

import SystemContextDiagram from '@/domain/diagram/systemcontext/SystemContextDiagram';
import BusinessContextDiagram from '@/domain/diagram/businesscontext/BusinessContextDiagram'
import InformationModelDiagram from '@/domain/diagram/informationmodel/InformationModelDiagram';
import StateModelDiagram from '@/domain/diagram/statemodel/StateModelDiagram';
import RequestModelDiagram from '@/domain/diagram/requrestmodel/RequestModelDiagram';
import BusinessUseCaseDiagram from '@/domain/diagram/businessusecase/BusinessUseCaseDiagram';
import BusinessFlowDiagram from '@/domain/diagram/businessflow/BusinessFlowDiagram';
import UsageSceneDiagram from '@/domain/diagram/usagescene/UsageSceneDiagram';
import UseCaseCompositeDiagram from '@/domain/diagram/usecasecomposite/UseCaseCompositeDiagram';
import VariationAndConditionDiagram from '@/domain/diagram/variationandcondition/VariationAndConditionDiagram';
import Variation from "./resource/Variation";
import Condition from "./resource/Condition";
import TableTypeCondition from "./resource/TableTypeCondition";


export default class Serializer {
    /** シリアライズで復元する可能性のあるクラスのコンストラクタ。 */
    private readonly constructors: any[] = [
        LocalStrage,
        UserSettings,
        Products,
        Product,
        Date,
        Status,
        Resources,
        Resource,
        Purpose,
        Request,
        Requirement,
        Scenario,
        StartOrEndPoint,
        Variation,
        Condition,
        TableTypeCondition,
        Diagrams,
        Diagram,
        Placement,
        Midpoint,
        Relation,
        BusinessContextDiagram,
        InformationModelDiagram,
        StateModelDiagram,
        SystemContextDiagram,
        RequestModelDiagram,
        BusinessUseCaseDiagram,
        BusinessFlowDiagram,
        UsageSceneDiagram,
        UseCaseCompositeDiagram,
        VariationAndConditionDiagram,
    ];

    public cloningOf(source: any): any {
        return this.deserialize(this.serialize(source));
    }

    public serialize(target: any): string {
        this.addClassNameProperty(target);  // TODO 元のオブジェクトを上書きまくるのでなんとかしたい
        return JSON.stringify(target, null, 4);
    }

    public deserialize(json: string): any {
        const obj = JSON.parse(json);
        return this.toClassInstance(obj);
    }

    private addClassNameProperty(value: any): void {
        if (typeof value !== "object") return;
        if (Array.isArray(value)) return value.forEach(i => this.addClassNameProperty(i));
        value.__CLASS_NAME = value.constructor.name;
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                this.addClassNameProperty(value[key]);
            }
        }
    }

    private toClassInstance(value: any): any {
        if (typeof value !== "object") return value;
        if (Array.isArray(value)) return value.map(i => this.toClassInstance(i));
        if (!value.__CLASS_NAME) return value;
        if (value.__CLASS_NAME === "Object") return value;
        const obj = this.createInstanceOf(value.__CLASS_NAME);
        if (!obj) return obj;
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                const inValue = value[key];
                obj[key] = this.toClassInstance(inValue);
            }
        }
        return obj;
    }

    private createInstanceOf(className: string): any {
        const foundCons = this.constructors
            .find(cons => className === cons.name);
        if (!foundCons) return null;
        return new foundCons();
    }
}