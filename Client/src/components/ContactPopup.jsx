import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

const ContactPopup = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);



        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        const body = {
            from_name: name,
            form_email: email,
            to_name: 'Algo flow AI',
            message: message,
        };

        emailjs.send(serviceId, templateId, body, publicKey)
            .then(() => {
                toast.success('Thank you for your message! We will get back to you soon.');
                setName('');
                setEmail('');
                setMessage('');
                setLoading(false);
                onClose();
            })
            .catch(() => {
                toast.error('Failed to send message. Please try again later.');
                setLoading(false);
            });
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50 font-Inter">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full text-center border border-gray-300 relative">
                <button className="absolute top-4 right-4 text-gray-500 text-xl" onClick={onClose}>&times;</button>
                <h2 className="text-2xl font-bold mb-3 text-black">Get In Touch</h2>
                <p className="mb-5 text-black">Send us a message and we will respond as soon as possible</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black"
                        rows="4"
                        placeholder="Leave a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type='submit' className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700">
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPopup;
