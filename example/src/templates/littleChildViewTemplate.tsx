import { React } from "../fakeReact";
import { LittleChildView } from "../views/LittleChildView";

export function template(viewCtrl: LittleChildView) {
    return <div class="main-element">
        <h1>{viewCtrl.title}</h1>
        I am little child view
        <a href="javascript:void(0)" class="little-child-view">Me, I work</a>
        <a href="javascript:void(0)" class="overwrite-events">I should do nothing on click as events are overwritten</a>
        <p>
            <input type="text" name="firstName" class="first-name-field" value={viewCtrl.model.firstName}/> 
            <button class="update-first-name">Update first name</button>
        </p>
        <p>
            <input type="text" name="lastName" class="last-name-field" value={viewCtrl.model.lastName}/>
            <button class="update-last-name">Update last name</button>
        </p>
        <p>
            <button class="save">
                Save
            </button>
        </p>
    </div>
}