import React, { useState } from 'react';
import FormField from './modules/FormField';
import Button from '../Button/Button';

// form submissions are working now my g

const ContactForm = ({ formFields, rowConfig }) => {
  const initialFormData = formFields.reduce((acc, field) => {
    acc[field.id] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Show success message
        setShowSuccessMessage(true);

        // Reset form fields
        setFormData(initialFormData);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000); // Hide success message after 2 seconds
      } else {
        console.error('Form submission failed');
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const rows = rowConfig(formFields);

  return (
    <form onSubmit={handleSubmit} netlify name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-col text-start space-y-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex py-2 flex-row space-x-4 space-y-0">
            {row.map((field) => (
              <FormField
                key={field.id}
                field={field}
                value={formData[field.id]}
                onChange={handleInputChange}
              />
            ))}
          </div>
        ))}

        <div className="flex justify-center mt-2">
          <Button text="SUBMIT" className="mt-2" />
        </div>

        {showSuccessMessage && (
          <p className="text-theme-blue text-center font-semibold mt-10">&#10003; Form submitted successfully</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;