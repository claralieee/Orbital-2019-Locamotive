Template.trips.rendered = function() {

}

Template.trips.helpers({
	trips: function() {
		var trips = Trips.find({}, {sort: {createdAt: -1}});
		return trips;
	}
});

Template.trips.events({
	"click #arrow": function() {
		var thisUser = Meteor.userId();
		var thisTrip = Trips.findOne({_id: this._id})._id;
		var tripAuthor = Trips.findOne({_id: this._id}).userId;
		var Name = Meteor.user().username;
		var thisTripsVotes = Trips.findOne({_id: this._id}, {voted: {$in: Name}}).voted;

		if (thisTripsVotes.indexOf(Name) > -1) {
			Bert.alert("You cannot vote twice", "danger", "growl-top-right");
			// In the array!, meaning user has voted
		} else {
			// Not in the Array, Do stuff.
			Meteor.call("countVote", thisTrip, Name);
			Meteor.call("userPointVote", tripAuthor);
			Meteor.call("upvote", thisUser, thisTrip);
			Bert.alert("Your Vote Was Placed", "success", "growl-top-right");

		}

		if (Name == thisTripsVotes) {
			Bert.alert("You cannot vote for your own trip", "danger", "growl-top-right");
		}
	},

});