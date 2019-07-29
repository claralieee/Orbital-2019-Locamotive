Template.share.rendered = function() {

}

Template.share.events({
	"submit .form-share": function() {
		var tripTitle = event.target.title.value;
		var tripDestination = event.target.destination.value;
		var tripDescription = event.target.description.value;
		var tripFile = $('#selectTrip').get(0).files[0];

		if (isNotEmpty(tripTitle) && isNotEmpty(tripDestination) && isNotEmpty(tripDescription)) {
			if (!Meteor.userId()) {
					throw new Meteor.Error('not authorised');
					return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();
				if (tripFile) {
					fsFile = new FS.File(tripFile);
					TripImages.insert(fsFile, function(err, result){
						if (err) {
							throw new Meteor.Error(err);
						} 
						else {
							var imageLoc = '/cfs/files/TripImages/'+result._id;		
							Trips.insert({
								tripTitle: tripTitle,
								tripDestination: tripDestination,
								tripDescription: tripDescription,
								author: username,
								date: date,
								createdAt: new Date(),
								voteScore: 0,
								voted: [username],
								userId: Meteor.userId(),
								author: Meteor.user().username,
								tripImage: imageLoc,
							});
							Bert.alert("Successfully Uploaded", "success", "growl-top-right");
						}
					});
				}
			}
			event.target.title.value = "";
			event.target.description.value = "";
			event.target.destination.value = "";
		} else {

			Bert.alert("Something Went Wrong", "danger", "growl-top-right");

		}

		return false; // prevent submit

	},
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