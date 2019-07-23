Template.tripForm.rendered = function() {

}

Template.tripForm.events({
	"submit .trip-post": function() {
		var tripName = event.target.tripName.value;
		var tripPost = event.target.tripPost.value;

		if (isNotEmpty(tripName) &&
			isNotEmpty(tripPost)) {

			Meteor.call('addJokes', tripName, tripPost);

			event.target.tripName.value = "";
			event.target.tripPost.value = "";

			Bert.alert("Your Joke Was Posted!", "success", "growl-top-right");

		} else {
			
			Bert.alert("something went wrong", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};