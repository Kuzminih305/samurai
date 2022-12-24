import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Photo from '../img/photo_2022-07-09_11-29-57.jpg'
import Phon from '../img/stock-photo-abstract-grey-orange-polygonal-background.jpg'

const Profile = () => {
    return <div className={classes.content}>
        <div className={classes.phone}>
            <img src={Phon} alt=""/>
        </div>
        <div className={classes.avatarInfo}>
            <div className={classes.avatar}>
                <img src={Photo} alt=""/>
            </div>
            <div>
                <h2>Pavel.K</h2>
                <p>Date of Birth: 01.02.94</p>
                <p>City: Minsk</p>
            </div>
        </div>
        <div>
        </div>
        <MyPosts/>


    </div>
}
export default Profile;