import React, { useEffect } from "react";
import {  useDispatch,useSelector } from "react-redux";
import actions from "../redux/users/actions";
import unregisteredUserActions from '../redux/unregistereduser/actions';
import projectMembershipActions from '../redux/projectmembership/actions';

export default function RegisteredUserReducer(){
    
    const dispatch = useDispatch();

    const RegisteredUsers = useSelector(
        (state) => state.registeredUserReducer
    );
        console.log(RegisteredUsers)

    const UnregisteredUsers = useSelector(
        (state) => state.unregisteredUserReducer
    )
        console.log(UnregisteredUsers)

    const ProjectMembership = useSelector(
        (state) => state.projectMemberships
    )
        console.log(ProjectMembership)

    useEffect(()=>{
        dispatch({type:actions.GET_ALL_USERS});
        dispatch({ type : unregisteredUserActions.GET_ALL_UNREGISTEREDUSER});
        dispatch({ type : projectMembershipActions.GET_ALL_PROJECTMEMBERSHIP});
    },[])
   
    return(
        <div>
            {RegisteredUsers.registeredUsers.map((user)=>
                <div key={user.id}>{user.city}</div>
            )}
        </div>
    )
}