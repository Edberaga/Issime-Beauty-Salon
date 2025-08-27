import { FaInstagram } from "react-icons/fa";

const InstagramButton = () => {
  return (
    <div className="fixed bottom-8 md:right-6 right-5 z-[999]">
      <a
        href="https://www.instagram.com/issimebeauty/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Issime Beauty Salon Instagram"
        title="Follow Issime Beauty Salon on Instagram"
        className="bg-pink-500 md:p-4 p-3 text-white rounded-full shadow-lg hover:bg-[#6228d7] transition-all duration-300 hover:scale-110 flex justify-center items-center"
      >
        <FaInstagram className="md:h-6 md:w-6 h-5 w-5" />
      </a>
    </div>
  )
}

export default InstagramButton
