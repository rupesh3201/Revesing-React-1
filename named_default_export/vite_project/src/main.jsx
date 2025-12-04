import { createRoot } from 'react-dom/client'
 import { Hibutton } from './assets/Button';
 import { Hellobutton } from './assets/Button';


const root = createRoot(document.getElementById("root"));
const num = 10;

export function Greeting(props) {
  return (
    <div>
      <h1>Hi, have a great day {props.studentname}</h1>

      <h3></h3>
    </div>
  );
}

root.render(
  <div>
    
    <Hibutton title="Hi,what is your name " />
    <Hellobutton title="Hello , HI there" />
    <Byebutton title="bye, see u soon  " />
    <h1>First Flight {2 + 2}</h1>

    <Greeting studentname="Rupesh" />
    <Greeting studentname="Pankaj" />
    <Greeting studentname="Parnita" />
    <Greeting studentname="Tanuja" />

    {num % 2 === 0 ? "even" : "odd"}
  </div>
);
