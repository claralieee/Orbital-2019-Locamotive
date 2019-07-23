Template.signup.rendered = function() {

}

Template.signup.events({
	"submit .form-signup": function(event){

		var username = trimInput(event.target.username.value);
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		var password_confirm = trimInput(event.target.password_confirm.value);

		if (isNotEmpty(email) && 
			isNotEmpty(username) && 
			isNotEmpty(password) && 
			isNotEmpty(password_confirm) &&
			areValidPasswords(password, password_confirm)) {

			//need to update
			Accounts.createUser({
				username: username,
				email: email,
				password: password,
				/*profile: {
					laughScore: 0,
					frownScore: 0,
					pukeScore: 0,
					voted: [],
				}*/

			}, function(err){
				if(err){
					Bert.alert(err.reason, "danger", "growl-top-right");
				} else {
					Bert.alert("Account Created! You Are Now Logged In!", "success", "growl-top-right");
					Router.go("/profile");

				}
			});
			
		}

		return false; // prevent submit

	}
});

//validation rules

//trim inputs
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};

//empty field
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please Fill In All Fields", "danger", "growl-top-right");
	return false;
};

//validate email
isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) {
		return true;
	}
	Bert.alert("Please Use A Valid Email Address", "danger", "growl-top-right");
	return false;
};

//Check Password
isValidPassword = function(password){
	if(password.length <6) {
		Bert.alert("Password Must Be At Least 6 Characters", "danger", "growl-top-right");
		return false;
	}
	return true;
};

// Match Password
areValidPasswords = function(password, confirm) {
	if(!isValidPassword(password)) {
		return false;
	}
	if(password !== confirm) {
		Bert.alert("Passwords Do Not Match", "danger", "growl-top-right");
		return false;
	}
	return true;
};