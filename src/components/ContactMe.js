import React from 'react';
import validator from 'validator'; 

function ContactMe() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [emailError, setEmailError] = useState(''); 
    const [message, setMessage] = useState(''); 

    const validateEmail = (e) => {
        let email = e.target.value; 

        return validator.isEmail(email) ? setEmailError('Valid email') : setEmailError('Please enter a valid email'); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; 

        if (name === 'name') {
            setName(value)
        } else if (name === 'email') {
            let email = e.target.value; 
            return validator.isEmail(email) ? setEmailError('Valid email') : setEmailError('Please enter a valid email'); 
        }
        // return name === 'name' ? setName(value) : setMessage(value); 

    }; 

    const handleFormSubmit = (e) => {
        e.preventDefault(); 


    }

}