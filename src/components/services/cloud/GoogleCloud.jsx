import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import ImageSlider from '../../common/ImageSlider'; // If needed

const GoogleCloud = () => {
  const pageInfo = {
    icon: <SiGoogle className="text-[#4285F4] text-6xl mb-6" />,
    title: 'Google Cloud',
    description: 'Leverage Google Cloud for scalable and secure cloud solutions.',
    // Add other relevant information
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <ImageSlider images={sliderImages} /> {/* If applicable */}
      </div>
      <div className="relative bg-white">
        <PageTemplate pageInfo={pageInfo} pageType="service" />
      </div>
    </>
  );
};

export default GoogleCloud;
