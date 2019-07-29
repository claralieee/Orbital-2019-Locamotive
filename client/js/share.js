Template.share.rendered = function() {

}

Template.share.events({
	"submit .form-share": function() {
		var title = event.target.title.value;
		var destination = event.target.destination.value;
		//change variable, check how to upload the image
		var selected = event.target.tripSelect.value;
		var desc = event.target.description.value;

		if (isNotEmpty(title) &&
			isNotEmpty(destination) &&
			isNotEmpty(selected) &&
			isNotEmpty(desc)) {

			Meteor.call('publishTrip', title, selected, desc);

			event.target.title.value = "";
			event.target.desc.value = "";
			event.target.selected.value = "";

			Bert.alert("Your Plan was Shared!", "success", "growl-top-right");

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


function loopForm(form) {
	var results = '';
	var length = form.elements.length;

	for (var i = 0; i < length - 1; i++) {
		if (form.elements[i].type == "checkbox") {
			if (form.elements[i].checked == "true") {
				results += form.elements[i].value + ', ';
			}
		}

		if (form.elements[length - 1].type == "checkbox") {
			if (form.elements[length - 1].checked == "true") {
				results += form.elements[length - 1];
			}
		}
	}

	return results;
}