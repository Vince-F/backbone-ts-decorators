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
var testViewTemplate_1 = require("../templates/testViewTemplate");
var childView_1 = require("./childView");
var baseView_1 = require("./baseView");
var littleChildView_1 = require("./littleChildView");
var personCollection_1 = require("../models/personCollection");
var TestView = (function (_super) {
    __extends(TestView, _super);
    function TestView(options) {
        var _this = _super.call(this, options) || this;
        _this.title = "MyView";
        _this.people = new personCollection_1.PersonCollection([
            { id: 42, firstName: "John", lastName: "Doe" },
            { id: 125, firstName: "Jane", lastName: "Doe" }
        ]);
        _this.childView = new childView_1.ChildView({
            collection: _this.people
        });
        _this.littleChildView = new littleChildView_1.LittleChildView({
            model: _this.people.at(0)
        });
        return _this;
    }
    TestView.prototype.render = function () {
        this.$el.html(this.template(this));
        this.onViewRendered();
        return this;
    };
    TestView.prototype.onViewRendered = function () {
        this.childView.render();
        this.$("#subView").append(this.childView.$el);
        this.littleChildView.render();
        this.$("#little").append(this.littleChildView.$el);
    };
    TestView.prototype.test = function () {
        alert("Hello World!");
    };
    TestView.prototype.callFromTemplate = function () {
        alert("from template!");
    };
    TestView = __decorate([
        index_1.BackboneViewProperties({
            events: {
                "click a.test-link": "test"
            },
            template: testViewTemplate_1.template
        })
    ], TestView);
    return TestView;
}(baseView_1.BaseView));
exports.TestView = TestView;
