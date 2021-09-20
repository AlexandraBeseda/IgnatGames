import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "./api/RequestsAPI";

export const Request = () => {

    const [check, setCheck] = useState(false);
    const [data, setData] = useState("");
    console.log(check)

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    const postNewSuccess = () => {
        requestAPI.createHW(check)
            .then(response => {
                console.log(response.data);
                setData(response.data.info)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setData(error.response.data.errorText)
            });
    }

    return (
        <div>
            <SuperButton onClick={postNewSuccess}>Click</SuperButton>
            <span>
                <input checked={check} type="checkbox" name={"what?"} onChange={onChangeCheckbox}/>
            </span>
            <div>
                {data}
            </div>
        </div>);
}