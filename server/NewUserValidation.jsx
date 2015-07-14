"use strict";

Accounts.validateNewUser((user) => {
  if (WL_DOMAINS.join('|').toLowerCase().match(user.services.google.email.split('@')[1].toLowerCase())) {
    return true;
  }

  throw new Meteor.Error(403, "User creation is restricted to employees of Restore Health Pharmacies.");
});
