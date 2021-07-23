import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.main}>
            <div className={s.text}>404</div>
            <div className={s.hitFloor}>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
