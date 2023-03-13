import React from 'react';
import { Button, Form } from 'react-bootstrap'; 
import { validateEmail } from '../utils/helpers';


const styles = {
    button: {
        
    }
}



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
            <Form className='contactMe'>
                <Form.Group className='mb-3' controlId='contactMeForm'>
                    <Form.Label class="form-label">Name</Form.Label>
                    <input
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Your Name'
                    />
                    <Form.Label class="form-label">Email address</Form.Label>
                    <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='example@email.com'
                    />
                    <Form.Label class="form-label">Message</Form.Label>
                    <input
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Please write a brief message here.'
                    />
                    <Button type='Button' onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            {emailError && (
                <div>
                    <p className='error-message'>{emailError}</p>
                </div>
            )}
        </div>
    );
}

export default ContactMe