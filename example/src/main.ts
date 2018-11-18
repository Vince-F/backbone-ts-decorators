import { TestView } from "./views/testView";

let mainView = new TestView();
mainView.render();

mainView.$el.appendTo("body");