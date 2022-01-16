/* import React from "react";
function Clock(props){
    return (
    <div>
        <h1>Hello, World!</h1>
        <h2> it is {props.date.toLocaleTimeString()}.</h2>
    </div>
      );
  } 
  function tick(){
    ReactDOM.render(
    <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  setInterval(tick,1000)
  export default statesAndComponents */
  /* import React from "react";
  function car(props){
    return <h1>I'm a {props.color} car </h1>
  }

   */
  function Football(){
    const shoot = () =>{
      alert('Goaal What a Strike ');
    }
    return (
      <button onClick = {shoot}> Tap this button to take the shot, you never know you might be lucky</button>
    )
  }
  ReactDOM.render(<Football />, document.getElementById('root'))
  function Football(){
    const shoot = (argument) =>{
        alert(a)
    }
    return(<button onClick={()=>shoot('Gooal')}></button>)
  }
  ReactDOM.render(<Football />, document.getElementById('root'));
  

  function Football(){
    const shoot = (a,b) =>{
      /* b is the event that was triggered by the events */
      alert(b.type)
    }
    return(<button onClick={(event)=> shoot("Goall", event)}></button>)
  }
  ReactDOM.render(<Football />, document.getElementById('root'))


  function MissedGoal(){
    return <h1>MIssed!</h1>
  }
  function MadeGoal(){
    return <h1> Goalll</h1>
  }
  function Goal (props){
    const isGoal = isGoal.props
    if(isGoal){
      return <MadeGoal />
    }
    else
    {return <MissedGoal />}
  }
  ReactDOM.render(<Goal isGoal={false}/>,document.getElementById('root'))


  function Garage(props){
    cars = cars.props
    return(
      <>
      <h1>GARAGE</h1>
      {cars.length > 0&&
      <h2>If you have {cars.length} cars in your garage</h2>
      }
      </>
    )
  }
  const cars = ["Audi","BMW","Toyota","Honda"]

  ReactDOM.render(<Garage cars={cars} />,document.getElementById('root'))

  function Cars(props){
    return <li>I'm {props.brand}</li>
  }

  function Garage(){
    const cars = ['Audi','BMW','Toyota']
    return(
      <>
      <h1>who lives in the garage</h1>
      <ul>
      {cars.map((cars) => <Cars brand={car} />)}
      </ul>
      </>
    )
  }
  ReactDOM.render(<Garage />, document.getElementById('root'))
  function Cars(){
    return <li>I'm a {props.brand}</li> 
   }
   function Garage(){
    cars = [{id = 1, brand='Audi'},
    {id = 2, brand='Toyota'},
    {id = 3, brand='Honda'}
  ];
  return(
    <>
    <h1>Who lives in my garage</h1>
    <ul>
   {cars.map((car)=> <Cars key = {cars.id} brand = {cars.brand} />)}
    </ul>
    </>
  )
   }
   function myForm(){
     return(
     <form>
       <label>Enter your name please
         <input type="text" />
       </label>
     </form>)
   }
   ReactDOM.render(<myForm />,document.getElementById('root'))
   import { useState } from "react";
   import { ReactDOM } from "react";


   function myForm(){
   const [name, setName]= useState('');
    const handlesubmit = (event) =>{
      event.preventDefault();
        alert('The name you entered is:${name} ')
      
    }
   return(
     <form onSubmit={handlesubmit}>
       <label>Enter Your fullname:
         <input type="text" 
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
       </label>
       <input type="submit" />
     </form>
   )

   }
   ReactDOM.render(<myForm />, document.getElementById('root'))
   function myForm(){
     const [input,setInputs] = useState({})
     const handlechange = (event)=>{
       const name = event.target.name
       const value = event.target.value
       setInputs(...values => ({[name]:value}))
     }
     const handlesubmit = (event) =>{
       event.preventDefault();
       alert(inputs)
     }
     return(
     <form onSubmit={handlesubmit}>
       <label>
         Enter your name:
         <input type="text" 
       name="username"
       value={inputs.username || ''}
       onChange={handlechange}     />
       </label>
       <input type="submit"/>
      
     </form>
     )
   }
   ReactDOM.render(<myForm />,document.getElementById('root'))




   function myForm(){
   const [inputs,setInputs] = useState({})  
   const handleChange =(event)=>{
     const name = event.target.name;
     const value = event.target.value;
     setInputs(values => ({...values, [name]: value }))
   }
   const handleSubmit = (event) => {event.preventDefault(), alert(inputs)}
   return(<form onSubmit={handleSubmit}>
     <label>
       Enter your name:
     </label>
     <input type="text" value={inputs.username || ""} onChange={handleChange} />
   </form>)
   }
function myForm(){
  const [textarea, setTextarea] = useState('the content of the textarea goes into the value ');
 const  handleTextArea = (event) => {setTextarea(event.target.value)}
 return(
   <form>
    <textarea value={textarea} onChange={handleTextArea}>

    </textarea>
   </form>
 )
}
class FlavourForm extends React.Component{
  constructor(props){
    super();
    this.state = {value:coconut};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this);

  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    alert('your favourite flavour is :' + this.state.value);
    event.preventDefault();
  }
  render(){
    return (
    <form onSubmit={this.handleSubmit}><select value={this.state.value}  onChange={this.handleChange}>
      <option>Mango</option>
      <option> Orange</option>
      <option>Pineapple</option>
      <option>peanut</option>
    </select>

 </form>
    )
  }
}
function NumberList(props){
  const numbers = props.numbers
  const listItem = numbers.map((number) => <li key={number.toString()}>{number}</li>)
  return(
    <ul>{listItem}</ul>
  )
  const number = [1,2,3,4,5,6,7]
  ReactDOM.render(<NumberList numbers={number} />,document.getElementById('root'))
}

function Blog(post){
  const sidebar = (
    <ul>
      {props.posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
  const content = (
    <ul>
      {props.posts.map((post) => 
      <div key={post.id}>
        <h3>
          {post.title}
          
          </h3>
          <p>{post.content}</p>
      
      </div>)}
    </ul>
  )
  return(<div>
    {sidebar}
    <hr />
    {content}
  </div>);
  
}
const posts = [
    {id:1, title:"Hello World!", content: "Welcome to learning react "},
    {id:2, title:"React Installation", content: "Installing React using Npm"}
]
ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'))

function NumberList(props){
  const numbers = props.numbers
  const  listItem = numbers.map((number) => {
    <ListItem value={number} key={number.toString()} />
  });
  return(
    <ul>
      {lisItems}    </ul>
  )
}


function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>Water would boil</p>
  }
  return
    <p>water would not boil</p>
  
}
class Calculator extends React.Component{
  constructor(props){
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }
  handleChange(e){
    this.setState({temperature: e.target.value})
  }


  render(){
    const temperature = this.temperature
    return(
      <fieldset>
        <legend>
          Enter the temperature in celsius: 
          </legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
       <BoilingVerdict celsius = {parseFloat(temperature)} />
      </fieldset>
    )
  }
}
ReactDOM.render(<Calculator/>,document.getElementById('root'))

const scaleNames = {
  c: 'celsius',
  f: 'farenheit'
};
class temperatureInput extends React.Component{
  constructor(props){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''}
  }
  handleChange(e){
    this.setState({temperature:e.target.value})
  }
  render(){
   const temperature = this.state.temperature
    return(<fieldset>
      <legend>
      Enter temperature in {scaleNames[scale]}:
      </legend>
      <input value={temperature} onChange={this.handleChange}/>
    </fieldset>)
  }
}
class Calculator extends React.Component{
  render(){
    return(
      <div>
        <temperatureInput scale="f" />
        <temperatureInput scale="c" />
      </div>
    )
  }
}
function TryConvert(temperature,convert){
  const input = parseFloat(temperature)
  if(Number.isNaN(input)){
    return "";
  
  }
  else{
    const output = convert(input)
    const rounded = Math.round(output*1000)/1000
    return rounded.toString()
  }
}
function WelcomeDialog(){
  return(
  <FancyBorder color="blue" >
    <h1 className="Dialog-title"> Welcome</h1>
      <p className="Dialog-message">Thanks for visiting</p>
    </FancyBorder>
  );}
  function SPlitPane(props){
   <div className="SplitPane">
     <div className="SplitPane-left">
       {props.left}
     </div>
     <div className="SplitPane-right">
       {props.right}
     </div>
   </div>
  }
  function App(){
   return(
     <SPlitPane left={<Contacts />}
     right = {<Chat />} />
   )

  }
  function Dialog(props){
    return(
     <FancyBorder color='blue' >
       
         <h1 className="Dialog-title">
           {props.title}
           </h1>
       
       <p className="Dialog-content">
          {props.message}
         </p>
     </FancyBorder>
    )
  }
  function WelcomeDialog(){
   return(
     <Dialog title ="Welcome" message ="Thanks for visiting " />
   )
  }
  function FancyBorder(props){
    return( 
     <div className={"FancyBorder FancyBorder- " + props.color}>
       {props.children}
     </div>

    )
  }
  function Dialog(props){
    return(
      <FancyBorder color="blue">
         <h1 className="Dialog-title">
           {props.title}
           </h1>
       
       <p className="Dialog-message">
          {props.message}</p>
        
</FancyBorder>
    )
  }
  class SignUpDialog extends React.Component{
    constructor(props){
      super();
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login:" "}
    }
    render(){
      return(
        <Dialog title = "Mars Exploration" message = "How do you eant us to refer to you">
          <input value={this.state.login} onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>Sign Me up</button>
        </Dialog>

        
      )
    }
   handleChange(e) {
    this.setState({login:e.login.value})
  }
  handleSignUp(){
    alert('welcome onboard, ${this.state.login}')
  }
}
ReactDOM.render(<SignUpDialog /> , document.getElementById('root'))
function Form(){
  function handleSubmit(e){
    e.preventDefault();
    console.log('you have submitted')
  }
}
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn : true}
  }
  handleChange = e =>{
    this.setState(prevstate => ({isToggleOn:!prevstate.isToggleOn}));
  }
}
render() ;{
return(
  <button>
    {this.state.isToggleOn ? "ON" : "OFF"}
  </button>
)

}