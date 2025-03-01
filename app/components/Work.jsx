'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Work = () => {
    const [visibleProject, setVisibleProject] = useState(4);

    const showMoreHandler = () => {
        setVisibleProject((prev) => prev + 4);
    }

    const showLessHandler = () => {
        setVisibleProject(4);
    }

    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
                className='text-center mb-2 text-lg font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                // viewport={{ once: true }}
            >
                My portofolio
            </motion.h4>
            <motion.h2 
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                // viewport={{ once: true }}
            >
                My latest work
            </motion.h2>
            <motion.p 
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                // viewport={{ once: true }}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At minima et velit quae omnis! Rerum doloribus eaque nostrum culpa dolores, deleniti in perspiciatis minima molestias officiis amet? Harum, corrupti ea.
            </motion.p>
            <div className='grid grid-cols-auto my-10 gap-5'>
                <AnimatePresence>
                    {workData.slice(0, visibleProject).map((project, index) => (
                        <motion.div 
                        key={index} 
                        style={{backgroundImage: `url(${project.bgImage})`}}
                        layout
                        // initial={{ opacity: 0, y: 50 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: 20 }}
                        // transition={{ duration: 0.4, ease: 'easeOut' }}
                        // viewport={{ amount: 0.2 }}
                        // animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                            >
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                                            duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <motion.div
                                    className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                                                group-hover:bg-lime-300 transition"
                                    whileHover={{ rotate: 10, transition: { duration: 0.3 } }}
                                >
                                    <Image src={assets.send_icon} alt="send icon" className="w-5" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {/* Tombol Show More & Show Less */}
            <div className="flex justify-center gap-4 my-10">
                {visibleProject < workData.length && (
                    <motion.button
                        onClick={showMoreHandler}
                        className="flex items-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Show more <Image src={assets.right_arrow} alt="Right arrow" className="w-4" />
                    </motion.button>
                )}

                {visibleProject > 4 && (
                    <motion.button
                        onClick={showLessHandler}
                        className="flex items-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Show less
                    </motion.button>
                )}
            </div>
            
        </div>
    )
}

export default Work
