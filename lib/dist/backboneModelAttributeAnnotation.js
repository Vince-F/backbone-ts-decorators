"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BackboneModelAttribute(attritubeName) {
    return function (target, key) {
        if (typeof key === "symbol") {
            key = key.toString();
        }
        var propName = attritubeName || key;
        var getter = function () {
            return this.get(propName);
        };
        var setter = function (newVal) {
            this.set(propName, newVal);
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
exports.BackboneModelAttribute = BackboneModelAttribute;
