const JsDom = require("jsdom").JSDOM;

const mockDom = new JsDom();

global.document = mockDom.window.document;
global.window = mockDom.window;