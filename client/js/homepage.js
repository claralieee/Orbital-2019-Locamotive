Template.homepage.rendered = function() {
	
}

Template.homepage.events({
	"submit .dest-form": function() {
		var destination = event.target.destInput.value;
		var start = event.target.start-date.value;
		var end = event.target.end-date.value;

		if (isNotEmpty(destination) &&
			isNotEmpty(start) &&
			isNotEmpty(end)) {

			//Meteor.call('startPlan', destination, start, end);

			event.target.destination.value = "";
			event.target.start.value = "";
			event.target.end.value = "";

			Router.go("/plan");
			Bert.alert("Start Planning!", "success", "growl-top-right");

		} else {
			Bert.alert("Something Went Wrong", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// validation rules
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please Fill In All Fields", "danger", "growl-top-right");
	return false;
};