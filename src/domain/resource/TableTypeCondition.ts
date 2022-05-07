import Resource from "./Resource";
import ResourceType from "./ResourceType";

/**
 * 表形式の条件。
 */
export default class TableTypeCondition extends Resource {
  public static readonly NOTHING_VARIATION_ID = 0;

  constructor(
    resourceId: number,
    name: string,
    description: string,
    public readonly leftVariationId: number,
    public readonly topVariationId: number,
    private readonly values: string[][],
  ) { super(resourceId, ResourceType.表形式の条件.id, name, description); }

  public withValues(newValues: string[][]): TableTypeCondition {
    const resource = this.clone() as any;
    resource.values = newValues;
    return resource;
  }

  public valuesOf(): string[][] {
    return this.values.concat();
  }

  protected override clone(): TableTypeCondition {
    return new TableTypeCondition(
      this.resourceId,
      this.name,
      this.description,
      this.leftVariationId,
      this.topVariationId,
      this.values,
    );
  }
}