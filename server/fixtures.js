if (Stocks.find().count() === 0) {
  Stocks.insert({
    LotID: 'Test1',
    Name: 'MICRON1',
    Status: 'loading',
    Remain: 10000
  });
  Stocks.insert({
    LotID: 'Test2',
    Name: 'MICRON2',
     Status: 'loading',
    Remain: 10000
  });
  Stocks.insert({
    LotID: 'Test3',
    Name: 'MICRON3',
     Status: 'process',
    Remain: 10000
  });
  Stocks.insert({
    LotID: 'Test4',
    Name: 'MICRON4',
     Status: 'still',
    Remain: 10000
  });

}

if (Logs.find().count() === 0) {
    Logs.insert({
    LotID: 'Test1',
    NO: 1,
    TimeIN: '2017-09-01 08:00',
    TimeOUT: '2017-09-01 09:00',
    Status: 'OUT',
    QCIN: '1111',
    QCOUT: '2222',
    Note: 'Pass'
  });
    Logs.insert({
    LotID: 'Test1',
    NO: 2,
    TimeIN: '2017-09-01 08:00',
    TimeOUT: '',
    Status: 'IN',
    QCIN: '1111',
    QCOUT: '',
    Note: 'Pass'
  });
    
    Logs.insert({
    LotID: 'Test4',
    NO: 1,
    TimeIN: '2017-09-01 08:00',
    TimeOUT: '2017-09-01 09:00',
    Status: 'OUT',
    QCIN: '1111',
    QCOUT: '1111',
    Note: 'Pass'
  });
  

}

if (Admins.find().count() === 0) {
    Admins.insert({
    ID: '1111',
    Name: 'Peter',
    Status: 'OUT',
    Note: 'Pass'
  });
    Admins.insert({
    ID: '2222',
    Name: 'Matin',
    Status: 'OUT',
    Note: 'Pass'
  });

}


// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2    
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0    
  });
 for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000),
      commentsCount: 0
    });
  }


}

