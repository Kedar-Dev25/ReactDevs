import React from "react";
import { useState } from "react";
import Author from "../../Author";
function DigitalTime() {
const[input,setInput] = useState("");
const[result,setResult] = useState(null);

const handleOnChange = (e) =>{
   setInput(e.target.value);
}
const handleOnClick = () =>{
    let correct = 0;
    for(let i =0;i<data.length;i++) {
        if(data[i] == input[i]){
            correct++;
        }
    }

    const Accuracy = Math.round((correct/data.length)*100);
    const Mistakes = (data.length - correct);
    setResult({Accuracy,Mistakes});
}
const data = "This is made in React js.React is a Library which is built top of javascript."

  return (
    <>
    <div style={{
      margin: "40px auto",
      padding: "20px",
      maxWidth: "900px",
      border : "3px solid lightblue"
    }}>
      <div style={{display :"flex",alignItems :"center",flexDirection :"column"}}>
        <div
  style={{
    display: "inline-block",
    padding: "6px 12px",
    backgroundColor: "#38bdf8",
    color: "white",
    borderRadius: "6px",
    fontWeight: "bold",
    marginBottom: "10px",
  }}
>
  Type to See Your Speed
</div>                    
        <div>
            <div
                style={{
                    width: "70%",
                    padding: "20px",
                    margin: "15px 0",
                    backgroundColor: "#0f172a",
                    color: "#e2e8f0",
                    borderRadius: "12px",
                    border: "1px solid #334155",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    letterSpacing: "0.5px",
                }}
                >
                <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
                    💡 Type this carefully:
                </span>
                <br />
                <br />
                {data}
            </div>
                <input
                    onChange={handleOnChange}
                    value={input}
                    type="text"
                    placeholder="Start typing here..."
                    style={{
                        width: "70%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #64748b",
                        outline: "none",
                        marginTop: "10px",
                    }}
                />
                <button
                    onClick={handleOnClick}
                    style={{
                        marginTop: "10px",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#22c55e",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                    >
                    Check Result✅
                </button>
                    <div
  style={{
    border: "2px solid lightblue",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
  }}
>{result ? (
                        <>
                            <div>🎯 Accouracy  : {result.Accuracy}%</div>
                            <div>❌ Mistakes  : {result.Mistakes}</div>
                        </>
                    ) 
                    : (
                        <>
                    <div>Nothing U Typed yet</div>
                    </>
                        )}
            </div>
        </div>
       </div>
       <Author name="Kedarnath Mandal" githubLink="https://github.com/Kedar-Dev25"/>
       </div>
    </>
  );
}

export default DigitalTime;