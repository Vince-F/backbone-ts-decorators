"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fakeReact_1 = require("../fakeReact");
function template(viewCtrl) {
    return fakeReact_1.React.createElement("div", { class: "main-element" },
        fakeReact_1.React.createElement("h1", null, viewCtrl.title),
        fakeReact_1.React.createElement("a", { href: "javascript:void(0)", class: "test-link" }, "Click me for test"),
        fakeReact_1.React.createElement("a", { href: "javascript:void(0)", onClick: viewCtrl.callFromTemplate }, "Me, I call directly the controller"),
        fakeReact_1.React.createElement("div", { id: "subView" }),
        fakeReact_1.React.createElement("div", { id: "little" }));
}
exports.template = template;
