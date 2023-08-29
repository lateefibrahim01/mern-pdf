import React from 'react';

const Home = () => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const handleBuyNow = async () => {
    try {
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      window.location.href = data.approval_url;
    } catch (error) {
      console.error('Error initiating payment:', error);
      // Handle error and show error message to the user
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to My PDF Store</h1>
      <p>Click the button below to purchase the valuable PDF file about health tips for $10:</p>
      <button style={buttonStyle} onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default Home;
