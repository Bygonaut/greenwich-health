import React from "react";

const sections = [
    "Informed Consent For Clinical Research",
    "Why is this study being done?",
    "Is there a potential conlfict of interest for thids study?",
    "How was I selected to be in this study?"
];

export default function Navigation() {
    return (
        <ul>
        {sections.map(section => 
            <li>{section}</li>
        )}     
        </ul>    
    );
   
}