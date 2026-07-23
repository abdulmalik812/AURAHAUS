import { useState, useEffect } from 'react';

const messages = [
  "FREE SHIPPING ON ORDERS OVER ₹999",
  "USE CODE AURA10 FOR 10% OFF YOUR FIRST ORDER",
  "✦ HANDMADE IN INDIA ✦ CUSTOM ORDERS WELCOME ✦"
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gold text-bg text-center py-2 px-4 text-xs sm:text-sm font-medium tracking-widest uppercase z-50 relative">
      <p
        className="transition-all duration-400 ease-in-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-8px)'
        }}
      >
        {messages[current]}
      </p>
    </div>
  );
}
