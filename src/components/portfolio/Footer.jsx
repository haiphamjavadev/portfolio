import { Mail, Phone, Linkedin } from 'react-feather';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Pham Quang Hai</h3>
                        <p className="text-gray-400">Software Development Engineer passionate about building scalable
                            backend systems and microservices architecture.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Projects</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Skills</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                        <div className="space-y-3 text-gray-400">
                            <a href="mailto:haiphamjavadev@gmail.com"
                               className="flex items-center gap-2 hover:text-blue-400 transition">
                                <Mail size={18}/>
                                <span>haiphamjavadev@gmail.com</span>
                            </a>
                            <a href="tel:0979015430" className="flex items-center gap-2 hover:text-blue-400 transition">
                                <Phone size={18}/>
                                <span>0979 015 430</span>
                            </a>
                            <div className="flex gap-4 mt-4">
                                <a href="https://github.com" className="hover:text-blue-400 transition">
                                    {/*<Github size={24}/>*/}
                                </a>
                                <a href="https://linkedin.com" className="hover:text-blue-400 transition">
                                    <Linkedin size={24}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Pham Quang Hai. All rights reserved. Built with React & Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
};