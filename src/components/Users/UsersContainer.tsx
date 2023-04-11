import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Users, UserType} from "./Users";
import Preloader from "../common/Preloader/Preloader";

type UsersPropsType = {
    users: UserType[];
    pageSize: number,
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType, UserType[]> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                :
                <Users users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.props.setCurrentPage}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export let UserContainerConnect = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);