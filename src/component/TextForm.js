import React, {useState} from "react";

export default function TextForm(props){
    
const [text, setText] = useState("");

const handleUpCase=()=>{
    let newText =  text.toUpperCase();
    setText(newText)
    props.showAlert('Changed to UpperCase successfully', 'success')
  
}
const handleLowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText)    
    props.showAlert('Changed to Lowercase successfully', 'success')
}
// const handleCapitalize=()=>{
//     let newText = text.charAt(0).toUpperCase() +  slice
//     setText(newText)   
// }
const handleOnChange=(event)=>{
    setText(event.target.value);
    //console.log("Onchnge Done")
   
}

const handleClearText = () =>{
    let newText = '';
    setText(newText)
}
const handleCopyText=()=>{
    let text = document.getElementById("mybox");
    text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)


}
const handlePasteText=()=>{
    // const text = navigator.clipboard.readText()
    // document.querySelector('textarea').value += text;
    }

const handleRemoveExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))

}
    return(
        <>  
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="mybox" class="form-label">{text}</label> */}
                <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange} value={text} ></textarea>
            </div>
            <button type="button" className="btn btn-primary m-1" onClick={handleUpCase}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary m-1" onClick={handleLowerCase}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary m-1" onClick={handleClearText}>Clear Text</button>
            <button type="button" className="btn btn-primary m-1" onClick={handleCopyText}>Copy Text</button>
            <button type="button" className="btn btn-primary m-1" onClick={handlePasteText}>Paste Text</button>
            <button type="button" className="btn btn-primary m-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
            {/* <button type="button" className="btn btn-primary m-1" onClick={handleCapitalize}>Convert to Capitalize</button> */}

            <p>Total number of words:{text.length==0 ? 0 : text.split(' ').length} and Number of characters {text.length==0 ? 0 : text.length}</p>
            <p>{0.008 * text.length} minute read per word</p>
            <div className="preview">
                <h2 className="my-2">Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}