import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Users, UserType} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UserType[];
    pageSize: number,
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersPropsType, UserType[]> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
            usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            })
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
                       setUsers={this.props.setUsers}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUsersCount}/>}
        </>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);