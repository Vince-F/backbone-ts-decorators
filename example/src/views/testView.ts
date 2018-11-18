import { BackboneViewProperties } from "../../../lib/dist/index";
import * as Backbone from "backbone";
import { template } from "../templates/testViewTemplate";
import { ChildView } from "./childView";
import { BaseView } from "./baseView";
import { LittleChildView } from "./littleChildView";
import { Person } from "../models/personModel";
import { PersonCollection } from "../models/personCollection";

@BackboneViewProperties({
    events: {
        "click a.test-link": "test"
    },
    template: template
})
export class TestView extends BaseView<Backbone.Model>{
    childView: ChildView;
    littleChildView: LittleChildView;
    people: PersonCollection;
    title: string = "MyView";

    constructor(options?: any) {
        super(options);
        this.people = new PersonCollection([
            { id: 42, firstName: "John", lastName: "Doe" } as Person,
            { id: 125, firstName: "Jane", lastName: "Doe" } as Person
        ]);
        this.childView = new ChildView({
            collection: this.people
        });
        this.littleChildView = new LittleChildView({
            model: this.people.at(0)
        });
    }

    render() {
        this.$el.html(this.template(this));
        this.onViewRendered();
        return this;
    }

    onViewRendered() {
        this.childView.render();
        this.$("#subView").append(this.childView.$el);
        this.littleChildView.render();
        this.$("#little").append(this.littleChildView.$el);
    }

    test() {
        alert("Hello World!");
    }

    callFromTemplate() {
        alert("from template!");
    }
}