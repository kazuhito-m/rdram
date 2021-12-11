import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";

export default class FileSystemDatasouce implements FileSystemRepository {
    public readFile(file: File): Promise<string | ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = res => {
                if (!res.target) return;
                resolve(res.target.result);
            };
            reader.onerror = err => reject(err);
            reader.readAsText(file);
        });
    }

    public async isJsonFile(file: File): Promise<boolean> {
        try {
            const json = await this.parseJson(file);
            if (!json) return false;
            return true;
        } catch (e) {
            return false;
        }
    }

    private async parseJson<T>(file: File): Promise<T | null> {
        const text = await this.readFile(file);
        if (!text) return null;
        return JSON.parse(text as string) as T;
    }
}