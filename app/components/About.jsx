'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 400);
    }, []);
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
                className='text-center mb-2 text-lg font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Introduction
            </motion.h4>
            <motion.h2 
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                About me
            </motion.h2>
            <motion.div 
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className='w-64 sm:w-80 rounded-3xl max-w-none'
                    initial={{ opacity: 0 }}
                    whileInView={isVisible ? { opacity: 1 } : { opacity: 0}}
                    transition={{ duration: 2 }}
                >
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl h-[430px]' />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p className='mb-10 max-w-2xl font-Ovo text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium excepturi ipsum optio, 
                        numquam mollitia quis quia explicabo dolorem doloribus quisquam minima temporibus velit fugiat accusamus 
                        inventore suscipit deleniti voluptate!
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, title, description}, index) => (
                            <motion.li 
                                key={index} 
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1
                                duration-500 hover:shadow-black'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.4 }}
                            >
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.h4 
                        className='my-6 text-gray-700 font-Ovo'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Tools I use
                    </motion.h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li 
                                key={index} 
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                                border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1
                                duration-500'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.4 }}
                            >
                                <Image src={tool} alt='Tools' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
