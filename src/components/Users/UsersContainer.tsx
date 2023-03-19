import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {Action, Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users, UserType} from "./Users";

type UsersPropsType = {
    users: UserType[];
    pageSize:number,
    totalUsersCount:number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    currentPage:number
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalUsersCount:number)=>void
}
class UsersContainer extends React.Component<UsersPropsType, UserType[]> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items);
            })
    }


    render() {
        return <Users users={this.props.users} onPageChanged={this.onPageChanged} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers} currentPage={this.props.currentPage} setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);