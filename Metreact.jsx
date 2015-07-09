class App extends React.Component {
  render() {
    return <h1>Welcome to Meteor! <small>Now with React!</small></h1>;
  }
};

if (Meteor.isClient) {
  Meteor.startup(() => {
    React.render(<App />, document.getElementById('root'));
  });
}

