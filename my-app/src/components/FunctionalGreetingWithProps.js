import React from 'react';

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello {props.name}, {props.greeting}. Congratz on your {props.age} birthday</h1>;
}

export default FunctionalGreetingWithProps