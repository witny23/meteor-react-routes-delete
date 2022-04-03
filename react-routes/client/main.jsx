import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// the following is a class component

// class Signup extends React.Component {
//   render() {
//     return (
//       <p>Signup component placeholder</p>
//     );
//   }
// };

// the following is a functional component that returns jsx
const Signup = () => (
  <div>
    <h1>Signup here!</h1>
  </div>
);


// Challenge 1, breakout the Signup component into its own file
// to do so:
//    - inside of imports/ui
//        - create the Signup.jsx
//        - define the component and export as default
//    - import and use it in client/main.jsx

// Challenge 2, create a Link functional component
// to do so:
//  - create imports/ui/Link.jsx
//  - import Link into client/main.jsx
//  - render Link (just replace <Signup /> in render)

Meteor.startup(() => {
  render(<Signup />, document.getElementById('react-target'));
});
