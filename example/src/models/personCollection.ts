import { Person } from "./personModel";
import { Collection } from "backbone";


export class PersonCollection extends Collection<Person> {

    constructor(data:Array<Person>, options?:any) {
        options = options || {};
        options.model = Person;
        super(data,options);
        this.url = "/api/person";
    }
}