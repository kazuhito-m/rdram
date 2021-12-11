export default class EnumAnalyzer {
    public static enumLengthOf(enumType: any): number {
        return Object.keys(enumType)
            .map((value, index) => Number(isNaN(Number(value))))
            .reduce((base, current) => base + current, 0);
    }
}