import React from 'react';
import {MyUsersPropsType} from "./UsersContainer";
import axios from "axios";

import UsersFC from "./UsersFC";


export class UsersAPIComponent extends React.Component<MyUsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount = 100)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <div>
            <UsersFC totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     onPageChanged={this.onPageChanged}
                     currentPage={this.props.currentPage}
                     usersPage={this.props.usersPage}
                     follow={this.props.follow}
                     unFollow={this.props.unFollow}
            />
        </div>
    }
}