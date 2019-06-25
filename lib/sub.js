if (Meteor.isClient) {
	Meteor.subscribe('Plans');
	Meteor.subscribe('Users');
	Meteor.subscribe('ProfileImages');
	Meteor.subscribe('UserImages');
}