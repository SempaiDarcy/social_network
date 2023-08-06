import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    deleteUsersTC,
    getUsersTC, postUsersTC,
    setCurrentPage,
} from "../../redux/users-reducer";
import React, {Component, ComponentType} from 'react';
import {UsersType} from "../../redux/store";
import {Users} from "./User/Users";
import {Preloader} from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}
type mapDispatchToPropsType = {
    deleteUsersTC: (userId: number) => void,
    getUsersTC: (currentPage: number, pageSize: number) => void,
    postUsersTC: (userId: number) => void
}

class UsersContainer extends Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <h1>Users</h1>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    deleteUsersTC={this.props.deleteUsersTC}
                    postUsersTC={this.props.postUsersTC}
                />}
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    console.log('mapStateToProps USERS')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose<ComponentType>(connect(mapStateToProps, {
        setCurrentPage,
        getUsersTC,
        deleteUsersTC,
        postUsersTC
    } as mapDispatchToPropsType),
    WithAuthRedirect
)(UsersContainer)