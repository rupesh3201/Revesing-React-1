
import { createRoot } from 'react-dom/client'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
const root = createRoot(document.getElementById("root"))
const path = window.location.pathname;
console.log("current path",path)
if (path === "/"){
  root.render(<h2> i am on Home</h2>);
}
else if (path === "/about"){
 root.render(<h2> i am on about page</h2>);
}
else if (path === "/contact"){
 root.render(<h2> i am on contact page</h2>); 
}
else{
  root.render(<h2> 404 not found</h2>);
}
// root.render(
// <h1>path: {path}</h1>,
//  <h1><Home/></h1>,
//   <h1><About/></h1>,
//   <h1><Contact/></h1>,
// )
