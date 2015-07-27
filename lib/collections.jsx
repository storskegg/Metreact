Tasks = new Mongo.Collection("tasks");

Meteor.methods({
  insertTask: (task) => {
    "use strict";

    check(task, {
      content: String
    });

    Tasks.insert(task);
  }
});
