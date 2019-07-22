Template.navbar.rendered = function(){

}

Template.navbar.events({
	"click .logout-btn": function(event){
		
		Meteor.logout(function(err){
			
			if(err) {

				Bert.alert(err.reason, "danger", "growl-top-right");
			
			} else {

				Router.go('/login');
				Bert.alert("You Are Now Logged Out", "success", "growl-top-right");

			}

		});
		
	},
});