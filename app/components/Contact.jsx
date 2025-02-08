'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import {motion, AnimatePresence} from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [modal, setModal] = useState({ show: false, message: '', type: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) {
            setModal({ show: true, message: 'All fields are required!', type: 'error' });
            return;
        }
    
        const emailParams = {
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            message: formData.message
        };
    
        emailjs.send(
            'service_3hpzkie', 
            'template_a69lx8x', 
            emailParams, 
            'PL47cGtmV1MDy9vaS'
        )
        .then(() => {
            setModal({ show: true, message: 'Message sent successfully!, admin will contact you soon', type: 'success' });
            setFormData({ name: '', email: '', whatsapp: '', message: '' }); // Reset form
        })
        .catch((error) => {
            // console.error('Email sending error:', error);
            setModal({ show: true, message: 'Failed to send message. Please try again.', type: 'error' });
        })
        .finally(() => {
            setIsSending(false);
        });
    };
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                If you have any questions about tax, please use the form below.
            </p>
            <form onSubmit={handleSubmit} className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md'>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange} 
                        className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input 
                        type='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>WhatsApp Number</label>
                    <input 
                        type='text' 
                        name='whatsapp' 
                        value={formData.whatsapp} 
                        onChange={handleChange} 
                        className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        required 
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Message</label>
                    <textarea 
                        name='message' 
                        value={formData.message} 
                        onChange={handleChange} 
                        className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        rows='4' 
                        required 
                    ></textarea>
                </div>
                <button 
                    type='submit' 
                    className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300'
                    disabled={isSending}
                >
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>

             {/* Modal */}
            <AnimatePresence>
                {modal.show && (
                    <motion.div 
                        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div 
                            className={`bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md ${
                                modal.type === 'success' ? 'border-green-500' : 'border-red-500'
                            }`}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                        >
                            <h3 
                                className={`text-lg font-semibold ${
                                    modal.type === 'success' ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {modal.type === 'success' ? 'Success!' : 'Error!'}
                            </h3>
                            <p className='mt-2 text-gray-700'>{modal.message}</p>
                            <button 
                                onClick={() => setModal({ show: false, message: '', type: '' })}
                                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
                            >
                                OK
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Contact
