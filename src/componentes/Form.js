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
      <section className='form-content'>
        <h2 className='title contact-title'>Contact</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                className='name'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Correo Electrónico:</label>
            <input
                className='email'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea
                className='text-area'
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