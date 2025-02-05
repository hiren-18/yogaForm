
import { useState } from 'react'; 
import { enrollUser } from '../api/userApi';
import './Form.css'; 

const Form = ({ token, onSuccess }) => {
  const [formData, setFormData] = useState({ batch: '', month: '' });
  const [message, setMessage] = useState(""); 
  const [messageType, setMessageType] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    const response = await enrollUser(token, formData);

    if (response.message) {
      setMessage(response.message);
      setMessageType("success");
      onSuccess();
    } else {
      setMessage(response.error || "An error occurred");
      setMessageType("error");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <h2>Select Your Yoga Batch</h2>
        <select
          className="form-input"
          onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
        >
          <option value="">Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        <input
          type="text"
          className="form-input"
          placeholder="Enter Month (e.g. March)"
          onChange={(e) => setFormData({ ...formData, month: e.target.value })}
        />
        <button type="submit" className="submit-button">Enroll</button>

     
        {message && <p className={`message ${messageType}`}>{message}</p>}
      </form>
    </div>
  );
};

export default Form;
