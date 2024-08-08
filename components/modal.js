// components/PrivacyPolicyModal.js
import { useState } from 'react';

export default function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-sm mb-4">
          We value your privacy and are committed to protecting your personal information. By using our website, you agree to our collection and use of your data as described in our full privacy policy.
        </p>
        <p className="text-sm mb-4">
          For more details, please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
        </p>
        <button 
          onClick={handleClose} 
          className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300"
        >
          I Agree
        </button>
      </div>
    </div>
  );
}