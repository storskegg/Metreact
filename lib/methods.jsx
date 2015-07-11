Meteor.methods({
  insertTask: (task) => {
    check(task, {
      content: String
    });

    Tasks.insert(task);
  }
});
