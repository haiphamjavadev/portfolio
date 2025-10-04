import React from "react";
import {getIconComponent} from "../../utils/GetIconForAll.jsx";

export const Contact = ({contacts}) => {
    return (<section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6"><h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-8"> {/* Thông tin liên hệ */}
                <div><p className="text-gray-600 mb-4"> Feel free to reach out via the form or directly through the
                    contact information below: </p>

                    {contacts.map((contact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            {getIconComponent(
                                contact.icon,
                                16,
                                contact.type === "phone"
                                    ? "mt-1 text-green-400 flex-shrink-0"
                                    : contact.type === "location"
                                        ? "mt-1 text-red-400 flex-shrink-0"
                                        : "mt-1 text-blue-400 flex-shrink-0"
                            )}
                            {contact.href ? (
                                <a
                                    href={contact.value}
                                    className={`hover:text-${
                                        contact.type === "phone" ? "green" : "blue"
                                    }-400 transition text-sm break-all`}
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <span className="text-sm">{contact.value}</span>
                            )}
                        </li>
                    ))}
                </div>
                {/* Form liên hệ */}
                <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700"> Name </label> <input type="text"
                                                                                                          className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-400"
                                                                                                          placeholder="Your name"/>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700"> Email </label> <input type="email"
                                                                                                           className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-400"
                                                                                                           placeholder="Your email"/>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700"> Message </label> <textarea
                        className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 focus:border-blue-400"
                        rows="4" placeholder="Write your message here..."></textarea></div>
                    <button type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"> Send
                        Message
                    </button>
                </form>
            </div>
        </div>
    </section>);
};