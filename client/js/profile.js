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

	userUpvotes: function() {
		return Meteor.user().profile.votes;
	},

	userImages: function() {
		var username = Meteor.user().username;
		var userId = Meteor.userId();
		var url = UserImages.findOne({username: username}, {userId: userId});
		return url;
	}
});

Template.profile.events({

	"click #delete-btn": function() {
		Meteor.call("deleteTrip", this._id);
		Bert.alert("Your Plan Was Deleted", "success", "growl-top-right")
	},

	"submit .edit-profile": function(event) {
		var file = $('#profileImage').get(0).files[0];

		if (file) {

			fsFile = new FS.File(file);

			ProfileImages.insert(fsFile, function(err, result){
				if (err) {
					throw new Meteor.Error(err);
				} else {

					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLoc,
					});

					Bert.alert("Profile Picture Successfully Changed!", "success", "growl-top-right");
				}
			});

		}

		return false // prevent submit
	}
});