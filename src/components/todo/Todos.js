import React, { useState } from "react";
import { todoData } from "../../helpers/data";

const Todos = () => {
    const [objArray, setObjArray] = useState(todoData)
    const [inputValue, setInputValue] = useState('')
    const inputChange = (event) => {
        setInputValue(event.target.value)
    }
    const addObjectToArray = () => {
        if (inputValue.trim() !== '') {
            const newObj = { id:todoData.length + 1, name:inputValue }
            setObjArray([...objArray, newObj])
            console.log(objArray, '0')
            setInputValue('')
        }
    }
    const mappedArray = todoData.map(({ user }) => { return <p key={user.id}> {user} </p> })

    return (
        <div className="todo-container">
            <div>{mappedArray}</div>
                <input
                    type="text"
                    placeholder="Enter a name"
                    value={inputValue}
                    onChange={inputChange}
                />
                <button type="submit" class="btn btn-primary" onClick={addObjectToArray}>Submit</button>
        </div>
    )
}

export default Todos;