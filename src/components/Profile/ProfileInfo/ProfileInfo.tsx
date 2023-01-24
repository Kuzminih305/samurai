import React from "react";
import classes from "./ProfileInfo.module.css";
import Phon from "../../img/stock-photo-abstract-grey-orange-polygonal-background.jpg";
import Photo from "../../img/photo_2022-07-09_11-29-57.jpg";


const ProfileInfo = () => {
    return (
        <div>
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
        </div>
    )
}
export default ProfileInfo;