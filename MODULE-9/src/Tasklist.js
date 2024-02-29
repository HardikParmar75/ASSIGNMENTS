import React, { useState } from 'react'

function Tasklist({ todos, onchange, ondelete }) {
    return (
        <div>
            {todos.map((t) => (
                <div key={t.id}>
                    <p><Task1 todo={t} onch={onchange} ondel={ondelete}>    </Task1></p>
                </div>
            ))}
        </div>
    )
}

export default Tasklist

function Task1({ todo, onch, ondel }) {
    const [edit, setedit] = useState(false)
    let content;
    if (edit) {
        content = <>
            <input type="text" name="" value={todo.title} onChange={(e) => {
                onch({
                    ...todo,
                    title: e.target.value
                })
            }} />
            <button onClick={() => { setedit(false) }}>Save</button>
        </>
    } else {
        content = <>
            {todo.title}
            <button onClick={() => { setedit(true) }}>Edit</button>
        </>
    }
    return (
        <div>
            {content}
            <button onClick={() => { ondel(todo.id) }}>Delete</button>
        </div>
    )
}