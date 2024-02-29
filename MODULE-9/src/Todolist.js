import React, { useState } from 'react'
import Addtodo from './Addtodo'
import Tasklist from './Tasklist';

const wholedata = [
    { "title": "hardik", num: 1 },
    { "title": "rhea", num: 2 },
    { "title": "sakshee", num: 3 }
]
let nextid = 4;
function Todolist() {
    const [data, setdata] = useState(wholedata);
    const handleadd = (x) => {
        setdata(
            [
                ...data,
                {
                    "title": x,
                    num: nextid++
                }
            ]
        )
    }
    const handlechange = (nextid1)=>{
        setdata(
            data.map((data1)=>{
                if (data1.id==nextid1.id) {
                    return nextid1;
                } else {
                    return data1;
                }
            })
        )

    }
    const handledelete=(dataid)=>{
        setdata(
            data.filter((todo)=>{
                return todo.id !== dataid; 
            })
        )
    }
    return (
        <div>
            <Addtodo onAdd={handleadd} />
            <Tasklist todos={data} onchange={handlechange} ondelete={handledelete}/>
        </div>
    )
}

export default Todolist
