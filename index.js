import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

//Step 1: Create container functional component that renders on the App
//Step 4: Pass props through component to create a click handler method and pass the method to a property on the container html component 
//Step 5: Write a ternary operator that changes toggle orientation on click and used a logical operator (&&) to set class to true 
function Container(props: ContainerProps) {
  const handleClick = () => {
    props.onClick();
  }
  
  return (
    <div className="container"> 
      <p class={props.isDarkMode && "p-normal"}>Light</p> 
      <div className="toggle-bkg" onClick={handleClick}>
          <span class={props.isDarkMode ? "circle circle-right" : "circle circle-left" }/>
      </div>  
      <p class={props.isDarkMode ? "p-dark" : "p-normal"}>Dark</p>
    </div>
      )
}


// JSX: close bracket /> is calling the function 
// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
  //array destructuring: read : write
  // Step 2: use useState hook to manage state
  //True = dark mode & False = light mode 
  //getter and setter
  const [isDarkMode, setDarkMode] = React.useState(false);
  
  //Step 3: Create toggle variable that contains logic for select state
  const toggle = () => {
    setDarkMode(!isDarkMode)
    // if (selected == true){
    //   setSelected
    // } else {
    //   selected == false
    // }
  }
  
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("body-dark");
    } else {
      document.body.classList.remove("body-dark");
    }
  }, [isDarkMode])
  
  //Step 5: pass onClick and selected properties to component 
  return(
    <div >
        <Container onClick={toggle} isDarkMode={isDarkMode} /> 
    </div>
  );
}

//renders root 
ReactDOM.render(<App />,
document.getElementById("root"))
