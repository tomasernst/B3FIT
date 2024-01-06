import React, { useState } from 'react';
import Nav from '../components/Nav';
import Pricing from '../components/Pricing';
import Spinner from '../components/Spinner';

function Services() {
  const [loading, setLoading] = useState(true);

  // Your actual loading logic here
  // For example, if you're fetching data, setLoading(false) would typically go in the success/failure callback
  // For demonstration, using setTimeout to toggle loading after 2 seconds
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      <Nav />
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/31a0f10f30316b11561148ac6cf5e198/photo-1520596880803-6ea0113a42d1.jpg)',
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="mt-24">
            <Pricing />
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;