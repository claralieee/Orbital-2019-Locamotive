Template.planForm.rendered = function() {

}

Template.planForm.events({
	"submit .plan-post": function() {
		var planName = event.target.planName.value;
		var planPost = event.target.planPost.value;

		if (isNotEmpty(planName) &&
			isNotEmpty(planPost)) {

			Meteor.call('addJokes', planName, planPost);

			event.target.planName.value = "";
			event.target.planPost.value = "";

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