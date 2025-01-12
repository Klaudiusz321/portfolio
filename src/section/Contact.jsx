import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_15y0z43',
                'template_3crrrah',
                {
                    form_name: form.name,
                    to_name: 'Klaudiusz',
                    form_email: form.email,
                    to_email: 'claudiuswebdesign@gmail.com',
                    message: form.message
                },
                '-wKNX0vkCQvc3wwd9'
            );
            setLoading(false);
            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.error(error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section className='c-space my-20'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text'>Send me a message</h3>
                    <p className='text-lg text-gray-600 mt-3'></p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='field-label'>
                            <span className='field-label'>Full name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className='field-input' />
                        </label>
                        <label className='field-label'>
                            <span className='field-label'>E-mail</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className='field-input' />
                        </label>
                        <label className='field-label'>
                            <span className='field-label'>Message</span>
                            <textarea name="message" value={form.message} onChange={handleChange} required className='field-input' />
                        </label>
                        <button className='field-btn' type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
