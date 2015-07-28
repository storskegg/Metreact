DisconnectedAlert = React.createClass({
  render () {
    "use strict";

    return (
      <AlertBox alertType="alert">
        <LoadingSpinner /> Disconnected: Attempting to reconnect to server...
      </AlertBox>
    );
  }
});
