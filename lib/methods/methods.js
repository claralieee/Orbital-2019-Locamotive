if (Meteor.isServer) {
	Meteor.methods({

		passPlannerData: function(destInput, startDate, endDate) {
			PlannerData.insert({//insert into database
				destInput: destInput,
				startDate: startDate,
				endDate: endDate,
				createdAt: new Date(),
			});
		},

		//to publish a plan
		publishTrip: function(tripTitle, tripDestination, tripDesc) {

			if (!Meteor.userId()) {
				throw new Meteor.Error('not authorised');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Trips.insert({
					tripTitle: tripTitle,
					tripDestination: tripDestination,
					tripDesc: tripDesc,
					author: username,
					date: date,
					createdAt: new Date(),
					voteScore: 0,
					voted: [username],
					userId: Meteor.userId(),
				});
			}
		},

		//to delete a trip
		deleteTrip: function(tripsId) {
			
			if (!Meteor.userId()) {
				throw new Meteor.Error('Not Authorised');
				this.stop();
				return false;
			
			} else {
				Trips.remove(tripsId);
			}
		},

		countVote: function(thisTrip, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Trips.update(thisTrip, { $addToSet: { voted: Name}});
			}
		},

		userPointVote: function(tripAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(tripAuthor, { $inc: {'profile.voteScore': +1}});
			}
		},

		upvote: function(thisUser, thisTrip) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Trips.update(thisTrip, {$inc: {voteScore: +1}});
			}
		}
	});
	
}














