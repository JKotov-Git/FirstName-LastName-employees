import React from "react";
import "./Input.css";

const InputFile = (props) => {
    return(
        <div className="input-container">
            <form className="upload-file-form">
                <label>Add File</label>
                <input type="file" name="file" onChange={props.add} />
            </form>
            
        </div>
    )
}

export default InputFile;

