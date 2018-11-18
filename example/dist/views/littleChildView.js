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
var littleChildViewTemplate_1 = require("../templates/littleChildViewTemplate");
var baseView_1 = require("./baseView");
var LittleChildView = (function (_super) {
    __extends(LittleChildView, _super);
    function LittleChildView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "LittleChildView";
        return _this;
    }
    LittleChildView.prototype.anotherOne = function () {
        alert("Another One!");
    };
    LittleChildView.prototype.updateFirstName = function () {
        var inputElem = document.querySelector("input[name='firstName']");
        this.model.firstName = inputElem.value;
    };
    LittleChildView.prototype.updateLastName = function () {
        var inputElem = document.querySelector("input[name='lastName']");
        this.model.lastName = inputElem.value;
    };
    LittleChildView.prototype.save = function () {
        this.model.save();
    };
    LittleChildView = __decorate([
        index_1.BackboneViewProperties({
            events: {
                "click a.little-child-view": "anotherOne",
                "click button.update-first-name": "updateFirstName",
                "click button.update-last-name": "updateLastName",
                "click button.save": "save"
            },
            template: littleChildViewTemplate_1.template
        })
    ], LittleChildView);
    return LittleChildView;
}(baseView_1.BaseView));
exports.LittleChildView = LittleChildView;
