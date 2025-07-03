import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='bg-retroBlue hover:bg-blue-600 p-2 text-xl font-bold rounded-full text-retroPrimary transition-all duration-300 transform hover:scale-105'> 
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton