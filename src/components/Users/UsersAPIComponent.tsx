import React from 'react';
import {MyUsersPropsType} from "./UsersContainer";
import UsersFC from "./UsersFC";
import Preloader from "../common/preloader/Preloader";






export class UsersAPIComponent extends React.Component<MyUsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (currentPage: number) => {
        this.props.getUserPageThunkCreator(currentPage, this.props.pageSize)
    }


    render() {
        return <div>
            {this.props.isLoading ? <Preloader/> : null}
            <UsersFC totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     onPageChanged={this.onPageChanged}
                     currentPage={this.props.currentPage}
                     usersPage={this.props.usersPage}
                     followingInProgress={this.props.followingInProgress}
                     userFollowThunkCreator={this.props.userFollowThunkCreator}
                     userUnFollowThunkCreator={this.props.userUnFollowThunkCreator}

            />
        </div>
    }
}