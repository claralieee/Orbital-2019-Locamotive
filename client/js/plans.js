Template.plans.rendered = function() {
	$("#plans-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.plans.helpers({
	plans: function() {
		var plans = Plans.find({}, {sort: {createdAt: -1}});
		return plans;
	}
});

Template.plans.events({
	"click #laugh": function() {
		var thisUser = Meteor.userId();
		var thisPlan = Plans.findOne({_id: this._id})._id;
		var planAuthor = Plans.findOne({_id: this._id}).userId;
		var Name = Meteor.user().username;
		var thisPlansVotes = Plans.findOne({_id: this._id}, {voted: {$in: Name}}).voted;

		if (thisPlansVotes.indexOf(Name) > -1) {
			Bert.alert("You cannot vote twice", "danger", "growl-top-right");
			// In the array!, meaning user has voted
		} else {
			// Not in the Array, Do stuff.
			Meteor.call("countVote", thisPlan, Name);
			Meteor.call("userPointLaugh", planAuthor);
			Meteor.call("laughVote", thisUser, thisPlan);
			Bert.alert("Your Vote Was Placed", "success", "growl-top-right");

		}

		if (Name == thisPlansVotes) {
			Bert.alert("You cannot vote for your own plan", "danger", "growl-top-right");
		}
	},

	"click #frown": function() {
		var thisUser = Meteor.userId();
		var thisPlan = Plans.findOne({_id: this._id})._id;
		var planAuthor = Plans.findOne({_id: this._id}).userId;
		var Name = Meteor.user().username;
		var thisPlansVotes = Plans.findOne({_id: this._id}, {voted: {$in: Name}}).voted;

		if (thisPlansVotes.indexOf(Name) > -1) {
			Bert.alert("You cannot vote twice", "danger", "growl-top-right");
			// In the array!, meaning user has voted
		} else {
			// Not in the Array, Do stuff.
			Meteor.call("countVote", thisPlan, Name);
			Meteor.call("userPointFrown", planAuthor);
			Meteor.call("frownVote", thisUser, thisPlan);
			Bert.alert("Your Vote Was Placed", "success", "growl-top-right");

		}

		if (Name == thisPlansVotes) {
			Bert.alert("You cannot vote for your own plan", "danger", "growl-top-right");
		}
	},

	"click #puke": function() {
		var thisUser = Meteor.userId();
		var thisPlan = Plans.findOne({_id: this._id})._id;
		var planAuthor = Plans.findOne({_id: this._id}).userId;
		var Name = Meteor.user().username;
		var thisPlansVotes = Plans.findOne({_id: this._id}, {voted: {$in: Name}}).voted;

		if (thisPlansVotes.indexOf(Name) > -1) {
			Bert.alert("You cannot vote twice", "danger", "growl-top-right");
			// In the array!, meaning user has voted
		} else {
			// Not in the Array, Do stuff.
			Meteor.call("countVote", thisPlan, Name);
			Meteor.call("userPointPuke", planAuthor);
			Meteor.call("pukeVote", thisUser, thisPlan);
			Bert.alert("Your Vote Was Placed", "success", "growl-top-right");

		}

		if (Name == thisPlansVotes) {
			Bert.alert("You cannot vote for your own plan", "danger", "growl-top-right");
		}	
	},

});