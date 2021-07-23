import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>,//он уже отсортирован
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (_id: number) => void,// я предполагаю
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');//здесь мы передаем данные в функцию из пропсов!
    }
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter("middle");
    }
    const setLow = () => {
        props.setFilter('low');
    }

    return (
        <div>
            <div>
                {mappedAffairs}
            </div>

            <div className={s.buttons}>
                <button className={s.element} onClick={setAll}>All</button>
                <button className={s.element} onClick={setHigh}>High</button>
                <button className={s.element} onClick={setMiddle}>Middle</button>
                <button className={s.element} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
