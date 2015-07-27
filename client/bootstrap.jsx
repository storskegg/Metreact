Meteor.startup(function () {
  "use strict";

  console.group('client/bootstrap.es6');

  console.debug('Rendering <Metreact /> to #root');
  React.render(<Metreact />, document.getElementById('root'));

  console.groupEnd('client/bootstrap.es6');
});
