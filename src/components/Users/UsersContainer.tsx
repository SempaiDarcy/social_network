import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toogleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React, {Component} from 'react';
import axios from "axios";
import {UsersType} from "../../redux/store";
import {Users} from "./User/Users";
import {Loader} from "../common/Loader/Loader";

type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}
type mapDispatchToPropsType = {
    setUsers: (users: UsersType[]) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void
    toogleIsFetching:(isFetching:boolean)=>void
}

class UsersContainer extends Component<UserPropsType> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setUsersTotalCount(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(res.data.items)
        })
    }

    // в классовой компоненте обязателен метод render() который будет возвращать тот самый jsx
    render() {
        return <>
            <h1>Users</h1>
            {this.props.isFetching ?<Loader/>  :
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                />}
        </>
    }
}

export const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// export default connect(mapStateToProps, {
//     setUsers: setUsers,
//     follow: follow,
//     unfollow: unfollow,
//     setCurrentPage: setCurrentPage,
//     setTotalUsersCount: setUsersTotalCount,
//     toogleIsFetching:toogleIsFetching
// })(UsersContainer)

export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setUsersTotalCount,
    toogleIsFetching
})(UsersContainer)