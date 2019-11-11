import React from "react";

const sections = [
    {id:0, title:"Informed Consent For Clinical Research"},
    {id:1, title:"Why is this study being done?"},
    {id: 2, title:"Is there a potential conlfict of interest for thids study?"},
    {id:3, title:"How was I selected to be in this study?"}
];

export default function Navigation() {
    return (
        <ul>
        {sections.map(section=> (
            <li><a href="#" >{section.title}</a></li>
        ))}
        
        </ul>    
    );
   
}