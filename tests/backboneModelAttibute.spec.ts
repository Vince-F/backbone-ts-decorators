import { Person } from "../example/src/models/personModel";
import {  } from 'ts-jest/utils'
import { Model } from "backbone";

describe("BackboneModelAttribute", () => {
    it("should call the Backbone model get and return the correct value", () => {
        let sut = new Person({
            firstName:"John",
            lastName:"Doe"
        });
        let backboneGetMock = jest.spyOn(Model.prototype, 'get');

        let result = sut.firstName;

        expect(backboneGetMock).toBeCalledTimes(1);
        expect(backboneGetMock).toBeCalledWith("firstName");
        expect(result).toEqual(sut.get("firstName"));
    });

    it("should call the Backbone model set and update value", () => {
        let sut = new Person({
            firstName:"John",
            lastName:"Doe"
        });
        let backboneSetMock = jest.spyOn(Model.prototype, 'set');

        sut.firstName = "Jane";

        expect(backboneSetMock).toBeCalledTimes(1);
        expect(backboneSetMock).toBeCalledWith("firstName","Jane");
        expect(sut.firstName).toEqual(sut.get("firstName"));
    });
});