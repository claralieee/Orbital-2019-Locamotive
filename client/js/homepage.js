Template.homepage.rendered = function() {

}

Template.homepage.events({
	"submit .startpage": function(event){
		var destination = event.target.destination.value;
		var start = event.target.startDate.value;
		var end = event.target.endDate.value;

		if(isNotEmpty(destination) &&
			isNotEmpty(start) &&
			isNotEmpty(end)) {

			Bert.alert("You Can Start Planning Now!", "success", "growl-top-right");
			Router.go("/build");

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
