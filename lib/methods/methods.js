if (Meteor.isServer) {

	Meteor.methods({
		
		//adding plans
		addPlans: function(title, selected, description) {

			if(!Meteor.userId()) {
				throw new Meteor.Error('Not Authorised');
				return false;

			} else {
				var username = Meteor.user().username;


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

		/*startPlan: function {
			link to timetable
		} */

	});
	
}