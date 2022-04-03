git 01b - Class Component vs Functional Component

GOALS

    Understand the differencee between functional components and class components

    functional vs class component comparison: https://www.twilio.com/blog/react-choose-functional-components when to use functional or component: https://dev.to/phanimurari/where-to-use-class-component-and-functional-component-1ed5

    In class components, the render method will be called whenever the state of the components changes.

    On the other hand, the Functional components render the UI based on the props.

    When first learning - class Components should be preferred whenever we have the requirement with the state of the component.

    More advanced - functional components can implement Hooks to use the state and other React features even without writing the Class Component

CHALLENGE

    As found in client/main.jsx

    Challenge 1, breakout the Signup component into its own file to do so: - inside of imports/ui - create the Signup.jsx - define the component and export as default - import and use it in client/main.jsx

    Challenge 2, create a Link functional component to do so: - create imports/ui/Link.jsx - import Link into client/main.jsx - render Link (just replace in render)

Stop runaway node/mongo on windows

    taskkill /f /im mongod.exe
    taskkill /f /im node.exe