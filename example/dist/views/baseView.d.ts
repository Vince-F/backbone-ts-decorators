import * as Backbone from "backbone";
declare type TemplateFunction = (v: Backbone.View<Backbone.Model>) => string;
export declare abstract class BaseView<M extends Backbone.Model> extends Backbone.View<M> {
    template: TemplateFunction;
    render(): this;
    onViewRendered(): void;
}
export {};
