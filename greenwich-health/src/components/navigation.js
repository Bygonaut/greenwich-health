import React from "react";

const sections = [
    "Informed Consent For Clinical Research",
    "Why is this study being done?",
    "Is there a potential conlfict of interest for thids study?",
    "How was I selected to be in this study?"
];

export default function Navigation() {
    return (
        <div className="flex-initial bg-gray-100 py-10 px-2 w-56">
            <ul>
            {sections.map(section => 
                <li className="mb-5"><button className="w-full text-left">{section}</button></li>
            )}     
            </ul>    
        </div>
    );
   
}