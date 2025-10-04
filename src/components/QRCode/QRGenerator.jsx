import React, { useState } from 'react';
import { QrCode, Download } from 'lucide-react';

export default function QRGenerator() {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [error, setError] = useState('');

    const generateQR = () => {
        if (!url.trim()) {
            setError('Vui lòng nhập link website');
            return;
        }

        // Validate URL
        try {
            new URL(url);
            setError('');

            // Generate QR code using Google Charts API
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
            setQrCode(qrUrl);
        } catch (e) {
            setError('Link không hợp lệ. Vui lòng nhập đầy đủ (ví dụ: https://example.com)');
            setQrCode('');
        }
    };

    const downloadQR = () => {
        if (!qrCode) return;

        const link = document.createElement('a');
        link.href = qrCode;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            generateQR();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-indigo-100 p-3 rounded-full">
                        <QrCode className="w-8 h-8 text-indigo-600" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Tạo Mã QR
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Nhập link website để tạo mã QR
                </p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Link Website
                        </label>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="https://example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                    </div>

                    <button
                        onClick={generateQR}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg hover:shadow-xl"
                    >
                        Tạo Mã QR
                    </button>
                </div>

                {qrCode && (
                    <div className="mt-8 text-center animate-fade-in">
                        <div className="bg-gray-50 p-6 rounded-xl inline-block">
                            <img
                                src={qrCode}
                                alt="QR Code"
                                className="w-64 h-64 mx-auto"
                            />
                        </div>

                        <button
                            onClick={downloadQR}
                            className="mt-4 flex items-center justify-center gap-2 mx-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                        >
                            <Download className="w-4 h-4" />
                            Tải Xuống QR
                        </button>

                        <p className="mt-4 text-sm text-gray-600">
                            Quét mã QR để truy cập: <br />
                            <span className="font-medium break-all">{url}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}