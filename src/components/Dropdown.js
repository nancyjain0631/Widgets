import React, {useState,useEffect, useRef} from 'react';
const Dropdown = ({options, selected, onSelectedChange}) =>{
    const [open,setOpen] = useState(false);
    const ref = useRef();
    useEffect(()=> {
        document.body.addEventListener('click',(event) => {
            // console.log(event.target);
            if(ref.current.contains(event.target)){
                return;
            }
           setOpen(false);
        }
        // ,{capture: true}
        );
    }, []);
    const renderedOptions = options.map((option)=>{
        if(option.value === selected.value){
            return null;
        }
        return(
            <div 
                key={option.value} 
                className="item"
                onClick={()=>onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });
    console.log(ref.current);
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div onClick = {()=> setOpen(!open)} 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : '' }`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );
};
export default Dropdown;