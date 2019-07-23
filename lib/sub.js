if (Meteor.isClient) {
	Meteor.subscribe('Trips');
	Meteor.subscribe('Users');
	Meteor.subscribe('ProfileImages');
	Meteor.subscribe('UserImages');
}