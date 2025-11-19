
import { createRoot } from 'react-dom/client'

function Greeating()
{
  return <h1>Hi, have a great day </h1>;

}



const root = createRoot(document.getElementById("root"));
const num = 10
root.render(<h1>First Flight {2+2} <Greeating/> {num % 2 == 0  ? "even" : "odd"}</h1>)
