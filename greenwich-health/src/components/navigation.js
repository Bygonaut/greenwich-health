import React, { useContext }  from "react";
import { AppContext } from '../App'

const sections = [
    {id:0, title:"Considerations for Participation"},
    {id:1, title:"Why is this study being done?"},
    {id: 2, title:"Who Conducts Clinical Studies?"},
    {id:3, title:"How Are Participants Protected?"},
    {id:4, title:"Foods to Prevent Brain Aging"}
];

export default function Navigation() {

    const {state, dispatch} = useContext(AppContext);
    const changeInputValue = (newValue) => {

        dispatch({ type: 'UPDATE_SECTION', data: newValue,});
    };
    return (
        <React.Fragment>
            <div className="flex-initial bg-gray-100 py-10 px-2 w-56">
                <p className="text-2xl">Study 20-121</p>
                <hr></hr><br/>
                <ul>
                {sections.map(section => 
                    <li className="mb-5"><button value={section.id} onClick={e => changeInputValue(e.target.value)} className="w-full text-left">{section.title}</button></li>
                )}     
                </ul>    
            </div>
        </React.Fragment>
    );
   
}