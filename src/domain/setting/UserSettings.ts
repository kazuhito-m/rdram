export default class UserSettings {
    public readonly autoSave: boolean;
    private readonly darkMode: boolean;

    constructor(autoSave: boolean, darkMode: boolean) {
        this.autoSave = autoSave;
        this.darkMode = darkMode;
    }

    public static create(): UserSettings {
        return new UserSettings(
            true,
            true,
        );
    }
}