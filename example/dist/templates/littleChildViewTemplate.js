"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fakeReact_1 = require("../fakeReact");
function template(viewCtrl) {
    return fakeReact_1.React.createElement("div", { class: "main-element" },
        fakeReact_1.React.createElement("h1", null, viewCtrl.title),
        "I am little child view",
        fakeReact_1.React.createElement("a", { href: "javascript:void(0)", class: "little-child-view" }, "Me, I work"),
        fakeReact_1.React.createElement("a", { href: "javascript:void(0)", class: "overwrite-events" }, "I should do nothing on click as events are overwritten"),
        fakeReact_1.React.createElement("p", null,
            fakeReact_1.React.createElement("input", { type: "text", name: "firstName", class: "first-name-field", value: viewCtrl.model.firstName }),
            fakeReact_1.React.createElement("button", { class: "update-first-name" }, "Update first name")),
        fakeReact_1.React.createElement("p", null,
            fakeReact_1.React.createElement("input", { type: "text", name: "lastName", class: "last-name-field", value: viewCtrl.model.lastName }),
            fakeReact_1.React.createElement("button", { class: "update-last-name" }, "Update last name")),
        fakeReact_1.React.createElement("p", null,
            fakeReact_1.React.createElement("button", { class: "save" }, "Save")));
}
exports.template = template;
