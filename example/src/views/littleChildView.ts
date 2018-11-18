import { BackboneViewProperties } from "../../../lib/dist/index";
import { template } from "../templates/littleChildViewTemplate";
import { BaseView } from "./baseView";
import { Person } from "../models/personModel";

@BackboneViewProperties({
    events: {
        "click a.little-child-view": "anotherOne",
        "click button.update-first-name": "updateFirstName",
        "click button.update-last-name": "updateLastName",
        "click button.save": "save"
    },
    template: template
})
export class LittleChildView extends BaseView<Person>{
    title: string = "LittleChildView";

    anotherOne() {
        alert("Another One!");
    }

    updateFirstName() {
        let inputElem:HTMLInputElement = document.querySelector("input[name='firstName']");
        this.model.firstName = inputElem.value;
    }

    updateLastName() {
        let inputElem:HTMLInputElement = document.querySelector("input[name='lastName']");
        this.model.lastName = inputElem.value;
    }

    save() {
        this.model.save();
    }
}