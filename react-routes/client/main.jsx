import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

Meteor.startup(() => {
  render("hello from main.jsx", document.getElementById('react-target'));
});
