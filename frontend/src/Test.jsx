import React, { useEffect, useRef } from 'react';

const Test = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        const rect = scrollElement.getBoundingClientRect();
        // Option 1: Bottom relative to document top
        const scrollTop = scrollElement.scrollTop; // Scroll position of the element
        const scrollBottom = scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight;
 // Scroll position of the element
        const bottomRelativeToDocument = scrollTop + rect.bottom;
        

        console.log('Bottom relative to document:', bottomRelativeToDocument, scrollTop, scrollBottom, window.innerHeight);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="App" style={{ height: '100vh', overflow: 'auto' }}>
      <h1>Scroll the Page!</h1>
      <p>Scroll down to see the console message.</p>
      <div style={{ height: '2000px', backgroundColor: '#f0f0f0' }}>
        <p style={{ padding: '50px' }}>Keep scrolling...</p>
      </div>
    </div>
  );
};

export default Test;