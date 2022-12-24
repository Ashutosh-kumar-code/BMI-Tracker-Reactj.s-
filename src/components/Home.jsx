import React,{useState} from 'react';
import img1 from '../images/weight-avatar_1.webp';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Home() {
    const [weight,setweight] = useState(0);
    const [height,setheight] = useState(0);
    const [bmi,setbmi] = useState(0);
    const [message,setmessage] = useState('');
    

   let calculatebmi = (event)=>{
    event.preventDefault();
    if(weight === 0 || height === 0 ){
        alert("invalid input");
    }else{
        let bmi = (weight /(height /100)**2);
        setbmi(bmi.toFixed(2));  

    if(bmi < 18.5){
        setmessage("You are underweight");
    }else if(bmi >= 18.5 && bmi <=24.9){
        setmessage("You are Healthy ");
    }else if(bmi >25 && bmi <=29.9){
        setmessage("You are Over Weight");
    }else{
        setmessage("You are Obese")
    }
    }
}

let imgsrc;
if(bmi < 1){
    imgsrc = null;
}
else if(bmi < 18.5){
    imgsrc = require('../images/underweight-1.jpg')
}else if(bmi >= 18.5 && bmi <=24.9){
    imgsrc = require('../images/healthy_1.png')
}else if(bmi >25 && bmi <=29.9){
    imgsrc = require("../images/overweight_1.jpg")
}else{
    imgsrc = require('../images/obese_1.jpg')
}

let reload =()=>{
    window.location.reload();
}

let dietimgone;
if(bmi < 1){
    dietimgone = null;
}
else if(bmi < 18.5){
    dietimgone = require('../images/underw01.jpg')
}else if(bmi >= 18.5 && bmi <=24.9){
    dietimgone = require('../images/health01.png')
}else if(bmi >25 && bmi <=29.9){
    dietimgone = require("../images/overw01.png")
}else{
    dietimgone = require('../images/obese01.jpg')
}

let dietimgthree ;
if(bmi < 1){
    dietimgthree = null;
}
else if(bmi < 18.5){
    dietimgthree = require('../images/health01.png')
}else if(bmi >= 18.5 && bmi <=24.9){
    dietimgthree = require('../images/health04.png')
}else if(bmi >25 && bmi <=29.9){
    dietimgthree = require("../images/overw03.png")
}else{
    dietimgthree = require('../images/obese03.jpg')
}

let dietimgtwo ;
if(bmi < 1){
    dietimgtwo = null;
}
else if(bmi < 18.5){
    dietimgtwo = require('../images/underw02.jpg')
}else if(bmi >= 18.5 && bmi <=24.9){
    dietimgtwo = require('../images/health02.png')
}else if(bmi >25 && bmi <=29.9){
    dietimgtwo = require("../images/overw02.png")
}else{
    dietimgtwo = require('../images/obese02.jpg')
}


let dietimgfour ;
if(bmi < 1){
    dietimgfour = null;
}
else if(bmi < 18.5){
    dietimgfour = require('../images/health02.png')
}else if(bmi >= 18.5 && bmi <=24.9){
    dietimgfour = require('../images/health03.png')
}else if(bmi >25 && bmi <=29.9){
    dietimgfour = require("../images/overw04.png")
}else{
    dietimgfour = require('../images/obese04.jpg')
}

  return (
    <>
     <div className="homepage">
        <div className="container">
            <div className="row">
                <div className="col-4 ">
                    <div className="diet1">
                    <img src={dietimgone} alt="" /> <br></br>
                    <img src={dietimgthree} alt="" />
                    </div>
                   
                </div>
                <div className="col-4">
                    <div className="midtop">
            <h2 className="topic"><img src={img1} alt="" /> BMI Calculator</h2>
            <Form onSubmit={calculatebmi}>
                <div>
                <Form.Label htmlFor="inp1">Weight (kg) </Form.Label>
        <Form.Control value={weight} id="inp1" onChange={(e)=> setweight(e.target.value)} />                
                </div>
                <div>
                <Form.Label htmlFor="inp2">Height (cm) </Form.Label>
        <Form.Control value={height} id='inp2' onChange={(e)=> setheight(e.target.value)} />  
                    
                </div>
                <div className="d-grid gap-2">
                     <Button className='btn btn-dark' type='submit'  > Submit </Button>
                     <Button className="btn btn-dark" onClick={reload}>Reload</Button>
                </div>
                
            </Form>
            <div className="bmi-answer">
                <h3>Your BMI is: {bmi}</h3>
                </div>
                {/* </div> */}
                <div className="bmians">
                <p>{message}</p>
            </div>
            <div className="img-container">
                <img src={imgsrc} alt="" />
            </div>
           </div>
        </div>
        <div className="col-4 diet2">
        <img src={dietimgtwo} alt="" /> <br />
        <img src={dietimgfour} alt="" />
        </div>
        </div>
            </div>
        </div> 
    </>
  )
}
