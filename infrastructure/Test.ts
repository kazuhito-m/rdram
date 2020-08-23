import Serializer from './Serializer';

export default class Test {
    public test() {
        const src = new SerializeTarget(12, 34, [
            new Child("これ"),
            new Child("でてれば"),
            new Child("OK")
        ]);

        const serializer = new Serializer(SerializeTarget, Child);

        const text = serializer.serialize(src);
        alert(text);

        const dist = serializer.deserialize(text) as SerializeTarget;

        alert(dist.calc());
        alert(dist.message());
        alert(dist.childrenMethod[0].testText());
    }
}

export class SerializeTarget {
    constructor(
        private readonly x: number,
        private readonly y: number,
        children: Child[]
    ) {
        this.children = children;
    }

    children: Child[];

    public calc() {
        return this.x + this.y;
    }

    public message() {
        return this.children.map(i => i.text).join();
    }

    public get childrenMethod() {
        return this.children;
    }
}

export class Child {
    constructor(public readonly text: string) { }

    public testText() {
        return ("このはなしは" + this.text + "と表示されれば、お子のメソッドも復元している。");
    }
}