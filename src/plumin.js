var opentype = require('opentype.js'),
	paper = require('paper'),
	Font = require('./Font.js'),
	Glyph = require('./Glyph.js'),
	Outline = require('./Outline'),
	Path = require('./Path.js'),
	Node = require('./Node.js'),
	Collection = require('./Collection.js');

paper.PaperScope.prototype.Font = Font;
paper.PaperScope.prototype.Glyph = Glyph;
paper.PaperScope.prototype.Outline = Outline;
paper.PaperScope.prototype.Path = Path;
paper.PaperScope.prototype.Node = Node;
paper.PaperScope.prototype.Collection = Collection;

function plumin( arg ) {
	if ( arguments.length === 1 && arg instanceof Collection ) {
		return arg;
	}

	var c = Object.create( Collection.prototype );
	Collection.apply( c, arguments );
	return c;
}

plumin.opentype = opentype;

plumin.proxy = Collection.proxy.bind(plumin);
plumin.proxy(paper);

module.exports = plumin;
