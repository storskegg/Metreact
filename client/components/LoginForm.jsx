LoginForm = React.createClass({
  render () {
    "use strict";

    return (
      <div className="panel">
        <h2>Please sign in using your Restore Health email.</h2>
        <ul className="button-group">
          <li><SignInButton /></li>
          <li><JoinButton /></li>
        </ul>
      </div>
    );
  }
});
