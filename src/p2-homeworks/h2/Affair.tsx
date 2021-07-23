import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // +
    deleteAffairCallback: (_id: number) => void // +
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id);}
    //+вызываем из пришедших свойств метод  deleteAffairCallback, который принимает на вход id  array

    return (
        <div className={s.someClass}>
            <div className={s.element}>{props.affair.name}</div>
            <div className={s.element}>[{props.affair.priority}]</div>
            <button className={s.element} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
