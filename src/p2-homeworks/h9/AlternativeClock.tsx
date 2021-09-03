import React, {useEffect, useState} from 'react'

function AlternativeClock() {

    const [date, setDate] = useState<Date>(new Date())


    useEffect(() => {
        console.log("UseUffect render everytime");
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        //обязательно!
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const stringTime = date.toLocaleTimeString();
    return (
        <div>
            {stringTime}
        </div>
    )
}

export default AlternativeClock
