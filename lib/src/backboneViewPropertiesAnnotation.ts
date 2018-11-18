import { BackboneViewOptions } from "./backboneViewOptions";

export function BackboneViewProperties(options?: BackboneViewOptions):ClassDecorator  {
    return function (target:Function) {
        if (typeof options === "object") {
            for (var key in options) {
                target.prototype[key] = options[key];
            }
        }
    }
}