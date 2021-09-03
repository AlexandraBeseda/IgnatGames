import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)
    console.log("VAlue1 "+value1)
    console.log("VAlue2 "+value2)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    setValue1={setValue1}
                    value={value1}
                    max={"100"}
                    min={"0"}
                    step={"1"}
                />
            </div>

            <div >
                <span>{value1}</span>

                <SuperDoubleRange
                    value={[value1, value2]}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    max={"100"}
                    min={"0"}
                    step={"1"}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
