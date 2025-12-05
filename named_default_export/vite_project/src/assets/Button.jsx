const HiStyle = {
    backgroundColor : "red",
    color : "black" ,
    fontStroke: "10",
    padding : "10px",
    margin : "5px",
    border : "none",
    borderRadius  : "10px"
}
function Hibutton({title}){
    return <button style={HiStyle}>{title}</button>;
}
// inline css
function Hellobutton({title}){
    return <button style={{
    backgroundColor : "red",
    color : "black" ,
    fontStroke: "10",
    padding : "10px",
    margin : "5px",
    border : "none",
    borderRadius  : "10px"
}}>{title}</button>;
} 
function Byebutton({title}){
    return <button>{title}</button>;
}


export {Hibutton, Hellobutton , Byebutton};