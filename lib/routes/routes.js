Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Jokes
	this.route('plans', {
		path: '/plans',
		template: 'plans'
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

	// Build
	this.route('build', {
		path: '/build',
		template: 'build'
	});

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});