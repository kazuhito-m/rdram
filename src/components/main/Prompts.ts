import Diagram from "@/domain/diagram/Diagram"
import Diagrams from "@/domain/diagram/Diagrams"
import DiagramType from "@/domain/diagram/type/DiagramType"
import MessageBox from "@/presentation/MessageBox"
import Resource from "~/domain/resource/Resource";

export default class Prompts {
    public promptNewDiagramName(diagramType: DiagramType, diagrams: Diagrams): string {
        const message = `追加する ${diagramType.name} の名前を入力してください。`;
        return this.promptDiagramName(message, '', diagramType, diagrams);
    }

    public promptCopyDiagramName(diagram: Diagram, diagrams: Diagrams): string {
        const message = `${diagram.name} をコピーします。` +
            `コピー後の ${diagram.type.name} の名前を入力してください。`
        return this.promptDiagramName(message, diagram.defaultNameWhenCopy(), diagram.type, diagrams);
    }

    private promptDiagramName(
        message: string,
        defaultName: string,
        diagramType: DiagramType,
        diagrams: Diagrams
    ): string {
        const messageBox = new MessageBox()
        const name = messageBox.prompt(message, defaultName, (inputText) => {
            if (inputText.length > Diagram.NAME_MAX_LENGTH) {
                alert(`${Diagram.NAME_MAX_LENGTH}文字以内で入力してください。`)
                return false
            }
            const exists = diagrams.existsSameTypeAndName(inputText, diagramType)
            if (exists) alert(`既に同名の ${diagramType.name} が在ります。`)
            return !exists
        })
        if (name) return name
        return ''
    }

    public confirmDeleteDiagramWithIcon(diagram: Diagram): boolean {
        const message = '指定された図は編集されています。\n(アイコンが配置されています)\n' +
            `${diagram.name} を削除してもよろしいですか。`
        return window.confirm(message);
    }

    public confirmDeleteResourceOnProduct(target: Resource, usings: Diagrams, thisDiagram: Diagram | null = null): boolean {
        if (usings.length === 0) return true;
        let diagramInfo = `${usings.length}個の図`;
        if (usings.length === 1) {
            const diagram = usings.last();
            diagramInfo = diagram.id === thisDiagram?.id
                ? "この図のみ"
                : `「${diagram.name}(${diagram.type.name})」`
        }
        const message =
            `「${target.name}」は現在、${diagramInfo}で参照されています。\n` +
            "削除する場合、図のアイコンや関連のすべては削除されます。\n" +
            `${target.name} を削除してもよろしいですか。`;
        return window.confirm(message);
    }
}
