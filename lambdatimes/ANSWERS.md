1) PropTypes are used to ensure the proper data type is being received by a component. Type checking data further prevents errors, and avoids certain metas where users input the wrong/unexpected data, potentially crashing our app.

2) There are 3 phases: mounting, updating, and unmounting. Described also as birth, growth, and death. Once a component is checked for mounting, it is altered or updated, then after serving its purpose in the app, is unmounted.

3) A HOC is a component that takes in another component/function. These HOC can wrap/alter the incoming components adding to their versatility and reusability.

4) Styling: you can use typical CSS, you can use Styled-Components, or you can use ReactStrap. Typical CSS grants you the most control, but also takes the most time. Styled-Components are faster than CSS, and can be used to create Higher-Order-Styling(haha), wrapping previously styled components in a new one. ReactStrap are premade, sometimes complex, components that you can add to your App as you wish. Very fast, but not as easy to change.
