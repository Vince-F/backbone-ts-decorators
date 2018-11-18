"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fakeReact_1 = require("../fakeReact");
function template(viewCtrl) {
    return fakeReact_1.React.createElement("div", { class: "main-element" },
        fakeReact_1.React.createElement("h1", null, viewCtrl.title),
        "I am child view",
        fakeReact_1.React.createElement("a", { href: "javascript:void(0)", class: "overwrite-events" }, "Click me for test in the child view"));
}
exports.template = template;
