import ResourceType from "@/domain/resource/ResourceType";

describe('ResourceType', () => {
  test('idが一意である。', () => {
    const uniqueSet = new Set<number>();
    for (const type of ResourceType.values()) {
      const actual = uniqueSet.has(type.id);

      if (actual) console.log("ResourceType.idが重複している:", type.id);
      expect(actual).toEqual(false);

      uniqueSet.add(type.id);
    }
  });
});