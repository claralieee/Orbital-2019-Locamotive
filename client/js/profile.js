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

	userPlans: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var userPlans = Plans.find({userId: userId}, {sort: {createdAt: -1}});
		return userPlans;
	},

	userUpvotes: function() {
		return Meteor.user().profile.votes;
	},
})

Template.profile.events({

	"click #delete-btn": function() {
		Meteor.call("deletePlan", this._id);
		Bert.alert("Your Plan Was Deleted", "success", "growl-top-right")
	},

})