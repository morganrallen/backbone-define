Add ExtJS style class definition to Backbone.
Useful for being able to iterate available classes such as when defining classes server side and sharing with client.
This can be done without knowing to code in names on both sides.

By default store Classes on Backbone.Collections, Backbone.Models, etc;

```javascript
Backbone.Model.define("Person", {
	initialize: function(attributes) {
		Backbone.Model.prototype.initialize.call(this, attributes);
	}
}, {
	someClassProperty: "withvalue"
});

var zaphod = new Backbone.Models.Person({
	name: "Zap"
});
```

Including in the browser will automatically bootstrap Backbone with the Class Objects and adding .define to available extensible Classes.

Use in Node
```javascript
var Backbone = require("Backbone");
require("backbone-define")(Backbone);
```
