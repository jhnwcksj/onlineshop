import React, { useState } from 'react';
// import './TrackOrder.css';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [result, setResult] = useState(null);

  const trackOrder = async () => {
    try {
      // Здесь должен быть код для отправки запроса к API Казпочты
      // Пока используем заглушку
      const mockResponse = {
        status: 'Delivered',
        message: 'Your order with number ' + orderNumber + ' has been delivered successfully.',
      };

      setResult(mockResponse);
    } catch (error) {
      console.error('Error fetching tracking data:', error);
    }
  };

  return (
    <div className="container">
      <h2>Track My Order</h2>
      <div className="form-group">
        <label>Enter Your Order Number:</label>
        <input
          type="text"
          className="form-control"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={trackOrder}>
        Track Order
      </button>
      {result && (
        <div className="result">
          <p>Status: {result.status}</p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;


// import React, { useState } from 'react';

// const TrackOrder = () => {
//   const [orderNumber, setOrderNumber] = useState('');
//   const [result, setResult] = useState(null);

//   const trackOrder = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/track-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ orderNumber }),
//       });

//       const data = await response.json();
//       setResult(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Track My Order</h2>
//       <label>Order Number:</label>
//       <input  type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
//       <button onClick={trackOrder}>Track</button>

//       {result && (
//         <div>
//           <h3>Tracking Result</h3>
//           <p>Status: {result.status}</p>
//           <p>{result.message}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackOrder;
