
import { createRoot } from 'react-dom/client'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
const root = createRoot(document.getElementById("root"))
const path = window.location.pathname;

if (path === "/"){
  root.render(<h2>Home</h2>)
}
// root.render(
// <h1>path: {path}</h1>,
//  <h1><Home/></h1>,
//   <h1><About/></h1>,
//   <h1><Contact/></h1>,
// )
