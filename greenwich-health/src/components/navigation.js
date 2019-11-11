import React from "react";

const sections = [
    {id:0, title:"Informed Consent For Clinical Research"},
    {id:1, title:"Why is this study being done?"},
    {id: 2, title:"Is there a potential conlfict of interest for thids study?"},
    {id:3, title:"How was I selected to be in this study?"}
];

export default function Navigation() {
    return (
        <div className="flex-initial bg-gray-100 py-10 px-2 w-56">
            <ul>
            {sections.map(section => 
                <li className="mb-5"><button className="w-full text-left">{section.title}</button></li>
            )}     
            </ul>    
        </div>
    );
   
}