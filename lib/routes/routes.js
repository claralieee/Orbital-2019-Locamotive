Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function(){
	// Browse
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

	// Account
	this.route('account', {
		path: '/account',
		template: 'account'
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