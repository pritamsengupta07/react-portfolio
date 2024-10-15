// src/components/Splash.jsx
import React, { useEffect, useState } from 'react';

const Splash = ({ onAnimationEnd }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onAnimationEnd(); // Call this function to indicate animation is done
    }, 3000); // Duration of splash screen

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    visible && (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-center text-4xl splash-animation">
        <div>
          <p className="mb-4">Pritam Sengupta</p><br></br>
          <p className="mb-4">The moto I believe in:</p>
          <p>When You Touch it, You own it</p>
        </div>
      </div>
    )
  );
};

export default Splash;
