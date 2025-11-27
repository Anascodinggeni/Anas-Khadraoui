import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl font-black mb-6">Let's Work Together</h2>
            <p className="text-gray-400 text-lg">Send me a message and let's discuss your next big idea.</p>
        </div>

        <form action="https://formsubmit.co/anasp20107@gmail.com" method="POST" className="space-y-6 bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-black/40 transition-all text-white placeholder-gray-600"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-black/40 transition-all text-white placeholder-gray-600"
                    />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Message</label>
                <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 focus:bg-black/40 transition-all text-white placeholder-gray-600 resize-none"
                ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-white text-black font-bold text-lg rounded-2xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Send Message
            </button>
        </form>

        <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Twitter</a>
            </div>
            <p className="text-gray-600 text-sm">© 2025 Anas Khadraoui</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;