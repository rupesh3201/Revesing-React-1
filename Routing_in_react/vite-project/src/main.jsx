
import { createRoot } from 'react-dom/client'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
const root = createRoot(document.getElementById("root"))
const path = window.location.pathname;
root.render(
<h1>path: {path}</h1>,
 <h1><Home/></h1>,
  <h1><About/></h1>,
  <h1><Contact/></h1>,
)
