RoleViewBody = React.createClass({
  render() {
    "use strict";

    return (
      <div styleName="position: relative;">
        <ul className="tabs vertical" data-tab>
          <li className="tab-title active"><a href="#repReport">Rep Report</a></li>
          <li className="tab-title"><a href="#faxToEmail">Fax <i className="ion-arrow-right-c"></i> Email Targets</a></li>
          <li className="tab-title"><a href="#panel31">Tab 3</a></li>
          <li className="tab-title"><a href="#panel41">Tab 4</a></li>
        </ul>
        <div className="tabs-content">
          <AlertsList />
          <LoginForm />
          <div className="content active" id="repReport">
            <div className="row fluid">
              <div className="small-12 columns">
                <header>
                  <h1>Sales Rep Report</h1>
                  <h4>Now with awesome sauce!</h4>
                </header>

                <table className="rhp-table" role="grid">
                  <thead>
                    <tr>
                      <th>Rep ID</th>
                      <th>Username</th>
                      <th>TLD</th>
                      <th>Fax Num</th>
                      <th>Faxes To</th>
                      <th>Start Date</th>
                      <th>NPI's</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1234</td>
                      <td>jdoe</td>
                      <td>mfirestone-sales</td>
                      <td>8888987412</td>
                      <td>RHP</td>
                      <td>2013-10-01</td>
                      <td>1234567890, 4567891230, 7890123456</td>
                    </tr>
                    <tr>
                      <td>871</td>
                      <td>clee</td>
                      <td>hm-tqoe</td>
                      <td>8885551489</td>
                      <td>TCS</td>
                      <td>2014-06-18</td>
                      <td>1234567890, 4567891230, 7890123456, 1234567890, 4567891230, 7890123456, 1234567890, 4567891230, 7890123456, 1234567890, 4567891230, 7890123456</td>
                    </tr>
                    <tr>
                      <td>98</td>
                      <td>jdoe</td>
                      <td>mfirestone-sales</td>
                      <td>8888987412</td>
                      <td>RHP</td>
                      <td>2013-10-01</td>
                      <td>1234567890, 4567891230, 7890123456</td>
                    </tr>
                    <tr>
                      <td>1234</td>
                      <td>jdoe</td>
                      <td>mfirestone-sales</td>
                      <td>8888987412</td>
                      <td>RHP</td>
                      <td>2013-10-01</td>
                      <td>1234567890, 4567891230, 7890123456</td>
                    </tr>
                    <tr>
                      <td>1234</td>
                      <td>jdoe</td>
                      <td>mfirestone-sales</td>
                      <td>8888987412</td>
                      <td>RHP</td>
                      <td>2013-10-01</td>
                      <td>1234567890, 4567891230, 7890123456</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="content" id="faxToEmail">
            <div className="row fluid">
              <div className="small-12 columns">
                <header>
                  <h1>Fax <i className="ion-arrow-right-c"></i> Email Targets</h1>
                </header>

                <table className="rhp-table" role="grid">
                  <thead>
                    <tr>
                      <th>Fax Number</th>
                      <th>Target Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>6085550475</td><td>efax-location3@restorehc.com</td></tr>
                    <tr><td>7275553766</td><td>efax-location1@restorehc.com</td></tr>
                    <tr><td>7275553767</td><td>efax-location1@restorehc.com</td></tr>
                    <tr><td>7275553768</td><td>efax-location2@restorehc.com</td></tr>
                    <tr><td>7275553769</td><td>efax-location1@restorehc.com</td></tr>
                    <tr><td>8555553263</td><td>efax-location1@restorehc.com</td></tr>
                    <tr><td>8665559158</td><td>efax-location3@restorehc.com</td></tr>
                    <tr><td>8665555491</td><td>efax-location3@restorehc.com</td></tr>
                    <tr><td>8665555175</td><td>efax-location3@restorehc.com</td></tr>
                    <tr><td>8885559225</td><td>efax-location2@restorehc.com</td></tr>
                    <tr><td>8885552670</td><td>efax-location2@restorehc.com</td></tr>
                    <tr><td>8885554734</td><td>efax-location2@restorehc.com</td></tr>
                    <tr><td>8885551189</td><td>efax-location2@restorehc.com</td></tr>
                    <tr><td>8885550328</td><td>efax-location1@restorehc.com</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="content" id="panel31">
            <p>This is the third panel of the basic tab example. This is the third panel of the basic tab example.</p>
          </div>
          <div className="content" id="panel41">
            <p>This is the fourth panel of the basic tab example. This is the fourth panel of the basic tab example.</p>
          </div>
        </div>
      </div>
    );
  }
});
