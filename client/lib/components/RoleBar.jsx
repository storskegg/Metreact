RoleBar = React.createClass({
  render() {
    return (
      <nav id="roleBar" className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">RD Enterprise</a></h1>
          </li>
          {/* Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone */}
          <li className="toggle-topbar menu-icon"><a href="#"></a></li>
        </ul>

        <section className="top-bar-section hidden">
          {/* Right Nav Section */}
          <ul className="right">
            <li className="active"><a href="#">Right Button Active</a></li>
            <li className="has-dropdown">
              <a href="#">Right Button Dropdown</a>
              <ul className="dropdown">
                <li><a href="#">First link in dropdown</a></li>
                <li className="active"><a href="#">Active link in dropdown</a></li>
              </ul>
            </li>
          </ul>

          {/* Left Nav Section */}
          <ul className="left hidden">
            <li><a href="#">Left Nav Button</a></li>
          </ul>
        </section>
      </nav>
    );
  }
});
