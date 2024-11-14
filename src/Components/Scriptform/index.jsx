import { useState } from 'react';
import NavBar from '../Nav';
import { postScript } from '../../utils/postScript';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
export default function ScriptForm() {
  const [loading, setLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    googleDocLink: '',
    pdfFile: null,
    genre: '',
    synopsis: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formValues.title.trim()) errors.title = "Title is required.";
    if (!formValues.googleDocLink.trim()) {
      errors.googleDocLink = "Google Doc link is required.";
    } else if (!/^https?:\/\/.+/.test(formValues.googleDocLink)) {
      errors.googleDocLink = "Please enter a valid URL.";
    }

    if (!formValues.genre.trim()) errors.genre = "Genre is required.";
    if (!formValues.synopsis.trim()) errors.synopsis = "Synopsis is required.";

    if (formValues.pdfFile && formValues.pdfFile.type !== "application/pdf") {
      errors.pdfFile = "Only PDF files are allowed.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prevValues) => ({
      ...prevValues,
      pdfFile: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    if (!validateForm()) return;
    setLoading(true);

    const payload = {
      title: formValues.title,
      googleDocLink: formValues.googleDocLink,
      genre: formValues.genre,
      synopsis: formValues.synopsis,
      ...(formValues.pdfFile && { pdfFile: formValues.pdfFile })
    };

    try {
      const response = await postScript(payload);
      if (response.status === 'success') {
        setFormValues({ title: '', googleDocLink: '', pdfFile: null, genre: '', synopsis: '' });
        setIsPosted(true);
        setTimeout(() => setIsPosted(false), 3000);
      } else {
        setFormErrors(response.errors);
      }
    } catch (error) {
      console.error('Error submitting script:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#000000] bg-opacity-10  p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-xl font-semibold text-center">Post Your Script</h1>

        <input
          type="text"
          name="title"
          placeholder="Name of Script"
          value={formValues.title}
          onChange={handleChange}
          className={`w-full px-3 rounded-xl py-3 my-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
        />
        {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}

        <input
          type="text"
          name="googleDocLink"
          placeholder="Link to Google Docs"
          value={formValues.googleDocLink}
          onChange={handleChange}
          className={`w-full px-3 rounded-xl py-3 my-2 border ${formErrors.googleDocLink ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
        />
        {formErrors.googleDocLink && <p className="text-red-500 text-sm">{formErrors.googleDocLink}</p>}

        <input
          type="file"
          name="pdfFile"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className={`w-full cursor-pointer flex items-center justify-center hover:text-white rounded-xl py-3 my-2 border ${formErrors.pdfFile ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 hover:bg-[#6A3D96] transition-all duration-300`}
        >
          <FaCloudUploadAlt className="mr-2" />
          {formValues.pdfFile ? formValues.pdfFile.name : 'Click to upload PDF (Optional)'}
        </label>
        {formErrors.pdfFile && <p className="text-red-500 text-sm">{formErrors.pdfFile}</p>}

        <input
          type="text"
          name="genre"
          placeholder="Genres"
          value={formValues.genre}
          onChange={handleChange}
          className={`w-full px-3 rounded-xl py-3 my-2 border ${formErrors.genre ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
        />
        {formErrors.genre && <p className="text-red-500 text-sm">{formErrors.genre}</p>}

        <input
          type="text"
          name="synopsis"
          placeholder="Brief Description"
          value={formValues.synopsis}
          onChange={handleChange}
          className={`w-full px-3 rounded-xl py-3 my-2 border ${formErrors.synopsis ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500 outline-none`}
        />
        {formErrors.synopsis && <p className="text-red-500 text-sm">{formErrors.synopsis}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'} flex items-center justify-center`}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin mr-2" />
          ) : null}
          {loading ? 'Submitting...' : 'Submit Script'}
        </button>
        {isPosted && (
          <p className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded relative flex" role="success">
            Script posted successfully!
          </p>
        )}

      </form>
    </div>
  );
}
