import { BackboneViewProperties } from "../../../lib/dist/index";
import { template } from "../templates/childViewTemplate";
import { BaseView } from "./baseView";
import { Person } from "../models/personModel";

@BackboneViewProperties({
    events: {
        "click a.overwrite-events": "eventsAreOverwritten"
    },
    template: template
})
export class ChildView extends BaseView<Person /* as collection */>{
    title: string = "ChildView";

    eventsAreOverwritten() {
        alert("Events are overwritten but I may be able to do something about it!");
    }
}