import React,{useState} from "react";
import Result from './Result';
import Profile from "./Profile";
import axios from "axios";
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';
function SearchBar(){
    const [searchInput,setSearchInput] = useState('');
    const [inputSubmit,setInputSubmit] = useState(false);
    const [repos,setRepos] = useState([]);
    const [result,setResult] = useState(false);
    const [userProfile,setUserProfile] = useState([]);
    const inputHandler = (e)=>{
        setSearchInput(e.target.value);
    }

    const submitHandler = async()=>{
        setResult(false);
        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            const user = await axios(`https://api.github.com/users/${searchInput}`);
            setUserProfile(user);
            setRepos(result);
            setInputSubmit(true);
            setResult(true);
        }
        catch(err){
            console.log(err);
        }
        setSearchInput('');
    };
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
        {inputSubmit &&<Profile userProfile = {userProfile}/>}
        {inputSubmit && result && <Result repos = {repos}/>}
        </React.Fragment>
    );
}

export default SearchBar;