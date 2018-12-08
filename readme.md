# backbone-ts-decorators

## Purpose
This library provides Typescript decorators to ease your use of Backbones with Typescript.
At first, it intends to mitigate some issues encountered with Bakcbone that doesn't mix well
with ES6 (and so Typescript) classes and extend. But it also Aspect Oriented Programming to your 
code making the configuration of your view and model in your place, and lets you focus
on the business logic of your views and models.

## Installation

`npm install backbone-ts-decorators`

## API

### BackboneViewProperties
Use it to decorate your views, to provide all the basis so for Backbone to initialise it.

#### Usage
```
@BackboneViewProperties({  
    events: {  
        "click button.save": "save"  
    },  
    template: template  
})  
export class LittleChildView extends BaseView<Person>{  
    save() {  
        this.model.save();  
    }  
}
```

The annotations take a single argument which is a `BackboneViewOptions`.
Here are the properties, note that they are all optionnal:
* template __type: (...args:any[]) => string__  
The function the view will use to generate the HTML. As defined in Backbone documentation,
it's to enforce convention, but it's up to you to implement the render function and call it
in your fashion.
* events __type: { [key:string]:string }__  
The hash of events your view will handle. Note that for now, there is no inheritance on events.
So if you have a view that inherits from another and also defines its own events, you'll need to 
declare again parent's view events if you need them. Maybe an inheritance mechanism will be implemented later.
* tagName __type: string__  
The DOM element which will be the root element of your View.
* className __type: string__  
The class that will be append to your View element.
* id __type: string__  
The DOM id your view will have in the DOM.
* el __type: string__  
DOM element to which your view will be attached.
 
### BackboneModelAttribute
Use it to decorate your property in your Typescript class to that it auto generates getter/setter
that fits Backbone, while using directly the property.

Which means you can now do `console.log(myModel.value)` and under the hood it will do
`console.log(myModel.get("value");` and `myModel.value = 42` will do `myModel.set("value",42)`.

#### usage
```
class Person extends Model {  
    @BackboneModelAttribute()  
    firstName:string;  
    @BackboneModelAttribute()  
    lastName:string;  
}
```

Inside the `@BackboneModelAttribute()` you can optionnaly pass a string which will be used as the attribute 
name in your Backbone model. If none is provided, the property name is used as the attribute name.