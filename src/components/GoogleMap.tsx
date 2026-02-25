import React from 'react';

export const GoogleMap = () => {
  // Address: 東京都中央区銀座7丁目13番20号 銀座THビル
  // Using the Japanese address ensures the most accurate pin placement in Tokyo.
  const query = "東京都中央区銀座7丁目13番20号+銀座THビル";
  
  return (
    <div className="w-full h-[400px] bg-[#efe7da] rounded-sm overflow-hidden border border-black/5 relative mt-12">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?q=${query}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
        title="Rainbow Passport Location"
        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none border border-black/10"></div>
    </div>
  );
};
