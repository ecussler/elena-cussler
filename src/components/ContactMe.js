import React from 'react';
import validator from 'validator'; 

function ContactMe() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState(''); 

    const handleInputChange = (e) => {
        const { name, value } = e.target; 

        if (name === 'name') {
            setName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else {
            setMessage(value)
        }; 
    }; 

    const handleFormSubmit = (e) => {
        e.preventDefault(); 


    }

}