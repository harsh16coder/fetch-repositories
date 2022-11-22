import React,{useState} from "react";
import Result from './Result';
import Profile from "./Profile";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';
import Loader from "./Loader";
function SearchBar(){
    const [searchInput,setSearchInput] = useState('');
    const [inputSubmit,setInputSubmit] = useState(false);
    const [repos,setRepos] = useState([]);
    const [result,setResult] = useState(false);
    const [userProfile,setUserProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [len,setLen] = useState(0);
    const [input,setInput] = useState('');
    const inputHandler = (e)=>{
        setSearchInput(e.target.value);
    }
    const [range,setRange] = useState({
        start: 0,
        end: 6,
    })
    const submitHandler = async()=>{
        setResult(false);
        setIsLoading(true);
        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos?page=${range.start}&per_page=${range.end}`);
            const user = await axios(`https://api.github.com/users/${searchInput}`);
            const repos1 = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setLen(repos1.data.length);
            setIsLoading(false);
            setUserProfile(user);
            setRepos(result);
            setInput(searchInput);
            setInputSubmit(true);
            setResult(true);
        }
        catch(err){
            setIsLoading(false);
            console.log(err);
        }
        setSearchInput('');
    };
    const changeRange= async(start,end)=>{
        setRange({start: start,end: end});
    }
    return(
        <React.Fragment>
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" value={searchInput} onChange={inputHandler}/>
                <button type="submit" className="searchButton" onClick={submitHandler}>
                <FaSearch/>
                </button>
            </div>
        </div>
        {isLoading ? <Loader/> : (inputSubmit && <Profile userProfile = {userProfile}/>)}
        {inputSubmit && result && <Result searchInput={input} changeRange = {changeRange} repos = {repos} len ={len} />}
        </React.Fragment>
    );
}

export default SearchBar;