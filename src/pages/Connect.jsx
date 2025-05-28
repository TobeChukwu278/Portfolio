import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Connect = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setError(null);
        emailjs.sendForm(
            'service_m9tk8tv',
            'template_t38oet2',
            form.current,
            'ZyH8nICsM2TUKWjtL'
        )
            .then(() => setSent(true))
            .catch((err) => {
                console.error(err);
                setError('Failed to send message.');
            });
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-start gap-50 max-w-4xl mx-auto py-12 px-4">
            {/* Left: Text & Contact Info */}
            <div className="flex-1 flex flex-col items-center md:items-end relative">
                <div className="mb-6 md:mb-10 text-center md:text-right">
                    <h3 className="text-2xl text-amber-100 font-semibold mb-4">
                        Let's build something great together! <br />
                        <span className="text-amber-500 font-bold">Say Hello!</span>
                    </h3>
                    <p className="text-amber-100/80 mb-6">
                        Interested in collaborating on a web project, need a developer for your next idea, or just want to talk tech? Reach out and I'll get back to you soon.
                    </p>
                </div>
                {/* Arrow SVG */}
                <div className="hidden md:block absolute right-[-90px] top-24">
                    <svg width="40" height="60" viewBox="0 0 90 60" fill="none">
                        <path d="M0 30 H80 M80 30 L70 20 M80 30 L70 40" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* Contact Info */}
                <div className="  text-sm text-amber-200 space-y-2 w-full md:w-auto">
                    <div>
                        <span className="font-bold text-amber-400">Email:</span> ejiofortobechi@gmail.com
                    </div>
                    <div>
                        <span className="font-bold text-amber-400">Phone:</span> +234 807 5029 003
                    </div>
                    <div>
                        <span className="font-bold text-amber-400">Location:</span> Anambra, Nigeria
                    </div>
                </div>
            </div>
            {/* Right: Form */}
            <div className="flex-1">
                <div className="bg-white/10 p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-amber-600">Send me a message</h2>
                    {sent ? (
                        <div className="text-green-400">Message sent successfully!</div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-amber-500">
                            <input name="name" type="text" placeholder="Your Name" required className="p-2 rounded" />
                            <input name="email" type="email" placeholder="Your Email" required className="p-2 rounded" />
                            <textarea name="message" placeholder="Your Message" required className="p-2 rounded" />
                            <button type="submit" className="bg-amber-600 text-white py-2 rounded hover:bg-amber-700">Send</button>
                            {error && <div className="text-red-400">{error}</div>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Connect;