NewTaskForm = React.createClass({
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
