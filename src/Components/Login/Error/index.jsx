// src/Components/Login/ErrorMessage.jsx
import PropTypes from 'prop-types';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex" role="alert">
            <p className="flex text-center items-center"><AiOutlineExclamationCircle className="inline-block mr-2" /><span className="block">{message}</span></p>
            
        </div>
    );
};

// Add prop validation
ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
