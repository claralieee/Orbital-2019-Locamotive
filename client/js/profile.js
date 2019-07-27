Template.profile.rendered = function() {
	
}

Template.profile.helpers({

	email: function() {
		if(!Meteor.user()) {
			Bert.alert("Permission Denied. You Are Not Logged In.", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().emails[0].address;
		}
	},

	username: function() {
		if(!Meteor.user()) {
			Bert.alert("Permission Denied. You Are Not Logged In.", "danger", "growl-top-right");
			return false;
		} else {
			return Meteor.user().username;
		}
	}, 

	userTrips: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var userTrips = Trips.find({userId: userId}, {sort: {createdAt: -1}});
		return userTrips;
	},
})

Template.profile.events({

	"click #delete-btn": function() {
		Meteor.call("deleteTrip", this._id);
		Bert.alert("Your Plan Was Deleted", "success", "growl-top-right")
	},
	
})