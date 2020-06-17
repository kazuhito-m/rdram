import Status from "./Status";
import Report from "@/domain/report/Report";

export default interface LocalStrage {
    status: Status;
    reports: Report[];
}