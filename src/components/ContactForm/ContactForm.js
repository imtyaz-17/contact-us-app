import React from 'react';
import './ContactForm.css';
import contactImg from '../../images/contact_svg.svg';

const ContactForm = () => {
    return (
        <div class="flex">
            <div class="w-1/2 p-2 text-slate-700">
                <h1 className="text-6xl font-semibold mb-2">Contact us</h1>
                <form className="bg-white px-8 pt-2 pb-8" onSubmit="">
                    <div className="relative mb-4">
                        <div class="absolute flex left-20 top-0 h-full w-10">
                            <div class="flex items-center justify-center h-full w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 448 512">
                                    <path fill="#374151" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                            </div>
                        </div>
                        <input
                            className="shadow appearance-none border rounded-3xl w-9/12 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-sky-50 pl-10"
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value=""
                            onChange=""
                        />
                    </div>
                    <div class="relative mb-4">
                        <div class="absolute flex border border-transparent left-20 top-0 h-full w-10">
                            <div class="flex items-center justify-center h-full w-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512"><path fill="#374151" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            </div>
                        </div>
                        <input
                            className="shadow appearance-none border rounded-3xl w-9/12 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-sky-50 pl-10"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value=""
                            onChange=""
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            className="shadow appearance-none border rounded-3xl w-9/12 py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-sky-50"
                            id="message"
                            placeholder="Message"
                            name="message"
                            value=""
                            onChange=""
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 w-9/12 rounded-3xl focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div class="w-1/2 p-4">
                <div class="relative h-full over">
                    <img src={contactImg} alt="sas" class="absolute inset-0 w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;