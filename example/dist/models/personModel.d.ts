import { Model } from "backbone";
export declare class Person extends Model {
    firstName: string;
    lastName: string;
    readonly fullname: string;
}
