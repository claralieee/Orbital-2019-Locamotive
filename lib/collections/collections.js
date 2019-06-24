Jokes = new Mongo.Collection('Jokes');

//For Easy Search

JokesIndex = new EasySearch.Index({
	engine: new EasySearch.MongoDB({
		sort: function() {
			return {createdAt: -1};
		},
		selector: function(searchObject, options, aggregation){
			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
			categoryFilter = options.search.props.categoryFilter;

			if(_.isString(categoryFilter) && !._isEmpty(categoryFilter)) {
				selector.category = categoryFilter;
			}
			return selector;
		}
	}),

	collection: Jokes,
	fields: ['jokeName'],
	defaultSearchOptions: {
		limit: 8
	},
	permission: () => {
		return true;
	}
});