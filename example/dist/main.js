"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testView_1 = require("./views/testView");
var mainView = new testView_1.TestView();
mainView.render();
mainView.$el.appendTo("body");
