import React, { useEffect, useState } from 'react';
//import { useState, useEffect } from "react";

function AboutMe () {
    const [aboutMe, setAboutMe]= useState([]);


    //fetch from DB
    //Get request for my aboutme table
const getAboutMe = async () => {
    const response = await fetch ('http://localhost:8080/aboutme') //my DB is myBlogs, about me is a table
    const myAbout = await response.json ();
    setAboutMe(myAbout)
};
useEffect(() => {
    getAboutMe();
}, [aboutMe]);

//added a div to hold all of the info im passing back from the DB
//There needs to be a corresponding GET in the back end for this fetch
    return (
        <div className="about-me">
			{aboutMe.map((myInfo,index) => {
                return(
                    <div className='about-section' key={index}> 
                     <h1 className='about-title'> {myInfo.title} </h1>
                    <img className='about-img' src={myInfo.img}/>
                    <p className='about-body'>{myInfo.body}</p>
                    </div>
                )
            }) }
            
            
	  </div>
    )
}

export default AboutMe;