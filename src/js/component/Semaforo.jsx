import React,{useEffect,useState} from "react";

const Semaforo = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    return (
        <div className="d-flex flex-column align-items-center">
            <div id="trafficTop"></div>
            <div id="container" className="p-2 rounded-4">
                <div className={`red light ${selectedColor === 'red' ? 'selected' : ''}`} onClick={() => setSelectedColor('red')}></div>
                <div className={`my-1 orange light ${selectedColor === 'orange' ? 'selected' : ''}`} onClick={() => setSelectedColor('orange')}></div>
                <div className={`green light ${selectedColor === 'green' ? 'selected' : ''}`} onClick={() => setSelectedColor('green')}></div>
            </div>
        </div>
    );
}

export default Semaforo