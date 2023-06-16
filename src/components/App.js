// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [dogImg, setDogImg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDogImg(data.message);
            setIsLoading(false);
        })
        .catch(error => console.log(error));
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={dogImg} alt="A Random Dog" />
        </div>
    );
}

export default App;

