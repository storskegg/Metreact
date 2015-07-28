AlertBox = React.createClass({
  render () {
    "use strict";

    return (
      <div data-alert className="alert-box {this.props.alertType}" tabIndex="0" aria-live="assertive" role="alertdialog">
        {this.props.children}
        <button tabIndex="0" className="close" aria-label="Close Alert">&times;</button>
      </div>
    );
  }
});
