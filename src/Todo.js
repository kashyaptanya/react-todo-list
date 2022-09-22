import React, { useState } from "react";
import App from "./App.css";
import Dialog from "./Dialog";


const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItem] = useState([])
    const [submit, setSubmit] = useState(true)
    const [save, setSave] = useState(null)
    const [dialog, seDialog] = useState({
        popbox: false
    })

    const [currentElement, setCurrentElement] = useState(null)

    const addItem = () => {
        if (!inputData) {

        }
        else if (inputData && !submit) {
            setItem(
                items.map((element) => {
                    if (element.id === save) {
                        return { ...element, name: inputData }
                    }
                    return element
                })
            )
            setSubmit(true)
            setInputData('')
            setSave(null)
        }
        else {
            const allData = { id: Math.random(), name: inputData }
            setItem([...items, allData])
            setInputData('')
        }

    }
    const editItem = (id) => {
        let editClick = items.find((element) => {
            return element.id === id

        });
        console.log("clickedit", editClick)
        setSubmit(false)
        setInputData(editClick.name)
        setSave(id)
    }
    const deleteItem = (element) => {
        seDialog({
            popbox: true

        })
        console.log(element)
        setCurrentElement(element)
    }

    const handleCancel = () => {
        seDialog({
            popbox: false

        })
    }

   




    const uwantdlt = (element) => {
        console.log(element)
        const sort = items.filter((e) => {
            return element.id !== e.id
        })
        setItem(sort)
        setInputData('')
        setSubmit(true)
        seDialog({

            popbox: false

        })

    }


    const dltall = () => {
        setItem([])
        setInputData('')
        setSubmit(true)

    }

    return (
        <>
            <div className="container mt-3">
                <div className="logo text-center">
                    <h1 className="h">TODO-LIST APPPLICATION</h1>
                </div>
                <div className="row m-5 border">
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="Enter your task" value={inputData} onChange={(e) => setInputData(e.target.value)} />

                    </div>

                    <div className="col-md-2">
                        {
                            submit ? <button type="button" className="btn btn-success b1 " onClick={addItem} >Add task</button> : <button type="button" className="btn btn-success b1" onClick={addItem}>Edit</button>
                        }

                    </div>
                    <div class="col-md-2">
                        <button type="button" className="btn btn-danger b2" onClick={dltall} >Delete all</button>
                    </div>
                    <table className="table table-striped text-center mt-5">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Task</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Trash<i class="fa-solid fa-pen-to-square"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((element, index) => (
                                    <tr key={element.id}>
                                        <td>{index + 1}</td>
                                        <td>{element.name}</td>
                                        <td><button type="button" className="btn btn-primary but" onClick={() => editItem(element.id)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger but" onClick={() => deleteItem(element)}>Delete</button></td>

                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {dialog.popbox && <Dialog onClose={uwantdlt} handleCancel={handleCancel} element={currentElement} />}
        </>
    )
}
export default Todo;