import React, { useReducer } from "react";
const value = {
    count: 0
}
const actionCount = (count, action) => {
    switch (action.type) {
        case 'increment':
            return {count: value.count + 1};
        case 'dicrement':
            return {count: value.count - 1};
        case 'reset':
            return 0;
        default:
            return "false";
    }
}

const About = () => {
    const [count, dispatch] = useReducer(actionCount, value)
    return (
        <>
            <div>
                <h3>Count: {value.count}</h3>
                <button onClick={() => dispatch('increment')}>+</button>
                <button onClick={() => dispatch('decrement')}>-</button>
                <button onClick={() => dispatch('reste')}>reset</button>
            </div>
        </>
    )
}

export default About;