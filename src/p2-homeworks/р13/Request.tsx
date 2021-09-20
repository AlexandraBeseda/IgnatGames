import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "./api/RequestsAPI";

export const Request = () => {

    const [check, setCheck] = useState(false)
    console.log(check)

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    const postNewSuccess = () => {
        requestAPI.createHW(check).then(response => console.log(response));
    }

    return (<div>
        <SuperButton onClick={postNewSuccess}>Click</SuperButton>
        <div>
            <input checked={check} type="checkbox" name={"what?"} onChange={onChangeCheckbox}/>
        </div>
    </div>);
}