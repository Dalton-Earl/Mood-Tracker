import React from "react";

export function NewActivity(props){
    return(
        <form action="#">
        <p>
          <label>
            <input name="group1" type="radio" checked />
            <span>Done</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio" />
            <span>1-5</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" type="radio"  />
            <span>1-10</span>
          </label>
        </p>
        
      </form> 
    );
}
export function EnterMood(props){
  return(
    
      <p className="mood-range">
        How was your day today?
        <input type="range" id="mood" min="3" max="7"/>
      </p>
    
  )
}
export function SaveBtn(props){
  return(
    <button className="btn waves-effect waves-light" type="submit" name="action">Save
    {/* <i className="material-icons right">send</i> */}
  </button>
  )
}