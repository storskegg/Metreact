Tasks = new Mongo.Collection("tasks");

(() => {
  'use strict';

  let App = React.createClass({
    render() {
      return (
        <div>
          <RolesList />
          <RoleView />
        </div>
      );
    }
  });

  Meteor.methods({
    insertTask: (task) => {
      check(task, {
        content: String
      });

      Tasks.insert(task);
    }
  });

  if (Meteor.isClient) {
    Meteor.startup(() => {
      React.render(<App />, document.getElementById('root'));
    });
  }
}());
