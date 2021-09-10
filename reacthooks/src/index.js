import React, { useState, useEffect } from 'react';
export default (props) => {
    console.log('render()');    
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    // componentDidUpdate(), watching a variable
    useEffect(() => {
        console.log(`count is now ${count}`);
    }, [count]);
    
    // componentDidMount()
    useEffect(() => {
        console.log('Runs once');
    }, []);

    // componentDidUpdate()
    useEffect(() => {
        console.log('Effect runs after every render');
    });

    // componentWillUnmount()
    useEffect(() => {
        return () => {
            console.log('Runs when the Component is removed');
        }
    }, [])
    
    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}