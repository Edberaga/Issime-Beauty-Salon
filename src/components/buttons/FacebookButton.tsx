import { FaFacebook } from "react-icons/fa";

function FacebookButton() {
  return (
    <div className='fixed bottom-24 md:right-6 right-5 z-[999]'>
      <a
        href='https://www.facebook.com/Issime.beauty'
        target='_blank'
        rel="noopener noreferrer"
        aria-label="View Issime Beauty Salon Facebook"
        className='bg-blue-800 md:p-4 p-3 rounded-full text-white hover:bg-blue-900 transition-all duration-300 hover:scale-110 shadow-lg flex justify-center items-center'
      >
        <FaFacebook className="md:h-6 md:w-6 h-5 w-5" />
      </a>
    </div>
  )
}

export default FacebookButton
