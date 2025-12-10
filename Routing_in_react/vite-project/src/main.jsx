
import { createRoot } from 'react-dom/client'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
const root = createRoot(document.getElementById("root"))
const path = window.location.pathname;
console.log("current path",path)
if (path === "/"){
  root.render(<Home/>);
}
else if (path === "/about"){
 root.render(<About/>);
}
else if (path === "/contact"){
 root.render(<Contact/>); 
}
else{
  root.render(<h2> 404 not found</h2>);
}
// this all routing using javascript 
// root.render(
// <h1>path: {path}</h1>,
//  <h1><Home/></h1>,
//   <h1><About/></h1>,
//   <h1><Contact/></h1>,
// )
