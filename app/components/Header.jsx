'use client'
import {motion, AnimatePresence} from 'framer-motion'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect, useState, useRef } from 'react'

const Header = () => {
    const [text, setText] = useState(''); // State untuk menampilkan teks
    const fullText = "I'm a tax consultant based in Jakarta, Indonesia. Im currently working as a freelance tax consultant."


    useEffect(() => {
        let index = 0; // Indeks untuk karakter yang sedang ditampilkan

        const timeout = setInterval(() => {
            setText((prevText) => {
                if (index < fullText.length) {
                    const newText = prevText + fullText[index]; // Menambahkan karakter ke teks sebelumnya
                    // console.log(index, newText); // Debugging
                    return newText;
                }
                return prevText; // Tidak mengubah teks setelah selesai
            });
            index += 1; // Meningkatkan indeks

            if (index === fullText.length) {
                clearInterval(timeout); // Menghentikan interval setelah teks selesai
            }
        }, 50); // Waktu per karakter

        return () => clearInterval(timeout); // Membersihkan interval jika komponen dibuang
    }, [])

    return (
        <>
        <motion.div 
            className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: false, amount: 0.2 }}
            // animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Profile Image */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0.2 }}
                // animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Image src={assets.profile_img} alt="Dino Agus Parwindo - Tax Consultant" className="rounded-full w-32" />
            </motion.div>

            {/* Greeting */}
            <motion.h3 
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0.2 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Hi! I'm Dino Agus Parwindo 
                <motion.div 
                    animate={{ rotate: [0, -10, 0, 10, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <Image src={assets.hand_icon} alt="" className="w-6" />
                </motion.div>
            </motion.h3>

            {/* Title */}
            <motion.h1 
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0.2 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                Tax Consultant
            </motion.h1>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0.2 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                {/* I'm a tax consultant based in Jakarta, Indonesia. I'm currently working as a freelance tax consultant. */}
                {text}
            </motion.p>

            {/* Buttons */}
            <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: false, amount: 0.2 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.9 }}
            >
                <motion.a 
                    href="#contact" 
                    className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </motion.a>

                <motion.a 
                    href="/sample-resume.pdf" 
                    target="_blank" 
                    download 
                    className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    My Resume <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </motion.div>
        </motion.div>
    </>
    )
}

export default Header
