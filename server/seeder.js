Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

    	// Super User
      Accounts.createUser({
        username: 'Super User',
        email: 'Super@user.com',
        password: 'password',
        profile: {
        	laughScore: 0,
        	frownScore: 0,
          pukeScore: 0,
        }
      });

      var user0Id = Meteor.users.findOne({username: 'Super User'})._id;

      Plans.insert({
        planName: "Lame Plan 1",
        planPost: "This is a very very lame plan",
        author: "Super User",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["Super User"],
        userId: user0Id,
      });
      console.log("Super User Created");
      console.log("Super User Plan Created");

      // User 1
      Accounts.createUser({
        username: 'User1',
        email: 'user1@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user1Id = Meteor.users.findOne({username: 'User1'})._id;

      Plans.insert({
        planName: "Funny Plan 1",
        planPost: "This is a very very Funny plan",
        author: "User1",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User1"],
        userId: user1Id,
      });
      console.log("User1 Created");
      console.log("User1 Plan Created");

      // User 2
      Accounts.createUser({
        username: 'User2',
        email: 'user2@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user2Id = Meteor.users.findOne({username: 'User2'})._id;

      Plans.insert({
        planName: "Nasty Plan 1",
        planPost: "This is a very very Nasty plan",
        author: "User2",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User2"],
        userId: user2Id,
      });
      console.log("User2 Created");
      console.log("User2 Plan Created");

      // User 3
      Accounts.createUser({
        username: 'User3',
        email: 'user3@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user3Id = Meteor.users.findOne({username: 'User3'})._id;

      Plans.insert({
        planName: "Funny Plan 2",
        planPost: "This is a very very Funny plan",
        author: "User3",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User3"],
        userId: user3Id,
      });
      console.log("User3 Created");
      console.log("User3 Plan Created");

      // User 4
      Accounts.createUser({
        username: 'User4',
        email: 'user4@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user4Id = Meteor.users.findOne({username: 'User4'})._id;

      Plans.insert({
        planName: "Lame Plan 2",
        planPost: "This is a very very Lame plan",
        author: "User4",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User4"],
        userId: user4Id,
      });
      console.log("User4 Created");
      console.log("User4 Plan Created");

      // User 5
      Accounts.createUser({
        username: 'User5',
        email: 'user5@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user5Id = Meteor.users.findOne({username: 'User5'})._id;

      Plans.insert({
        planName: "Nasty Plan 2",
        planPost: "This is a very very Nasty plan",
        author: "User5",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User5"],
        userId: user5Id,
      });
      console.log("User5 Created");
      console.log("User5 Plan Created");

      // User 6
      Accounts.createUser({
        username: 'User6',
        email: 'user6@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user6Id = Meteor.users.findOne({username: 'User6'})._id;

      Plans.insert({
        planName: "Funny Plan 3",
        planPost: "This is a very very Funny plan",
        author: "User6",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User6"],
        userId: user6Id,
      });
      console.log("User6 Created");
      console.log("User6 Plan Created");

      // User 7
      Accounts.createUser({
        username: 'User7',
        email: 'user7@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user7Id = Meteor.users.findOne({username: 'User7'})._id;

      Plans.insert({
        planName: "Lame Plan 3",
        planPost: "This is a very very Lame plan",
        author: "User7",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User7"],
        userId: user7Id,
      });
      console.log("User7 Created");
      console.log("User7 Plan Created");

      // User 8
      Accounts.createUser({
        username: 'User8',
        email: 'user8@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user8Id = Meteor.users.findOne({username: 'User8'})._id;

      Plans.insert({
        planName: "Nasty Plan 3",
        planPost: "This is a very very Nasty plan",
        author: "User8",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User8"],
        userId: user8Id,
      });
      console.log("User8 Created");
      console.log("User8 Plan Created");

      // User 9
      Accounts.createUser({
        username: 'User9',
        email: 'user9@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user9Id = Meteor.users.findOne({username: 'User9'})._id;

      Plans.insert({
        planName: "Funny Plan 3",
        planPost: "This is a very very Funny plan",
        author: "User9",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User9"],
        userId: user9Id,
      });
      console.log("User9 Created");
      console.log("User9 Plan Created");

      // User 10
      Accounts.createUser({
        username: 'User10',
        email: 'user10@example.com',
        password: 'password',
        profile: {
          laughScore: 0,
          frownScore: 0,
          pukeScore: 0,
        }
      });

      var user10Id = Meteor.users.findOne({username: 'User10'})._id;

      Plans.insert({
        planName: "Nasty Plan 4",
        planPost: "This is a very very Nasty plan",
        author: "User10",
        date: date,
        createdAt: new Date(),
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["User10"],
        userId: user10Id,
      });
      console.log("User10 Created");
      console.log("User10 Plan Created");

      console.log("  ");
      console.log("User Database Seeded! Now get to work! :)");
      console.log("Plans Database Seeded! Isn't that nice?! :P");

  }

});
