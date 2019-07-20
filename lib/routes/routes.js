Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Jokes
	this.route('browse', {
		path: '/browse',
		template: 'browse'
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

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});