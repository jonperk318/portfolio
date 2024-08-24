"use client"
import {motion} from "framer-motion";
import {useState, useRef} from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setError(false);
      setSuccess(false);
  
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccess(true);
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setError(true);
          },
        );
    };

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const text = "Let's connect!"

    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-200vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center text-6xl">
                    <div className="pt-12 lg:pt-32">
                        {text.split("").map((letter, i) => (
                            <motion.span key={i} initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 3, repeat: Infinity, delay: i*0.1}}>{letter}</motion.span>
                        ))}
                        <img src="https://i.giphy.com/S9ukg9TDGpMDxHKqGI.webp" className="w-32 md:w-48 xl:w-60" />
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form onSubmit={sendEmail} ref={form} className="h-1/2 lg:h-full lg:w-1/2 bg-black/[0.5] rounded-xl text-xl flex flex-col gap-8 justify-center p-12">
                    <span>Dear JP...</span>
                    <textarea rows={4} className="bg-light-blue/[0.3] border-b-2 border-b-light-blue outline-none resize-none rounded-md"
                    name="user_message" />
                    <span>You can reach me at...</span>
                    <input type="text" placeholder=" email" required className="bg-light-blue/[0.3] border-b-2 border-b-light-blue outline-none rounded-md"
                    name="user_email" />
                    <input type="text" placeholder=" phone (optional)" className="bg-light-blue/[0.3] border-b-2 border-b-light-blue outline-none rounded-md"
                    name="user_phone" />
                    <button className="bg-transparent p-2 ring-4 ring-light-blue rounded-xl hover:ring-fusha hover:bg-fusha hover:text-black">Send</button>
                    {success && <span className="text-teal font-semibold">Thank you for your message!</span>}
                    {error && <span className="text-watermelon font-semibold">Oops, something went wrong!</span>}
                </form>
            </div>
        </motion.div>
    )
}

export default ContactPage;