
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"));
const num = 10
function Greeating(props)
{
  return (<h1>Hi, have a great day {props.studentname}<h3></h3> </h1>);
}
root.render(
  <div>
<h1>First Flight {2+2}
<Greeating studentname={"Rupesh"}/> 
<Greeating studentname={"Panakj"}/> 
<Greeating studentname={"Parnita"}/> 
<Greeating studentname={"Tanuja"}/> 
{num % 2 == 0  ? "even" : "odd"}</h1>
</div>);
