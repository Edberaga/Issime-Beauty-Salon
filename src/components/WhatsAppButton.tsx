import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href="https://wa.link/wg0gmt"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center md:p-4 p-3"
        aria-label="Contact Issime Beauty Salon via WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 md:w-6 md:h-6 w-5 h-5" />
      </a>
    </div>
  );
};

export default WhatsAppButton;