if (Meteor.isServer) {
	
	Meteor.publish('Plans', function() {
		if(!this.userId){
			return false;
			throw new Meteor.Error('not authorized');
		} else {
			return Plans.find();
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

}