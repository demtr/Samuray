import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
let anyPosts = [
    {id:1, message:"Hello, how are you?", lcount:12},
    {id:2, message:"It's my first post!", lcount:45},
    {id:3, message:"It works correct!", lcount:19},
]
const dialogs = [
    {id:1, name:"Ivan"},
    {id:2, name:"Zorro"},
    {id:3, name:"Clain"},
    {id:4, name:"Mike"},
    {id:5, name:"Ramirez"},
];

const messages = [
    {id:1, message:"Hello!"},
    {id:1, message:"Hey you!"},
    {id:1, message:"Yo!"},
];


ReactDOM.render(
  // <React.StrictMode>
    <App anyPosts={anyPosts} dialogs={dialogs} messages={messages} />
  /*</React.StrictMode>*/
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
