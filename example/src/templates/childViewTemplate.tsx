import { TestView } from "../views/testView";
import { React } from "../fakeReact";

export function template(viewCtrl: TestView) {
    return <div class="main-element">
        <h1>{viewCtrl.title}</h1>
        I am child view
        <a href="javascript:void(0)" class="overwrite-events">Click me for test in the child view</a>
    </div>
}