NewTaskForm = React.createClass({
  onSubmit(e) {
    "use strict";

    e.preventDefault();

    let taskContent = React.findDOMNode(this.refs.content).value;

    Meteor.call('insertTask', {
      content: taskContent
    });

    React.findDOMNode(this.refs.content).value = '';
  },

  render() {
    "use strict";

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="content" placeholder="Add a task..." />
      </form>
    );
  }
});
