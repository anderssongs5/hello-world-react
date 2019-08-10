import React, {Component} from 'react'

class ComponentA extends Component {
    render() {
        return <p>Component A</p>
    }
}

class ComponentB extends Component {
    render() {
        return <p>Component B</p>
    }
}

// function useConditionalRendering (displayA) {
//     return displayA ? <ComponentA /> : <ComponentB />
// }

export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { displayA: false }
    }

    render() {
        // const conditionalComponent = useConditionalRendering(this.state.displayA)
        // const conditionalComponent = this.state.displayA 
        // ? <ComponentA /> 
        // : <ComponentB />

        return (
            <div>
                <h4>Conditional Rendering</h4>
                {/* {useConditionalRendering(this.state.displayA)} */}
                {/* {conditionalComponent} */}
                {this.state.displayA 
                    ? <ComponentA /> 
                    : <ComponentB />
                }
            </div>
        );
    }
}