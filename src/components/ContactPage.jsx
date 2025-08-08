import React, { useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-form-container">
        <div className="contact-card">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-4">
                <div className="icon-container mx-auto mb-3">
                  <FaCookieBite className="main-icon" />
</div>
                <h1 className="contact-title mb-3">Lägg en beställning</h1>
                <p className="contact-subtitle mb-0">Vi ser fram emot att höra från dig!</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4 position-relative">
                  <div className={`glow-effect ${focusedField === 'name' ? 'active' : ''}`}></div>
                  <div className="input-container">
                    <span className={`input-icon ${focusedField === 'name' ? 'icon-active' : ''}`}>👤</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Ditt namn"
                    />
                  </div>
                </div>

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

                <div className="mb-4 position-relative">
                  <div className={`glow-effect ${focusedField === 'message' ? 'active' : ''}`}></div>
                  <div className="input-container">
                    <span className={`input-icon textarea-icon ${focusedField === 'message' ? 'icon-active' : ''}`}>💬</span>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      placeholder="Skriv ditt meddelande här..."
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
                        <span>Skickar...</span>
                      </>
                    ) : (
                      <>
                        <span className="me-2">📤</span>
                        <span>Skicka meddelande</span>
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
              <h2 className="success-title mb-3">Tack för ditt meddelande!</h2>
              <p className="success-text">Vi återkommer så snart som möjligt.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;