Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Browse
	this.route('trips', { //used to be 'browse'
		path: '/trips',
		template: 'trips'
	});

	// Homepage
	this.route('homepage', {
		path: '/',
		template: 'homepage'
	});
	
	// Login
	this.route('login', {
		path: '/login',
		template: 'login'
	});

	// Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	// Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

	// Timetable
	this.route('plan', {
		path: '/plan',
		template: 'plan'
	});

	// Share
	this.route('share', {
		path: '/share',
		template: 'share'
	});
});