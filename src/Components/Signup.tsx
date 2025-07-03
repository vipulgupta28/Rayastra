import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  
  const [currIndex, setCurrIndex] = useState(0);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    board: '',
    city: '',
  });

  const handleNext = () => {
    if (currIndex < 3) setCurrIndex(currIndex + 1);
  };

  const handleBack = () => {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center min-h-screen bg-black px-4">
        <h1 className='text-white text-4xl'>Help us to know you more </h1>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300">
        {currIndex === 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4">What is your name?</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        {currIndex === 1 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Which class are you in?</h3>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Class</option>
              {[...Array(9)].map((_, i) => (
                <option key={i} value={i + 6}>Class {i + 1}</option>
              ))}
            </select>
          </>
        )}

        {currIndex === 2 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Select your board</h3>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="State Board">State Board</option>
              <option value="IB">IB</option>
            </select>
          </>
        )}

        {currIndex === 3 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Which city are you from?</h3>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        <div className="mt-6 flex justify-between">
          {currIndex > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
          )}
          {currIndex < 3 ? (
            <button
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 hover:cursor-pointer transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() =>navigate("/coursespage")}
              className="ml-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 hover:cursor-pointer transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
