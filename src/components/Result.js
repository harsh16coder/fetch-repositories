import React, {useState } from "react";
import Pagination from "./Pagination";
import './Result.css';
function Result(props){
    const {repos} = props;
    // const [showPerPage , setShowPerPage] = useState(6)
    const showPerPage = 6;
    const [pagination , setPagination] = useState({
        start:0,
        end:showPerPage,
    });
    const onPaginationChange = (start,end) =>{
        console.log(start,end);
        setPagination({start: start , end: end});
    }
    const renderCard = (item,index) => {
        return (
            <div key={index} className="box">
                <div>
                    <h4>{item.name}</h4>
                    <p className="para">{item.description}</p>
                    {console.log(item.language)}
                    { item.language != null ? <h5>{item.language}</h5>: <></>}
                </div>
            </div>
        );
    }
    console.log(repos.data);
    return(
        <React.Fragment>
        <div className="grid" style={{width: "100vw"}}>
            {repos.data.slice(pagination.start,pagination.end).map(renderCard)}
        </div>
        <Pagination showPerPage={showPerPage} onPaginationChange = {onPaginationChange} total={repos.data.length}/>
        </React.Fragment>
    );
}

export default Result;