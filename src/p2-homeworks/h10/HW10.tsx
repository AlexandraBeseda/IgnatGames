import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loader from "./assets/images/Spinner-1s-200px.svg";

function HW10() {
    // useSelector, useDispatch

    const dispatch = useDispatch();
    //const loading = false

    let loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const setLoading = () => {
        dispatch(loadingAC(true));

        setTimeout(() => dispatch(loadingAC(false)), 3000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={loader} alt={"loader"}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
