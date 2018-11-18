import { Person } from "./personModel";
import { Collection } from "backbone";
export declare class PersonCollection extends Collection<Person> {
    constructor(data: Array<Person>, options?: any);
}
