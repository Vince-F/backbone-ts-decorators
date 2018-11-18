import { TestView } from "../views/testView";
import { React } from "../fakeReact";

export function template(viewCtrl: TestView) {
    return <div class="main-element">
        <h1>{viewCtrl.title}</h1>
        <a href="javascript:void(0)" class="test-link">Click me for test</a>
        <a href="javascript:void(0)" onClick={viewCtrl.callFromTemplate}>Me, I call directly the controller</a>
        <div id="subView"></div>
        <div id="little"></div>
    </div>
}