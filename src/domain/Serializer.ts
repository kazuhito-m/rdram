import LocalStorage from "@/domain/storage/LocalStorage";
import UserSettings from '@/domain//setting/UserSettings';
import Product from "@/domain/product/Product";
import Products from "@/domain/product/Products";
import Status from '@/domain/storage/Status';
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

import SystemContextDiagram from '@/domain/diagram/rdra20/systemcontext/SystemContextDiagram';
import BusinessContextDiagram from '@/domain/diagram/rdra20/businesscontext/BusinessContextDiagram'
import InformationModelDiagram from '@/domain/diagram/informationmodel/InformationModelDiagram';
import StateModelDiagram from '~/domain/diagram/rdra20/statemodel/StateModelDiagram';
import RequestModelDiagram from '@/domain/diagram/rdra20/requrestmodel/RequestModelDiagram';
import BusinessUseCaseDiagram from '@/domain/diagram/rdra20/businessusecase/BusinessUseCaseDiagram';
import BusinessFlowDiagram from '@/domain/diagram/rdra20/businessflow/BusinessFlowDiagram';
import UsageSceneDiagram from '@/domain/diagram/rdra20/usagescene/UsageSceneDiagram';
import UseCaseCompositeDiagram from '~/domain/diagram/rdra20/usecasecomposite/UseCaseCompositeDiagram';
import VariationAndConditionDiagram from '@/domain/diagram/variationandcondition/VariationAndConditionDiagram';
import Variation from "@/domain/resource/Variation";
import Condition from "@/domain/resource/Condition";
import TableTypeCondition from "@/domain/resource/TableTypeCondition";

import ExportedDiagram from "@/domain/diagram/export/ExportedDiagram";

export default class Serializer {
    /** シリアライズで復元する可能性のあるクラスのコンストラクタ。 */
    private readonly constructors: any[] = [
        LocalStorage,
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
        ExportedDiagram
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
        if (Array.isArray(value)) {
            value.forEach(i => this.addClassNameProperty(i));
            return;
        }
        value.__CLASS_NAME = value.constructor.name;
        for (const key in value) {
            if (this.hasProperty(value, key)) {
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
        for (const key in value) {
            if (this.hasProperty(value, key)) {
                const inValue = value[key];
                obj[key] = this.toClassInstance(inValue);
            }
        }
        return obj;
    }

    private createInstanceOf(className: string): any {
        const FoundCons = this.constructors
            .find(cons => className === cons.name);
        if (!FoundCons) return null;
        return new FoundCons();
    }

    private hasProperty(value: any, key: string) {
        return !!(value) && Object.prototype.hasOwnProperty.call(value, key);
    }
}