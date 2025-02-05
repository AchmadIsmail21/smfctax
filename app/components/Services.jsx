'use client'
import { assets, serviceData } from '@/assets/assets'
import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
// Fungsi untuk memotong deskripsi
const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + ' etc...';
    }
    return text;
};
const Services = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (services) => {
        setSelectedService(services);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    }

    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            {/* Judul dengan animasi scroll */}
            <motion.h4 
                className='text-center mb-2 text-lg font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                // viewport={{ once: true }}
            >
                What I Offer
            </motion.h4>

            <motion.h2 
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                // viewport={{ once: true }}
            >
                My Services
            </motion.h2>

            <motion.p 
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                // viewport={{ once: true }}
            >
                I provide comprehensive tax and business consulting services, helping individuals and businesses manage their legal and financial obligations effectively. 
                From tax management and financial audits to corporate legality and educational training, I ensure that your business remains compliant while optimizing financial efficiency. 
                Whether you need assistance with tax reporting, business legality, or professional development, I am here to support your success.
            </motion.p>

            {/* Grid untuk daftar layanan dengan animasi */}
            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description }, index) => (
                    <motion.div 
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.4 }}
                        // viewport={{ once: true }}
                    >
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{truncateDescription(description, 10)}</p>
                        <motion.button
                            onClick={() => openModal({ title, description })}
                            className='flex items-center gap-2 text-sm mt-5'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read More <Image src={assets.right_arrow} className='w-4' />
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* Modal dengan Animasi */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal} // Klik di luar modal untuk menutup
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat diklik
                        >
                            <h3 className="text-xl font-bold mb-4">{selectedService?.title}</h3>
                            <p className="text-gray-600 mb-4 mt-7 text-justify">{selectedService?.description}</p>
                            <motion.button
                                onClick={closeModal}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Services