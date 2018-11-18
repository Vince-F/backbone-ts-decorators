"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BackboneViewProperties(options) {
    return function (target) {
        if (typeof options === "object") {
            for (var key in options) {
                target.prototype[key] = options[key];
            }
        }
    };
}
exports.BackboneViewProperties = BackboneViewProperties;
