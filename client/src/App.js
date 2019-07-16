// import React ,{Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   state = {
//     response: '',
//     post: '',
//     responseToPost: '',
//   };
  
//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({ response: res.express }))
//       .catch(err => console.log(err));
//   }
  
//   callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);
    
//     return body;
//   };
  
//   handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
    
//     this.setState({ responseToPost: body });
//   };
  
// render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type="text"
//             value={this.state.post}
//             onChange={e => this.setState({ post: e.target.value })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }

// export default App;

import React , {Component} from 'react';
import axios from 'axios';
class App extends Component{

  state={
    users:[],
    username:'',
    ID:'',
  }
  hadleChange =(e)=>{
    this.setState({
    [e.target.name]:e.target.value 
       
               })
    console.log("username===>",this.state.username);

  }
    
  handleSubmit=(e)=>{
    e.preventDefault();
    const {users,username,ID} =this.state;
    console.log("Before submit",this.state.username);
    console.log("Before submit",this.state.ID);
    var user={username,ID}
   
    users.push(user)
    console.log("users items", users)
    axios.post('http://localhost:5000/postApi',users)
    .then( res=>{
      console.log("rsponse on post hit",res)
    })
    this.setState({
      username: '',
      ID:''
    })
    // this.state.username=""
    // this.state.ID=""
    console.log("After submit",username);
    console.log("After submit",ID);
  }
  getData =() =>{
    axios.get('http://localhost:5000/api')
    .then(res=>{
      console.log("response" ,res.data)
    })
  }
  // postData =() =>{
  //    let user={

  //    }
  //   axios.post('http://localhost:5000/postApi',)
  // }

  render(){
    return(
      <div style={{textAlign:"center", margin:"20px auto 0px"}}>
        <label>NAME</label>
        <input type="text" name="username" onChange={this.hadleChange}  placeholder="enter name"/>
        <br/>
        <label>E.ID</label>
        <input type="number" name="ID" onChange={this.hadleChange}  placeholder="enter Emp ID"/>
        <br/>
        <button onClick ={this.handleSubmit}>Submit</button>
        <br/>
        <button onClick={this.getData}>GetData</button>

       
      </div>
    )
  }
}
export default App;
