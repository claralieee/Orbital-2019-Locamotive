Router.configure({
	layoutTemplate: 'main_layout'
});

Router.map(function() {
	//jokes
	this.route('jokes', {
		path: '/jokes',
		template: 'jokes'
	});

	//login
	this.route('login', {
		path: '/',
		template: 'login'
	});

	//signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	//Profile
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

	//Rankings
	this.route('rankings', {
		path: '/rankings',
		template: 'rankings'
	});

	//Search
	this.route('search', {
		path: '/search',
		template: 'search'
	});
});