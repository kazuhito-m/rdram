export default interface FileSystemRepository {
    readFile(file: File): Promise<string | ArrayBuffer | null>;
    isJsonFile(file: File): Promise<boolean>;
}