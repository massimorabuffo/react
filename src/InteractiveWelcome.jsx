import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [value, setValue] = useState('')
  
    function handleChange(event) {
      setValue(event.target.value);
    }
  
    return <>
            <input value = {value} onChange={handleChange} type="text"/>
            <Welcome name= {value}/>
          </>
  }