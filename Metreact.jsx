
(() => {
  'use strict';

  let Tasks = new Mongo.Collection("tasks");

  // ES6 class syntax will break the mixins. Must use React.createClass()
  let List = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
      return {
        tasks: Tasks.find().fetch()
      };
    },
    render() {
      return (
        <ul>
          {this.data.tasks.map((task) => {
            return <li key={task._id}>{task.content}</li>;
          })}
        </ul>
      );
    }
  });

  let NewTaskForm = React.createClass({
    onSubmit(evt) {
      evt.preventDefault();

      let taskContent = React.findDOMNode(this.refs.content).value;

      Meteor.call('insertTask', {
        content: taskContent
      });

      React.findDOMNode(this.refs.content).value = '';
    },

    render() {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="content" placeholder="Add a task..." />
        </form>
      );
    }
  });

  let App = React.createClass({
    render() {
      return (
        <div>
          <h1>Meteor <small>Now with React!</small></h1>
          <NewTaskForm />
          <List />
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
