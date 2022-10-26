import React, { useState } from 'react'

function App() {
    const [temp, setTemp] = useState("Select");
    const [textChange, setTextChange] = useState("");
    const [ans1, setans1] = useState("");
    const [ans2, setans2] = useState("");
    const [err, seterr] = useState("");

    function handleClick(event) {
        setTemp(event.target.name)
    }

    function handleChange(event) {
        seterr("");
        setans1("");
        setans2("");
        // console.log(event.target.value);
        setTextChange(event.target.value)
    }


    function btnClick() {
        if (!isNaN(textChange)) {
            console.log(temp);
            if (temp === "Select") {
                seterr("select input Temperature")
            }
            if (temp === "Celsius") {
                const faren = (1.80 * (textChange) + 32).toFixed(2) + " °F";
                const kelv = (Number(textChange) + 273.15).toFixed(2) + " K";

                setans1(faren);
                setans2(kelv);
            }
            if (temp === "Fahrenheit") {
                const cels = ((textChange - 32) / 1.80).toFixed(2) + " °C";
                const kelv = ((5 / 9) * (Number(textChange) - 32) + 273.15).toFixed(2) + " K";

                setans1(cels);
                setans2(kelv);
            }
            if (temp === "Kelvin") {
                const cels = (textChange - 273.15).toFixed(2) + " °C";
                const faren = ((Number(textChange) - 273.15) * (9 / 5) + 32).toFixed(2) + " °F";

                setans1(cels);
                setans2(faren);
            }
        } else {
            seterr("Please enter number");
        }

    }


    function handleKeyPress(e) {
        if (e.key === "Enter") {
            btnClick();
        }
    }







    return (
        <div className='app'  >
            <div className="card">
                <div className="content">
                    <h2>Temperature converter</h2>
                    <div className="degree">
                        <p>Degree</p>
                        <input autoFocus onChange={handleChange} onKeyDown={handleKeyPress} style={{ border: "none" }} id="inp" type="text" name="" />
                        <hr className='' />
                    </div>
                    <div className="type">
                        <p>Type</p>
                        <div className="dropdown">
                            <button className="dropbtn">{temp} <i class="fa-sharp fa-solid fa-caret-down"></i></button>
                            <div className="dropdown-content">
                                <a onClick={handleClick} name="Celsius" className="celsius temps">Celsius</a>
                                <a onClick={handleClick} name="Fahrenheit" className="fahrenheit temps">Fahrenheit</a>
                                <a onClick={handleClick} name="Kelvin" className="kelvin temps">Kelvin</a>
                            </div>
                        </div>
                        <hr className='' />
                    </div>
                    <div className="result">
                        <p>Result</p>
                        <div className=''>{ans1} <span className='second'>{ans2}</span></div>
                        <hr className='' />
                    </div>
                    <button type='button' onClick={btnClick} className='btn'>Convert</button>
                    <p className='err' style={{ color: "#FF3333" }}>{err}</p>
                </div>
            </div>
        </div>
    )
}

export default App