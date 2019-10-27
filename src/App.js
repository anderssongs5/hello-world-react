import React, {Component} from 'react';
import ConditionalSection from './sections/conditional'
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
//   return <h2>{props.title}</h2>;
// }

// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Counter extends Component {
   constructor(props) {
     super(props)
     this.state = { counter: this.props.initialCounter }
     setInterval(() => {
      this.setState({counter: this.state.counter + 1})
     }, 1000)
   }
  // state = { counter: 0 }

  render() {
     // return <span>{this.state.counter}</span>
     return <NumberCounter number={this.state.counter} />
  }
}

class NumberCounter extends Component {
  render() {
    console.log("NumberCounter render(" + this.props.number + ")")
    return <span>{this.props.number}</span>
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumber, 
      multiply, 
      objectWithInfo,
      title
    } = this.props
    // const textoSegunBool = this.props.boolean ? 'Cierto!!' : 'Falso'
    const mappedNumbers = arrayOfNumber.map(multiply)

    return (
      <div>
        {/* <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p> */}
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  title : "Default title"
}

Counter.defaultProps = {
  initialCounter: 0
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Welcome to React" />
        <Text 
          arrayOfNumber = {[2, 3, 10]}
          multiply = {(number) => number * 4}
          objectWithInfo = {{key: 'value 1', key2: 'value2'}}
          number={2} 
          boolean={true} 
          text="Hello from props"
          //title = {<h1>This is the title</h1>}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter initialCounter = {100} />
        <br/><br/>
        <ConditionalSection />
        <br/>
      </header>
    </div>
  );
}

export default App;
