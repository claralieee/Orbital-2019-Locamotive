Template.search.rendered = function() {
	$("#search-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#plans-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.search.helpers({
	inputAttributes: function() {
		return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' };
	},
	players: function() {
		return Plans.find({}, { sort: { createdAt: -1 } });
	},
	selectedName: function() {
		var plan = PlansIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedPlan") });
		return plan && plan.planName;
	},
	index: function () {
		return PlansIndex;
	},
	resultsCount: function() {
		return PlansIndex.getComponentDict().get('count');
	},
	showMore: function() {
		return false;
	},

	renderTmpl: () => Template.renderTemplate

});

Template.User.helpers({
	selected: function() {
		return Session.equals("selectedPlan", this.__originalId) ? "selected" : '';
	},
});

Template.User.events({
	'click': function() {
		Session.set("selectedPlan", this.__originalId);
	}
});