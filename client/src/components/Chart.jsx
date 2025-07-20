import React from 'react';

function Chart() {
  return (
    <div className="h-80 relative">
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#64748B] pr-4">
        <span>2600</span>
        <span>1950</span>
        <span>1300</span>
        <span>650</span>
        <span>0</span>
      </div>
      
      <div className="ml-12 h-full relative">
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-full h-64 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#C4B5FD" />
                </linearGradient>
              </defs>
              
            
              <path
                d="M 0 180 
                   Q 33 170 66 160 
                   Q 100 150 133 140 
                   Q 166 130 200 110 
                   Q 233 90 266 70 
                   Q 300 50 333 40 
                   Q 366 35 400 30 
                   L 400 200 L 0 200 Z"
                fill="url(#chartGradient)"
              />
              
              
              <path
                d="M 0 180 
                   Q 33 170 66 160 
                   Q 100 150 133 140 
                   Q 166 130 200 110 
                   Q 233 90 266 70 
                   Q 300 50 333 40 
                   Q 366 35 400 30"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-lg"
              />
              
              <circle cx="0" cy="180" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
              <circle cx="66" cy="160" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
              <circle cx="133" cy="140" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
              <circle cx="200" cy="110" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
              <circle cx="266" cy="70" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
              <circle cx="333" cy="40" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
              <circle cx="400" cy="30" r="4" fill="#8B5CF6" className="drop-shadow-lg" />
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#64748B] px-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
    </div>
  );
}

export default Chart;