
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));
const num = 10
root.render(<h1>First Flight {2+2}  {num % 2 == 0  ? "even" : "odd"}</h1>),
function Greeating ( )
{
  return <h1>Hi, have a great day </h1>

}
root.render(<div> 
  <Greeating/>
</div>)

