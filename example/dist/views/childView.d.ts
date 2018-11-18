import { BaseView } from "./baseView";
import { Person } from "../models/personModel";
export declare class ChildView extends BaseView<Person> {
    title: string;
    eventsAreOverwritten(): void;
}
