'use client'
import { assets, serviceData } from '@/assets/assets'
import {motion} from 'framer-motion'
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
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minima et velit quae omnis! Rerum doloribus eaque nostrum culpa dolores, deleniti in perspiciatis minima molestias officiis amet? Harum, corrupti ea.
            </p>
            <div className='grid grid-cols-auto gap-6 my-10' >
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index}
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover 
                            hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{truncateDescription(description, 10)}</p>
                        <button onClick={() => openModal({title, description})} className='flex items-center gap-2 text-sm mt-5'>
                            Read More <Image src={assets.right_arrow} className='w-4' />
                        </button>
                    </div>
                ))}
            </div>
            {/* {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">{selectedService?.title}</h3>
                        <p className="text-gray-600 mb-4 text-justify mt-7">{selectedService?.description}</p>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )} */}
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-bold mb-4">{selectedService?.title}</h3>
                        <p className="text-gray-600 mb-4 mt-7 text-justify">{selectedService?.description}</p>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Services