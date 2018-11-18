import * as Backbone from "backbone";
import { ChildView } from "./childView";
import { BaseView } from "./baseView";
import { LittleChildView } from "./littleChildView";
import { PersonCollection } from "../models/personCollection";
export declare class TestView extends BaseView<Backbone.Model> {
    childView: ChildView;
    littleChildView: LittleChildView;
    people: PersonCollection;
    title: string;
    constructor(options?: any);
    render(): this;
    onViewRendered(): void;
    test(): void;
    callFromTemplate(): void;
}
