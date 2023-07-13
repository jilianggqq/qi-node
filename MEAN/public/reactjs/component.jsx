/*
The simplest way to define a component is to write a JavaScript function:
*/
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

/*
* You can also use an ES6 class to define a component
*/
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/*
* When React sees an element representing a user-defined component, 
it passes JSX attributes to this component as a single object. 
We call this object “props”.
*/
const element = <Welcome name="Peter" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

