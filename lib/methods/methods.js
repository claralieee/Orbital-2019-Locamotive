if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding plans
		addPlans: function(planName, planPost) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Plans.insert({
					planName: planName,
					planPost: planPost,
					author: username,
					date: date,
					createdAt: new Date(),
					laughScore: 0,
					frownScore: 0,
					pukeScore: 0,
					voted: [username],
					userId: Meteor.userId(), 
				});

			}
		},

		removePlan: function(plansId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Plans.remove(plansId);
			}
		},

		countVote: function(thisPlan, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Plans.update(thisPlan, { $addToSet: { voted: Name}});
			}
		},

		userPointLaugh: function(planAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(planAuthor, { $inc: {'profile.laughScore': +1}});
			}
		},

		laughVote: function(thisUser, thisPlan) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Plans.update(thisPlan, {$inc: {laughScore: +1}});
			}
		},

		userPointFrown: function(planAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(planAuthor, { $inc: {'profile.frownScore': +1}});
			}
		},

		frownVote: function(thisUser, thisPlan) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Plans.update(thisPlan, {$inc: {frownScore: +1}});
			}
		},

		userPointPuke: function(planAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(planAuthor, { $inc: {'profile.pukeScore': +1}});
			}
		},

		pukeVote: function(thisUser, thisPlan) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Plans.update(thisPlan, {$inc: {pukeScore: +1}});
			}
		},

	});
	
}














