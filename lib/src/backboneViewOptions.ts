
type TemplateFunction = (...args:any[]) => string;
export class BackboneViewOptions {
    template?:TemplateFunction;
    events?:{
        [key:string]:string
    };
    tagName?:string;
    className?:string;
    id?:string;
    el?:string;
    //model:string do we set it here, or later ?
}