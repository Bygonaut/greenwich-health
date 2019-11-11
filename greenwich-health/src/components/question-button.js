import React, {useState} from "react";


export default function QuestionButton(props) {
    const [showTextBox, setTextBox] = useState(
        false
        );
    const [feedback, setFeedback] = useState("");
    const name = 'Study Participant 1', email = 'devhack69@gmail.com';
    function handleChange(event) {
        this.setState({feedback: event.target.value})
      }
    
     function handleSubmit (event) {
        const templateId = 'template_tl1QGIRb';
    
        sendFeedback(templateId, {message_html: feedback, from_name: name, reply_to: email});
      }
    
     function sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    return (
    <div className="fixed inline right-0 bottom-0 mb-6 mr-6">
        <div className={`bg-teal-500 w-12 h-12 flex justify-center items-center rounded-full ${showTextBox ? 'hidden' : 'block'}`}>
            <button onClick={() => setTextBox(true)}><svg style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
        </div>
        <div className={`w-64 h-64 bg-white border-gray-600 border rounded flex flex-col ${showTextBox ? 'block' : 'hidden'}`}>
            <textarea className="flex-1 p-2" 
            onChange={e => setFeedback(e.target.value)} 
            placeholder="Post some lorem ipsum here" 
            style={{resize:'none'}}></textarea>
            <button onClick={() => {setTextBox(false); handleSubmit();}} className="bg-teal-500 w-full">Send</button>
        </div>
    </div>
    )
}

