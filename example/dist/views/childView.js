"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../lib/dist/index");
var childViewTemplate_1 = require("../templates/childViewTemplate");
var baseView_1 = require("./baseView");
var ChildView = (function (_super) {
    __extends(ChildView, _super);
    function ChildView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "ChildView";
        return _this;
    }
    ChildView.prototype.eventsAreOverwritten = function () {
        alert("Events are overwritten but I may be able to do something about it!");
    };
    ChildView = __decorate([
        index_1.BackboneViewProperties({
            events: {
                "click a.overwrite-events": "eventsAreOverwritten"
            },
            template: childViewTemplate_1.template
        })
    ], ChildView);
    return ChildView;
}(baseView_1.BaseView));
exports.ChildView = ChildView;
