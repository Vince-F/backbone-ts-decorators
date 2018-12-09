import {BackboneViewProperties} from ".."
import {View,Model} from "backbone";

let mockTemplate = jest.fn(() => "mockTemplate");

@BackboneViewProperties({
    template:mockTemplate,
    id:"test",
    className:"testClass",
    tagName:"span"
})
class TestView extends View<Model> {
    template: () => string;
}
describe("BackboneViewProperties", () => {
    it("should set DOM class to the view",() => {
        let sut = new TestView();
        sut.render();
        expect(sut.$el.hasClass("testClass")).toBeTruthy();
    });

    it("should set the DOM element tag name defined in decorator", () => {
        let sut = new TestView();
        sut.render();
        expect(sut.$el[0].nodeName).toEqual("SPAN");
    });

    it("should set the DOM element id defined in decorator", () => {
        let sut = new TestView();
        sut.render();
        expect(sut.$el[0].id).toEqual("test");
    });

    it("should call template function defined in decorator", () => {
        let sut = new TestView();
        sut.template();

        expect(mockTemplate).toBeCalledTimes(1);
    });
});