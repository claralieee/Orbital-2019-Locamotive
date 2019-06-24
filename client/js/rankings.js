Template.rankings.rendered = function() {
	$("#rankings-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#jokes-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.rankings.helpers({
	laughKing: function() {
		var laughKing = Meteor.users.findOne({},{sort: {'profile.laughScore': -1}});
		return laughKing;
	},

	frownKing: function() {
		var frownKing = Meteor.users.findOne({},{sort: {'profile.frownScore': -1}});
		return frownKing;
	},

	pukeKing: function() {
		var pukeKing = Meteor.users.findOne({},{sort: {'profile.pukeScore': -1}});
		return pukeKing;
	},
});