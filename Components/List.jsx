// ES6 class syntax will break the mixins. Must use React.createClass()
List = React.createClass({
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
