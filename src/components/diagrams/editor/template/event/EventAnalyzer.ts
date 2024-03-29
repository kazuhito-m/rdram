import EventsOfType from "./EventsOfType";
import EventGist from "./EventGist";
import AnalyzeResutEvents from "./AnalyzeResutEvents";
import Diagram from "@/domain/diagram/Diagram";

export default class EventAnalyzer {
    constructor(private eventsOfTypeTemplates: EventsOfType<Diagram, Vue>[]) { }

    public analyze(targetCommand: any): AnalyzeResutEvents {
        console.log('---- analyzeEvents start ----');
        const eventGists = this.analyzeEventGists(targetCommand);
        eventGists.forEach(i => console.log(i));
        console.log('---- analyzeEvents end ----');

        if (eventGists.length === 0) return AnalyzeResutEvents.nothing();

        const eventsOfTypeMap: { [key: string]: EventsOfType<Diagram, Vue> } = {};
        for (const template of this.eventsOfTypeTemplates)
            eventsOfTypeMap[template.eventType()] = template.prototype();

        eventGists.filter(eventGist => eventsOfTypeMap[eventGist.eventType])
            .forEach(eventGist => eventsOfTypeMap[eventGist.eventType].eventGists.push(eventGist));

        const result = Object.values(eventsOfTypeMap)
            .filter(eventsOfType => eventsOfType.eventGists.length > 0);

        return new AnalyzeResutEvents(result);
    }

    private analyzeEventGists(targetCommand: any): EventGist[] {
        return this.recursiveAnalyzeEvent(targetCommand, targetCommand);
    }

    private recursiveAnalyzeEvent(targetCommand: any, rootCommand: any): EventGist[] {
        const eventGist = EventGist.of(targetCommand, rootCommand);
        const results: EventGist[] = [eventGist];

        if (!targetCommand || !targetCommand.commands) return results;
        for (const subCommand of targetCommand.commands.data) {
            const nestedEventGists = this.recursiveAnalyzeEvent(subCommand, rootCommand);
            for (const nested of nestedEventGists) results.push(nested);
        }
        return results;
    }
}