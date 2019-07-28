Template.homepage.rendered = function() {
	
}

Template.homepage.events({
	"submit .dest-form": function() {
		var destInput = event.target.destInput.value;
		var startDate = event.target.startDate.value;
		var endDate = event.target.endDate.value;

		if (isNotEmpty(destInput) &&
			isNotEmpty(startDate) &&
			isNotEmpty(endDate)) {

			//Meteor.call('startPlan', destInput, startDate, endDate);
			Meteor.call('passPlannerData', destInput, startDate, endDate);

			event.target.destInput.value = "";
			event.target.startDate.value = "";
			event.target.endDate.value = "";

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