import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../h10/bll/store";
import {changeTheme} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some', 'yellow', 'pink', 'nava'];

function HW12() {
    const theme = useSelector((state) => store.getState().themeReducer.theme);
    const dispatch = useDispatch();

    const onChangeCallback1 = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeTheme(e.currentTarget.value))
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTheme(e.currentTarget.value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                value={theme}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    onChangeCallback1(e)
                }}

            />

            <SuperRadio
                name={'themes'}
                options={themes}
                value={theme}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChangeCallback2(e)
                }}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
