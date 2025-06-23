// src/components/Donate.jsx

import React from 'react';

const amounts = [100, 250, 500]; // Fixed PHP donation options

const Donate = () => {
  const handleDonate = (amount) => {
    const url = `https://www.paypal.com/donate?business=arv_que_aalcazaren@hotmail.com&currency_code=PHP&item_name=Support+Vet+Wellness+Hub&amount=${amount}`;
    window.open(url, '_blank');
  };

  const handleCustomDonate = () => {
    const url = `https://www.paypal.com/donate?business=arv_que_aalcazaren@hotmail.com&currency_code=PHP&item_name=Support+Vet+Wellness+Hub`;
    window.open(url, '_blank');
  };

  return (
    <div className="donate-container" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Support Vet Wellness Hub</h2>
      <p>Your donation helps us provide care and wellness education for animals in need.</p>

      <div style={{ marginTop: '1rem' }}>
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleDonate(amount)}
            style={{
              margin: '0.5rem',
              padding: '10px 20px',
              backgroundColor: '#ffc439',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Donate ₱{amount}
          </button>
        ))}
        <button
          onClick={handleCustomDonate}
          style={{
            margin: '0.5rem',
            padding: '10px 20px',
            backgroundColor: '#0070ba',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            style={{ height: '20px', marginRight: '10px' }}
          />
          Donate Custom Amount
        </button>
      </div>
    </div>
  );
};

export default Donate;
