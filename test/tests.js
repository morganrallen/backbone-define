var Backbone = require("backbone");
require("../")(Backbone);

test("Bootstapping completed", function() {
	ok(typeof(Backbone.Collections) !== undefined, "Backbone.Collections exists");
	ok(typeof(Backbone.Models) !== undefined, "Backbone.Models exists");
	ok(typeof(Backbone.Views) !== undefined, "Backbone.Views exists");
	ok(typeof(Backbone.Routers) !== undefined, "Backbone.Routers exists");
});


test("Creating Named Classes", function() {
	Backbone.Collection.define("NamedCollection", {
		initialize: function(models, options) {

		}
	}, {
		classProperty: true
	});
	ok(typeof(Backbone.Collections.NamedCollection) !== undefined, ".Collections.NamedCollection exists");

	Backbone.Model.define("NamedModel", {
		initialize: function(models, options) {

		}
	}, {
		classProperty: true
	});
	ok(typeof(Backbone.Models.NamedModel) !== undefined, ".Models.NamedModel exists");

	Backbone.View.define("NamedView", {
		initialize: function(models, options) {

		}
	}, {
		classProperty: true
	});
	ok(typeof(Backbone.Views.NamedView) !== undefined, ".Views.NamedView exists");

	Backbone.Router.define("NamedRouter", {
		initialize: function(models, options) {

		}
	}, {
		classProperty: true
	});
	ok(typeof(Backbone.Routers.NamedRouter) !== undefined, ".Routes.NamedRoute exists");
});

test("Class Property Set", function() {
	ok(Backbone.Collections.NamedCollection.classProperty, "Collections.NamedCollection.classProperty === true");
	ok(Backbone.Models.NamedModel.classProperty, "Models.NamedModel.classProperty === true");
	ok(Backbone.Views.NamedView.classProperty, "Views.NamedView.classProperty === true");
	ok(Backbone.Routers.NamedRouter.classProperty, "Routers.NamedRouter.classProperty === true");
});

test("Creating Named Subsclass", function() {
	Backbone.Collections.NamedCollection.define("AnotherNamedCollection", {}, {classProperty: true});
	Backbone.Models.NamedModel.define("AnotherNamedModel", {}, {classProperty: true});
	Backbone.Views.NamedView.define("AnotherNamedView", {}, {classProperty: true});
	Backbone.Routers.NamedRouter.define("AnotherNamedRouter", {}, {classProperty: true});

	ok(Backbone.Collections.AnotherNamedCollection, "AnotherNamedCollection exists");
	ok(Backbone.Models.AnotherNamedModel, "AnotherNamedModel exists");
	ok(Backbone.Views.AnotherNamedView, "AnotherNamedView exists");
	ok(Backbone.Routers.AnotherNamedRouter, "AnotherNamedRouter exists");
});
