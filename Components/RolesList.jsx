RolesList = React.createClass({
  render() {
    return (
      <nav id="rolesList" className="roles-list vertical five-up">
        <a className="item">
          <i className="ion-person-stalker"></i>
          <label>CS</label>
        </a>
        <a className="item hidden">
          <i className="ion-erlenmeyer-flask"></i>
          <label>Lab</label>
        </a>
        <a className="item hidden">
          <i className="icon-i-pharmacy"></i>
          <label>Rx</label>
        </a>
        <a className="item">
          <i className="ion-social-usd"></i>
          <label>Sales</label>
        </a>
        <a className="item active">
          <i className="rune-odin"></i>
          <label>Odin</label>
        </a>
      </nav>
    );
  }
});
