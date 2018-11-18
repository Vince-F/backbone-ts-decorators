import { Model } from "backbone";

export function BackboneModelAttribute(attritubeName?: string): PropertyDecorator {
    return function (target: Object, key: string | symbol) {
        if(typeof key === "symbol") {
            key = key.toString();
        } 
        let propName:string = attritubeName || key;
        
        let getter = function(this:Model) {
            return this.get(propName);
        }
        let setter = function(this:Model,newVal:any) {
            this.set(propName, newVal);
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}