Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.chat.helpers({
    chats: function () {
      return Messages.find({});
    }
  });

  Template.chat.events({
    'submit form': function (event) {
      var $input = $('#chat_input')
      Messages.insert({text: $input.val()})
      $input.val("")
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
