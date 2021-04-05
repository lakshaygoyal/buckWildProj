import React,{useState, useEffect} from 'react'
import {  FaArrowRight } from 'react-icons/fa'
import './Navbar.css'
import './HeroSection-ser.css'
import Navbar from './Navbar'


function HeroSectionSer() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('content.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson["pages"][0]["blocks"][0]);
            setData(myJson["pages"][1]["blocks"][0])
          });
      }
      useEffect(()=>{
        getData()
      },[])
    
    return (
        <>
        <div className="background">
        <Navbar />
        <div className= 'home__hero-section' >
            
            <div className="container">
                <div className="row home__hero-row" style={{display:'flex', flexDirection: 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <h1 className='heading' >{data["headline"]}</h1>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <p className= 'home__hero-subtitle '>{data["subhead"]}</p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: '#fff',height:'20vh',width:'86vw',marginLeft:'3vw',justifyItems:'center',alignItems:'center',display:'flex',flexDirection:'row'}}>
                    <div className="col-cta">
                        <p className="cta-text ">{data["cta"]}</p>
                    </div>
                    <div className="col-cta" style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <p className="cta-subtext ">LET'S TALK </p> <FaArrowRight style={{color:'#ffc001',fontSize:'0.8rem',marginLeft:'1rem'}}/>
                    </div>

                </div>
            </div>
            
            
        </div>

        </div>
        
        </>
    )
}

export default HeroSectionSer
