// 1. Basics Of React
// Memorize the code
// ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById('root'))

//My Code
// ReactDOM.render(<p>Small Paragraph!</p>, document.querySelector("#root"));

// My Task 1
// ReactDOM.render(
//   <ul>
//     <li>One</li>
//     <li>Two</li>
//     <li>Three</li>
//   </ul>,
//   document.getElementById("someList")
// );

// 2. Using React Fundamentals
// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Sumeet Kolekar
//           </a>
//         </div>
//       </nav>
//     </>
//   );
// }

// function Alert() {
//   return (
//     <>
//       <div className="alert alert-success" role="alert">
//         Sumeet will be earning 500Cr in the upcoming 2 Years!
//       </div>
//     </>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <Alert />
//   </div>,
//   document.getElementById("content")
// );

// My Task 2

//Method 1
// document.getElementById('content').innerHTML = 'Hello, React!';

//Method 2
// const h1 = document.createElement('h1')
// h1.textContent = 'This is an Imperative way to Program...'
// h1.className = 'header'
// document.getElementById('content').append(h1)
// console.log(h1)

//let element =  ReactDOM.render(<p class='changeColor'>Small Paragraph!</p>, document.getElementById("root"));
// console.log(element)

// 3. Applying Some Fundamentals
// const page = (
//     <div>
//         <h1 className='header'>This is JSX</h1>
//         <p>This is paragraph</p>
//     </div>
// )

// My Task 3
// import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';

const nav = (
  <>
    <nav>
      <h1>Sumeet Kolekar</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(nav);

// ReactDOM.render(nav, document.getElementById('root'))
// rootElement.append(JSON.stringify(nav.props));
