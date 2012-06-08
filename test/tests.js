var Backbone = require("backbone"),
	assert = require("assert"),
	vows = require("vows");
require("../")(Backbone);

vows.describe("Bootstapping completed").addBatch({
	"Object Exists": {
		topic: Backbone,

		"Backbone.Collections exists": function(b) { assert.notEqual(undefined, Backbone.Collections); },
		"Backbone.Models exists": function(b) { assert.notEqual(undefined, Backbone.Models); },
		"Backbone.Views exists": function(b) { assert.notEqual(undefined, Backbone.Views); },
		"Backbone.Routers exists": function(b) { assert.notEqual(undefined, Backbone.Routers); }
	}
}).run();

vows.describe("Creating Named Classes").addBatch({
	".Collections.NamedCollection exists": function() {
		Backbone.Collection.define("NamedCollection", {
			initialize: function(models, options) {

			}
		}, {
			classProperty: true
		});
		
		assert.notEqual(Backbone.Collections.NamedCollection, undefined);
	},

	".Models.NamedModel exists": function() {
		Backbone.Model.define("NamedModel", {
			initialize: function(models, options) {

			}
		}, {
			classProperty: true
		});
		
		assert.notEqual(Backbone.Models.NamedModel, undefined)
	},

	".Views.NamedView exists": function() {
		Backbone.View.define("NamedView", {
			initialize: function(models, options) {

			}
		}, {
			classProperty: true
		});

		assert.notEqual(Backbone.Views.NamedView, undefined)
	},

	".Routes.NamedRoute exists": function() {
		Backbone.Router.define("NamedRouter", {
			initialize: function(models, options) {

			}
		}, {
			classProperty: true
		});

		assert.notEqual(Backbone.Routers.NamedRouter, undefined)
	}
}).run();

vows.describe("Class Property Set").addBatch({
"Collections.NamedCollection.classProperty === true": function() { assert.equal(Backbone.Collections.NamedCollection.classProperty, true); },
"Models.NamedModel.classProperty === true": function() { assert.equal(Backbone.Models.NamedModel.classProperty, true); },
"Views.NamedView.classProperty === true": function() { assert.equal(Backbone.Views.NamedView.classProperty, true); },
"Routers.NamedRouter.classProperty === true": function() { assert.equal(Backbone.Routers.NamedRouter.classProperty, true); },
}).run();

vows.describe("Creating Named Subsclass").addBatch({
	"AnotherNamedCollection exists": function() {
		Backbone.Collections.NamedCollection.define("AnotherNamedCollection", {}, {classProperty: true});
		assert.equal(Backbone.Collections.AnotherNamedCollection, true); 
	},

	"AnotherNamedModel exists": function() {
		Backbone.Models.NamedModel.define("AnotherNamedModel", {}, {classProperty: true});
		assert.equal(Backbone.Models.AnotherNamedModel, true); 
	},

	"AnotherNamedView exists": function() {
		Backbone.Views.NamedView.define("AnotherNamedView", {}, {classProperty: true});
		assert.equal(Backbone.Views.AnotherNamedView, true); 
	},

	"AnotherNamedRouter exists": function() {
		Backbone.Routers.NamedRouter.define("AnotherNamedRouter", {}, {classProperty: true});
		assert.equal(Backbone.Routers.AnotherNamedRouter, true); 
	}
});
