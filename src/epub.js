var Book = require('./book');
var EpubCFI = require('./epubcfi');
var Rendition = require('./rendition');
var Contents = require('./contents');

function ePub(_url) {
	return new Book(_url);
};

ePub.VERSION = "0.3.0";

ePub.CFI = EpubCFI;
ePub.Rendition = Rendition;
ePub.Contents = Contents;

ePub.ViewManagers = {};
ePub.Views = {};
ePub.register = {
	manager : function(name, manager){
		return ePub.ViewManagers[name] = manager;
	},
	view : function(name, view){
		return ePub.Views[name] = view;
	}
};

// Default Views
ePub.register.view("iframe", require('./managers/views/iframe'));

// Default View Managers
ePub.register.manager("default", require('./managers/default'));
ePub.register.manager("continuous", require('./managers/continuous'));

module.exports = ePub;