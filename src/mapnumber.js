import React from 'react';

const MapNumber = () => {
    // Helper function to check if a number is prime
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const arr = [];
    for (let i = 0; i < 32; i++) {
        arr.push(i);
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {arr.map((number) => {
                let backgroundColor;

                if (isPrime(number)) {
                    backgroundColor = 'red';
                } else if (number % 2 === 0) {
                    backgroundColor = 'lightGreen';
                } else {
                    backgroundColor = 'yellow';
                }

                return (
                    <div
                        key={number}
                        style={{ 
                            backgroundColor, 
                            padding: '10px', 
                            width: '50px', 
                            height: '50px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            color: 'white',
                            borderRadius: '5px'
                        }}
                    >
                        {number}
                    </div>
                );
            })}
        </div>
    );
};

export default MapNumber;
