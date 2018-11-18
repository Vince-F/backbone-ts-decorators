import { Model } from "backbone";
import {BackboneModelAttribute} from "../../../lib/dist/index";

export class Person extends Model {
    @BackboneModelAttribute()
    firstName:string;
    @BackboneModelAttribute()
    lastName:string;

    get fullname() {
        return this.firstName + this.lastName;
    }
}