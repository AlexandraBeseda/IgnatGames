import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        const isNameEmpty = e.currentTarget.value.trim();




        if (isNameEmpty) {//тру т.е. есть какие то буквы
            setName(isNameEmpty);

            setError('');//true чета там было до этого и установить пустое поле
        } else {
            setName('');
            setError("Вы ничего не ввели!")
        }
    }
//замыкание ---- ничего передавать не надо
    //мы берем значение из usestate
    const addUser = () => {
        if (name) {
            addUserCallback(name);
            alert(`Hello  ${name}!`) // need to fix
            setName('');
        }else {
            setError("Вы ничего не ввели!")
        }
    }

    const totalUsers = users.length; // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
