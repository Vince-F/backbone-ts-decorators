import * as Backbone from "backbone";

type TemplateFunction = (v:Backbone.View<Backbone.Model>) => string;

export abstract class BaseView<M extends Backbone.Model> extends Backbone.View<M>{
    template: TemplateFunction; /* this comes from the Annotation */

    render() {
        this.$el.html(this.template(this));
        this.onViewRendered();
        return this;
    }

    onViewRendered() {
        
    }
}