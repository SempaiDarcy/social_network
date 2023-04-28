import {UsersType} from "../../bll/types";
import {connect} from "react-redux";
import {
    getUsersTC,
    SetCurrentPageAC, setFollowTC, SetPageSizeAC, setUnFollowTC,

} from "../../bll/reducers/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount, getUserFollowingInProgress,
    getUsers,
    getUsersIsFetching
} from "../../bll/selectors/usersSelectors";
import {stateType} from "../../bll/redux-store";


type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchToPropsType = {
    setCurrentPage: (newCurrentPage: number) => void
    setPageSize: (pageSize: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    setFollowTC: (userID: number) => void
    setUnFollowTC: (userID: number) => void
}
type FindUsersProps = mapStateToPropsType & mapDispatchToPropsType


class FindUsersAPIComponent extends React.Component<FindUsersProps> { //React.Component<PROPS_Type, COMPONENT_LOCAL_STATE_Type>
    componentDidMount() {
        const {getUsersTC, currentPage, pageSize} = this.props
        getUsersTC(currentPage, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                {!this.props.isFetching && <Users users={this.props.users}
                                                  totalUsersCount={this.props.totalUsersCount}
                                                  pageSize={this.props.pageSize}
                                                  followingInProgress={this.props.followingInProgress}
                                                  onPageChanged={this.onPageChanged}
                                                  currentPage={this.props.currentPage}
                                                  setFollowTC={this.props.setFollowTC}
                                                  setUnFollowTC={this.props.setUnFollowTC}/>}
            </>
        )
    }

    onPageChanged = (newPageNumber: number, pageSize: number = 10) => {
        this.props.getUsersTC(newPageNumber, pageSize)
    }
}


const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getUsersIsFetching(state),
        followingInProgress: getUserFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps,
        {
            setCurrentPage: SetCurrentPageAC,
            setPageSize: SetPageSizeAC,
            getUsersTC: getUsersTC,
            setFollowTC: setFollowTC,
            setUnFollowTC: setUnFollowTC
        } as mapDispatchToPropsType))
(FindUsersAPIComponent)
