import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [result, setResult] = useState("");
    const [inValue, setInValue] = useState("");

    let appendToInValue = (val) => {
        setInValue(inValue + val);
    };

    let equals = (str) => {
        let ans = eval(str);
        setResult(ans);
    };

    let clear = () => {
        setInValue("");
        setResult("");
    };

    return (
        <div className="App">
            <h1>React Calculator</h1>
            <input value={inValue} readOnly></input>
            <h3>{result}</h3>
            <div className="grid-container">
                <button onClick={() => appendToInValue("9")}>9</button>
                <button onClick={() => appendToInValue("8")}>7</button>
                <button onClick={() => appendToInValue("7")}>8</button>
                <button onClick={() => appendToInValue("*")}>*</button>
                <button onClick={() => appendToInValue("6")}>6</button>
                <button onClick={() => appendToInValue("5")}>5</button>
                <button onClick={() => appendToInValue("4")}>4</button>
                <button onClick={() => appendToInValue("/")}>/</button>
                <button onClick={() => appendToInValue("3")}>3</button>
                <button onClick={() => appendToInValue("2")}>2</button>
                <button onClick={() => appendToInValue("1")}>1</button>
                <button onClick={() => appendToInValue("-")}>-</button>
                <button onClick={() => clear()}>C</button>
                <button onClick={() => appendToInValue("0")}>0</button>
                <button onClick={() => equals(inValue)}>=</button>
                <button onClick={() => appendToInValue("+")}>+</button>
            </div>
        </div>
    );
}

export default App;
