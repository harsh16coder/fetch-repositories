import React from "react";
import './profile.css';
import { Icon } from '@iconify/react';
function Profile(props){
    const {userProfile} = props;
    console.log(userProfile.data);
    return(
        <React.Fragment>
            <div className="flex-container space-between">
                <div className="col carddiv">
                    <div className="img-placeholder">
                    <img src={`${userProfile.data.avatar_url}`} alt="User Profile "/>
                    </div>
                <div className="sub-divs">
                <h3>{`${userProfile.data.name}`}</h3>
                <div className="content"><Icon icon="fa-solid:user"/> <p> {`${userProfile.data.bio}`}</p></div>
                <div className="content"><Icon icon="fa-solid:paper-plane" /><p><a href={`${userProfile.data.email}`}> Email Me</a></p></div>
                <div className="content"><Icon icon="material-symbols:location-on" /><p>{`${userProfile.data.location}`}</p></div>
                </div>
                </div>
            </div>
            <p className="flex-containerp"><Icon icon="fa-solid:link" />{`${userProfile.data.html_url}`}</p>
        </React.Fragment>
    );
}

export default Profile;