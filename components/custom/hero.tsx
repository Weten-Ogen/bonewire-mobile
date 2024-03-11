import React from 'react';

export default function Hero() {
  return (
    <div  className='p-2 md:p-8'>

        <div id="hero" className="w-full relative overflow-hidden pt-[56.25%]">
            <iframe 
            width="560" 
            height="315" 
            className='w-full h-full absolute right-0 left-0 top-0 bottom-0'
            src="https://www.youtube.com/embed/5Z5S6seJVFU?si=nEyhum2RYYcNaNbR" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            >

            </iframe>
    </div>
    </div>
  );
}
