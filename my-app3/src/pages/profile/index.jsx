import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Header from "../../components/Header";
import MultiStep from "react-multistep";
import { StepOne } from "/Applications/GitHub/DAO2/my-app3/src/components/step-one.jsx";
import { StepTwo } from "/Applications/GitHub/DAO2/my-app3/src/components/step-two.jsx";
import { StepThree } from "/Applications/GitHub/DAO2/my-app3/src/components/step-three.jsx";
//import { StepFour } from "/Applications/GitHub/DAO2/my-app3/src/components/step-four.jsx";

//import '/Applications/GitHub/DAO2/my-app3/src/app.css'
import "../../app.css"

const Profile = () => {
  
  const steps = [
    { name: "ID", component: <StepOne /> },
    { name: "Selfie", component: <StepTwo /> },
    { name: "Connect", component: <StepThree /> },
    //{ name: "Agreement", component: <StepFour /> }
  ];
    
    
    return (
        <Box m="20px">
          <Header title="Member Profile" subtitle="Your Information" />
    
                <Box
                   sx={{ width: '100%' }}
                  >                
                  <MultiStep steps={steps} /> 
                  
                </Box>          
        </Box>
      );
}

export default Profile