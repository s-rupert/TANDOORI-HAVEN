import React, { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        const handleScroll = () => {
            console.log("Scrolling...");
        }; window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <h1>Scroll the Page!</h1>
            <p>Scroll down to see the console message.</p>

            {/* Add enough height to the page to allow scrolling */}
            <div style={{ height: '2000px', backgroundColor: '#f0f0f0' }}>
                <p style={{ padding: '50px' }}>Keep scrolling...</p>
            </div>
        </div>
    );
}

export default Test;
