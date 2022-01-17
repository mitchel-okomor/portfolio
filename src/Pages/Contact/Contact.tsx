import React, { useState } from 'react';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const initialState = {
  name: '',
  email: '',
  message: ''
};

function Contact() {
  const [inputs, setInputs] = useState(initialState);

  const { name, message, email }: Inputs = inputs;

  return (
    <div className='mt-5'>
      <h2>Contact</h2>
      <div>
        <h1>Get in touch</h1>
        <p>
          I'm currently open to fulltime and frelance opportunies. <br />{' '}
          However, if you have any question or request please use the form below{' '}
        </p>
        <form>
          <label htmlFor='name'>Name</label>
          <input placeholder='Enter name' id='name' name='name' value={name} />
          <label htmlFor='email'>Name</label>
          <input
            placeholder='Enter email'
            id='email'
            name='email'
            value={email}
          />
          <label htmlFor='name'>Name</label>
          <textarea
            placeholder='Enter message'
            id='message'
            name='message'
            value={message}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
