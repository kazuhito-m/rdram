import Resource from "./Resource";
import ResourceType from "./ResourceType";

/**
 * 条件(名前が付けられた条件)。
 */
export default class Condition extends Resource {
  public static readonly CONDITION_VALUE_MAX_LENGTH = 128;

  constructor(
    resourceId: number,
    name: string,
    description: string,
    public readonly value: string,
  ) { super(resourceId, ResourceType.条件.id, name, description); }

  public withValue(newValue: string): Condition {
    const resource = this.clone() as any;
    resource.value = newValue.trim();
    return resource;
  }

  protected override clone(): Condition {
    return new Condition(
      this.resourceId,
      this.name,
      this.description,
      this.value
    );
  }
}