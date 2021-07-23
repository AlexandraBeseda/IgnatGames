import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'; // + i fixed

export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
};  //+ id,name,priority

export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // +
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // +я предполагаю
    if (filter === 'all') return affairs;
    else return  affairs.filter(elem=>elem.priority===filter);

 // +
}
export const deleteAffair = (affairs:  Array<AffairType>, _id: number):  Array<AffairType> => { // need to fix any
    return affairs.filter(elem=>elem._id!==_id);// id массива не равно id пришедшему=true, остается
}

function HW2() {
    //это удаление
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // + fixed Array<AffairType>.сюда приходит первоначальное значение!
    //это сортировка по фильтру
    //когда мы отдаем в setFilter нвое значение filter
    //происходит перерисовка
    //в компоненту попадает новое значение data={filteredAffairs}
    const [filter, setFilter] = useState<FilterType>('all')
    //хранит значение отсортированного массива
    const filteredAffairs = filterAffairs(affairs, filter)
    //ошибка! передавала дефолтный массив, а не affairs

    //функция принимает id записи  и вызывает метод удаления из массива, устанавливается новое состояние

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id));

    } // +id number

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
