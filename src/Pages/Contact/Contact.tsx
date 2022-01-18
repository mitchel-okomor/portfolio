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

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  return (
    <div className='mt-5 row'>
      <div className='col-sm-6'>
        <h1>Get in touch</h1>
        <p>
          I'm currently open to fulltime and freelance opportunies. <br />{' '}
          However, if you have any question or request please use the form below{' '}
        </p>
        <div className='form-container'>
          <form className='contact-form' onSubmit={() => console.log(inputs)}>
            <div className='row inputs'>
              <div className='col-sm-6'>
                <input
                  placeholder='Enter name'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='col-sm-6'>
                <input
                  placeholder='Enter email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <textarea
              placeholder='Enter message'
              id='message'
              name='message'
              rows={6}
              value={message}
              onChange={handleChange}
            />
            <div>
              <button className='page-btn px-3 py-2 rounded'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='col-md-6'></div>
    </div>
  );
}

export default Contact;
