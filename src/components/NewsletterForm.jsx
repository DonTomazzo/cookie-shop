import React, { useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import './NewsletterForm.css'; 

function NewsletterForm() {
  const [formData, setFormData] = useState({
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulera API-anrop
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Återställ efter 3 sekunder
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ email: '' });
    }, 3000);
  };

  return (
    <div className="newsletter-form-wrapper">
      <div className="newsletter-form-container">
        <div className="contact-card">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-4">
                <div className="icon-container mx-auto mb-3">
                  <FaCookieBite className="main-icon" />
                </div>
                <h1 className="contact-title mb-3">Färska news</h1>
                <p className="contact-subtitle mb-0">Anmäl dig till vårt nyhetsbrev för att få erbjudanden och nyheter!</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4 position-relative">
                  <div className={`glow-effect ${focusedField === 'email' ? 'active' : ''}`}></div>
                  <div className="input-container">
                    <span className={`input-icon ${focusedField === 'email' ? 'icon-active' : ''}`}>✉️</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="din@email.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="submit-button"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    {isLoading ? (
                      <>
                        <div className="spinner me-2"></div>
                        <span>Anmäler...</span>
                      </>
                    ) : (
                      <>
                        <span className="me-2">🎉</span>
                        <span>Anmäl mig!</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="success-icon mx-auto mb-4">
                <span className="check-icon">✅</span>
              </div>
              <h2 className="success-title mb-3">Tack för din anmälan!</h2>
              <p className="success-text">Vi ser fram emot att skicka nyheter till dig.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsletterForm;