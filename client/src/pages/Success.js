import React, { useEffect, useState } from 'react';

const Success = () => {
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    const executePayment = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const payerId = params.get('PayerID');
        const paymentId = params.get('paymentId');

        if (payerId && paymentId) {
          const response = await fetch(`/api/payment/execute?PayerID=${payerId}&paymentId=${paymentId}`);
          const data = await response.json();

          if (response.ok) {
            // Payment was successful, show download link to the user
            setDownloadLink('/pdfs/your_pdf_file.pdf'); // Replace with your PDF file download link
          } else {
            // Payment was not successful, handle the error
            console.error('Error executing payment:', data.error);
            // Show an error message to the user
          }
        } else {
          // Handle the case where the URL parameters are missing.
          console.error('Missing URL parameters (PayerID or paymentId).');
          // Show an error message to the user
        }
      } catch (error) {
        console.error('Error executing payment:', error);
        // Handle error and show error message to the user
      }
    };

    executePayment();
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  };

  const successMessageStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
  };

  const downloadLinkStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      {downloadLink ? (
        <div>
          <h1 style={successMessageStyle}>Payment Successful!</h1>
          <p>Your PDF file is ready for download:</p>
          <a style={downloadLinkStyle} href={downloadLink} download>
            Download PDF
          </a>
        </div>
      ) : (
        <h1>Processing Payment...</h1>
      )}
    </div>
  );
};

export default Success;
