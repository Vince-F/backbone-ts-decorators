import { BaseView } from "./baseView";
import { Person } from "../models/personModel";
export declare class LittleChildView extends BaseView<Person> {
    title: string;
    anotherOne(): void;
    updateFirstName(): void;
    updateLastName(): void;
    save(): void;
}
