Trips = new Mongo.Collection('Trips');

PlannerData = new Mongo.Collection('PlannerData');

ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

TripImages = new FS.Collection("TripImages", {
	stores: [new FS.Store.GridFS("TripImages")]
});

ProfileImages.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	},
	download: function(){
		return true;
	}
});

TripImages.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	},
	download: function(){
		return true;
	}
});

UserImages = new Mongo.Collection("UserImages");

UserImages.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});

// For Easy Search
///////////////////

TripsIndex = new EasySearch.Index({
	engine: new EasySearch.MongoDB({
		sort: function() {
			return { createdAt: -1 };
		},
		selector: function(searchObject, options, aggregation) {
			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
			categoryFilter = options.search.props.categoryFilter;

			if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
				selector.category = categoryFilter;
			}

			return selector;
		}
	}), 
	collection: Trips,
	fields: ['tripName'],
	defaultSearchOptions: {
		limit: 8
	},
	permission: () => {
		return true;
	}
});