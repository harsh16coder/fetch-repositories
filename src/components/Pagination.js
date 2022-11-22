import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import './Pagination.css';
function Pagination({showPerPage , onPaginationChange,total}){
    const [counter,setCount] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total/showPerPage));
    const [isLoading , setIsLoading] = useState(false);
    useEffect(()=>{
        const value = showPerPage * counter
        onPaginationChange(counter,value);
        setIsLoading(false);
    },[counter])
    const onButtonClick = (type)=>{
        setIsLoading(true);
        if(type === "prev"){
            if(counter===1){
                setCount(1);
            }
            else{
                setCount(counter-1);
            }
        }
        else if(type==="next"){
            if(numberOfButtons===counter){
                setCount(counter);
            }
            else{
                setCount(counter+1);
            }
        }
    }
    return(
        <React.Fragment>
            {isLoading ? <Loader/> :
            <div className="pagination">
                <a href="#" onClick={()=> onButtonClick("prev")}>&laquo;</a>
    
                {new Array(numberOfButtons).fill("").map((el, index) => (
                    <a
                        className={`${index + 1 === counter ? "active" : null}`}
                        href="#"
                        onClick={() => setCount(index + 1)}
                    >
                        {index + 1}
                    </a>
                ))}
                <a href="#" onClick={() => onButtonClick("next")}>&raquo;</a>

            </div>}
        </React.Fragment>
    );
}

export default Pagination;