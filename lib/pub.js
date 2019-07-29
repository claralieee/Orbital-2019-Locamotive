if (Meteor.isServer) {
	
	Meteor.publish('Trips', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('not authorized');
		} else {
			return Trips.find();
		}
	});

	Meteor.publish('Users', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('not authorized');
		} else {
			return Meteor.users.find();
		}
	});

	Meteor.publish("ProfileImages", function(){
		return ProfileImages.find();
	});

	Meteor.publish("UserImages", function(){
		return UserImages.find();
	});

	Meteor.publish("TripImages", function() {
		return TripImages.find();
	});

	Meteor.publish("PlannerData", function(){
		return PlannerData.find();
	});

}