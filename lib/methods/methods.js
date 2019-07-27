if (Meteor.isServer) {
	Meteor.methods({

		// Method for adding trips (need to edit)
		addTrips: function(tripName, tripPost) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Trips.insert({
					tripName: tripName,
					tripPost: tripPost,
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

		//to delete a plan
		deletePlan: function(plansId) {
			
			if (!Meteor.userId()) {
				throw new Meteor.Error('Not Authorised');
				this.stop();
				return false;
			
			} else {
				Plans.remove(plansId);
			}
		}

		countVote: function(thisTrip, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Trips.update(thisTrip, { $addToSet: { voted: Name}});
			}
		},

		userPointLaugh: function(tripAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(tripAuthor, { $inc: {'profile.laughScore': +1}});
			}
		},

		laughVote: function(thisUser, thisTrip) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Trips.update(thisTrip, {$inc: {laughScore: +1}});
			}
		},

		userPointFrown: function(tripAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(tripAuthor, { $inc: {'profile.frownScore': +1}});
			}
		},

		frownVote: function(thisUser, thisTrip) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Trips.update(thisTrip, {$inc: {frownScore: +1}});
			}
		},

		userPointPuke: function(tripAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(tripAuthor, { $inc: {'profile.pukeScore': +1}});
			}
		},

		pukeVote: function(thisUser, thisTrip) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Trips.update(thisTrip, {$inc: {pukeScore: +1}});
			}
		},

	});
	
}














