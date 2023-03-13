import React from 'react';
import { validateEmail } from '../utils/helpers';

function ContactMe() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [emailError, setEmailError] = useState(''); 
    const [message, setMessage] = useState(''); 


    const handleInputChange = (e) => {
        const { target } = e; 
        const inputType = target.name; 
        const inputValue = target.value; 

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue); 
        }
    }; 

    const handleFormSubmit = (e) => {
        e.preventDefault(); 

        // Validate email input
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.'); 
            return; 
        }; 

        setName(''); 
        setEmail(''); 
        setMessage(''); 
    };

    return (
        <div>
            <h3>Contact Me</h3>
            <form className='contact-me'>
                <input
                  value={name}
                  name='name'
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Name'
                />
                <input
                  value={email}
                  name='email'
                  onChange={handleInputChange}
                  type='email'
                  placeholder='Email'
                />
                <input
                  value={message}
                  name='message'
                  onChange={handleInputChange}
                  type='text'
                  placeholder='Please write a brief message here.'
                />
                <button type='button' onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {emailError && (
                <div>
                    <p className='error-message'>{emailError}</p>
                </div>
            )}
        </div>
    );
}

export default ContactMe