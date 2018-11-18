declare type TemplateFunction = (...args: any[]) => string;
export declare class BackboneViewOptions {
    template?: TemplateFunction;
    events?: {
        [key: string]: string;
    };
    tagName?: string;
    className?: string;
    id?: string;
    el?: string;
}
export {};
