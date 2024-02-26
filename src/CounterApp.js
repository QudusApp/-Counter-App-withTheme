import React, {useState, useContext} from "react";
import { ThemeContext} from  './Context/themeContext';

function ConterApp() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1); // step state
    const {theme} = useContext(ThemeContext);

    const handleAdd = () => {
        setCount(count + step);
    };

    const handleDelete = () => {
        setCount(count - step);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleStepChange = (e) => {
        setStep(parseInt(e.target.value) || 1);
    };

    return (
        <div className={`App ${theme}`}>
            <h1>Amatip Counter App</h1>
            <p>Your count is: {count}</p>
            <input type="number" value={step} onChange={handleStepChange} />
            <button onClick={handleAdd}>Increase</button>
            <button onClick={handleDelete}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default ConterApp;