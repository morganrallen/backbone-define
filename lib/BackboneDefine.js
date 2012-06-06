function define(dest, name, protoProps, classProps) {
	protoProps = protoProps || {};
	protoProps.className = name;

	var child = this.extend(protoProps, classProps);

	child.define = function(name, protoProps, classProps) {
		return define.call(this, dest, name, protoProps, classProps);
	}

	dest[name] = child;

	return child;
}

var extendables = [ "Collection", "Model", "Router", "View" ];

function bootstrap(Backbone, classDest) {
	classDest = classDest || Backbone;

	for(var i = 0; i < extendables.length; i++) {
		Backbone[extendables[i]+ "s"] = {};
		classDest[extendables[i]].define = (function(dest) {
			return function(name, protoProps, classProps) {
				return define.call(this, dest, name, protoProps, classProps);
			}
		})(Backbone[extendables[i] + "s"]);
	}
}

if(typeof Backbone !== "undefined")
	bootstrap(Backbone);

if(typeof module !== "undefined")
	module.exports = bootstrap;
