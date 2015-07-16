List = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    "use strict";

    return {
      tasks: Tasks.find().fetch()
    };
  },
  render() {
    "use strict";

    return (
      <ul>
        {this.data.tasks.map((task) => {
          return <li key={task._id}>{task.content}</li>;
        })}
      </ul>
    );
  }
});
