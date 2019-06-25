Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Jokes
	this.route('plans', {
		path: '/plans',
		template: 'plans'
	});

	// Login
	this.route('login', {
		path: '/',
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

	// Rankings
	this.route('rankings', {
		path: '/rankings',
		template: 'rankings'
	});

	// Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});