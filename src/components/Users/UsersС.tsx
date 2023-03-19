import React from "react";
import s from "./Users.module.css";
import userPhoto from "../assets/UserPhoto.jpg";
import axios from "axios";

export type UserType = {
    name: string
    id: number
    followed: boolean
    uniqueUrlName: string | null
    "photos": {
        small: null | string,
        large: null | string
    }
    "status": null,
}

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

class UserC extends React.Component<UsersPropsType, UserType[]> {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = [];
        for (let i = 1; i<=pagesCount;i++){
            pages.push(i)
        }
        return <div>
            <div className={s.currentPages}>
                {pages.map(el=>{
                    return <span className={this.props.currentPage===el?s.selectedPage:''}
                                 onClick={(e)=>{this.onPageChanged(el)}}>{el}</span>
                })}

            </div>
            {
                this.props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unfollow(el.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default UserC