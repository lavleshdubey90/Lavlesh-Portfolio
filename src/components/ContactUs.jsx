import React, { useState } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        const data = new FormData(event.target);

        data.append("access_key", "a2241be8-d919-4b54-9888-1dec357968c4");

        const object = Object.fromEntries(data);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully",
                icon: "success"
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className='mt-20 md:mt-40 py-10 px-0 lg:px-5 bg-black' id='contact'>
            <div className='flex flex-col-reverse gap-y-10 md:flex-row justify-between scale-90 lg:scale-100 lg:p-5 max-w-screen-xl mx-auto'>
                <div className='w-full md:w-1/2 md:min-w-[500px] ml-0 rounded-lg bg-purple-900/30 px-5 md:px-10 py-5'>
                    <h2 className='text-3xl md:text-5xl bg-gradient-to-tr from-purple-900 via-violet-600 via-20% font-semibold to-white bg-clip-text text-transparent font-[gilroy] leading-tight mt-2 md:mt-6'>Let's Work Together!</h2>
                    <p className='text-sm md:text-lg mt-5'>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                    <form onSubmit={onSubmit} method='post' className='mt-10'>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Your Full Name' 
                            className='p-3 my-2 outline-none rounded-md focus:ring-2 duration-500 focus:ring-purple-600 caret-purple-600 w-full bg-black' 
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email Address' 
                            className='p-3 my-2 outline-none rounded-md focus:ring-2 duration-500 focus:ring-purple-600 caret-purple-600 w-full bg-black' 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                        <textarea 
                            placeholder='Message' 
                            name='message' 
                            className='p-3 resize-none my-2 h-40 outline-none rounded-md focus:ring-2 duration-500 focus:ring-purple-600 caret-purple-600 w-full bg-black' 
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                        <input type="submit" value="Send Message" className='bg-gradient-to-r from-purple-900 to-purple-500 hover:bg-transparent cursor-pointer min-w-fit transition-all text-white mt-5 px-12 py-4 rounded-full' />
                    </form>
                </div>

                <div className='ml-10 flex justify-center items-center lg:ml-40'>
                    <div className='space-y-10 h-fit '>
                        <div className='flex gap-8 items-center'>
                            <div className='rounded-full scale-[3] bg-gradient-to-br from-purple-700 to-purple-400'>
                                <BiPhoneCall className='p-1' />
                            </div>
                            <span>
                                <h5 className='text-sm text-neutral-400'>Phone</h5>
                                <p>+91 860 446 1977</p>
                            </span>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <div className='rounded-full scale-[3] bg-gradient-to-br from-purple-700 to-purple-400'>
                                <GoMail className='p-1' />
                            </div>
                            <span>
                                <h5 className='text-sm text-neutral-400'>Email</h5>
                                <p>lavleshdubey90@gmail.com</p>
                            </span>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <div className='rounded-full scale-[3] bg-gradient-to-br from-purple-700 to-purple-400'>
                                <IoLocationOutline className='p-1' />
                            </div>
                            <span>
                                <h5 className='text-sm text-neutral-400'>Address</h5>
                                <p>Uttam Nagar, Delhi</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;
