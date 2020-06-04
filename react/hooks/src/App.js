import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
    const [count,setCount] = useState(0);
    
    // 类似于componentDidMount 和  componentDidUpdate
    useEffect(() => {
      // 更新文档的标题
      document.title = `You clicked ${count} times`;
    })

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>Click me</button>
      </div>
    );
}

// class App extends React.Component {
//   constructor(props) {
//      super(props);
//      this.state = {
//        count: 0
//      }
//   }

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({count:this.state.count+1})}>Click me</button>
//       </div>
//     );
//   }
// }

export default App;
