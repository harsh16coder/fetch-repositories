import React, {useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Loader from "./Loader";
import './Result.css';
function Result({searchInput,changeRange ,repos,len}){
    console.log(searchInput);
    const [isLoading , setIsLoading] = useState(false);
    const showPerPage = 6;
    const [results,setResults] = useState(repos);
    const onPaginationChange = async(start,end) =>{
        setIsLoading(true);
        console.log(start,end);
        changeRange(start,end);
        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos?page=${start}&per_page=6`);
            setResults(result);
        }
        catch(err){
            console.log(err);
        }
        setTimeout(() => {
           setIsLoading(false);
        }, 1000);
    }
    console.log(results);
    const renderCard = (item,index) => {
        return (
            <div key={index} className="box">
                <div>
                    <h4>{item.name}</h4>
                    <p className="para">{item.description}</p>
                    { item.language != null ? <h5>{item.language}</h5>: <></>}
                </div>
            </div>
        );
    }
    return(
        <React.Fragment>
        {isLoading ? <Loader/> :
        <div className="grid" style={{width: "100vw"}}>
            {results.data.map(renderCard)}
        </div>}
        <Pagination showPerPage={showPerPage} onPaginationChange = {onPaginationChange} total={len}/>
        </React.Fragment>
    );
}

export default Result;