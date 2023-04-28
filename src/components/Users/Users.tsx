import s from "./Users.module.css";
import {UserCard} from "./UserCard/UserCard";
import React, {FC} from "react";
import {UsersType} from "../../bll/types";
import {CustomPagination} from "../common/CustomPagination/CustomPagination";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    setFollowTC: (userID: number) => void
    setUnFollowTC: (userID: number) => void
    onPageChanged: (pageNumber: number) => void

}
export const Users: FC<UsersPropsType> = ({users,
                                              totalUsersCount,
                                              onPageChanged, currentPage,
                                              pageSize,
                                              setFollowTC,
                                              setUnFollowTC,
                                              followingInProgress}) => {
    return (
        <div className='content'>

            <div className={s.usersContainer}>
                <div className={s.sidebar}>
                </div>
                <div className={s.usersCards}>
                    <CustomPagination currentPage={currentPage}
                                      totalUsersCount={totalUsersCount}
                                      pageSize={pageSize}
                                      onPageChanged={onPageChanged}/>
                    {
                        users.map(elem => <UserCard key={elem.id}
                                                       userInfo={elem}
                                                       followingInProgress={followingInProgress}
                                                       setFollowTC={setFollowTC}
                                                       setUnFollowTC={setUnFollowTC}/>)
                    }
                </div>
            </div>

        </div>
    )
}