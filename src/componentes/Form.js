import { useState } from 'react';
import '../style sheet/Form.css';

function Form (){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };

    return (
      <section id='contact' className='form-content'>
        <h2 className='title contact-title'>Contact</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                className='name input'
                placeholder='Write your name'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email address:</label>
            <input
                className='email input'
                placeholder='Write your email address'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Message:</label>
            <textarea
                className='text-area input'
                placeholder='Write a message'
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button className='submit' type="submit">Enviar</button>
        </form>
      </section>
    )
};

export default Form;