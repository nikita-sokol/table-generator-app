import React, {useRef} from 'react';
import Form from "./Form";
import serviceModalActive from "../store/serviceModalActive";
import serviceTable from "../store/serviceTable";
import {observer} from "mobx-react-lite";
import {useInput} from "../hooks/useInput";

const Modal = observer((props) => {

    const update = useRef(true)

    const rowInfo = serviceModalActive.rowInfo;

    const inputName = useInput('', {isEmpty: true, minLength: 3, maxLength: 15, inputName: 'name'})
    const inputSurname = useInput('', {isEmpty: true, minLength: 3, maxLength: 15, inputName: 'surname'})
    const inputAge = useInput('', {isEmpty: true, maxLength: 30, inputName: 'age'})
    const inputCity = useInput('', {isEmpty: true, inputName: 'city'})

    if (update.current) {
        if (rowInfo.typeTable === 'sourceTable') {
            serviceTable.sourceTable.rows.forEach((row) => {
                if (row.id === rowInfo.rowId) {
                    inputName.changeValue(row.name)
                    inputSurname.changeValue(row.surname)
                    inputAge.changeValue(row.age)
                    inputCity.changeValue(row.city)
                    update.current = false
                }
            });

        } else if (rowInfo.typeTable === 'newTable') {
            serviceTable.newTables.forEach((table) => {
                if (table.id === rowInfo.tableId) {
                    table.rows.forEach((row) => {
                        if (row.id === rowInfo.rowId) {
                            inputName.changeValue(row.name)
                            inputSurname.changeValue(row.surname)
                            inputAge.changeValue(row.age)
                            inputCity.changeValue(row.city)
                            update.current = false
                        }
                    });
                }
            })
        }

    }

    const hendlerModalInactive = () => {
        serviceModalActive.makeInactive();
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const editedRow = {
            id: rowInfo.rowId,
            name: inputName.value,
            surname: inputSurname.value,
            age: inputAge.value,
            city: inputCity.value
        }
        if (rowInfo.typeTable === 'sourceTable') {
            serviceTable.editRowSourceTable(rowInfo.tableId, editedRow)
            serviceModalActive.makeInactive()
        } else if (rowInfo.typeTable === 'newTable') {
            serviceTable.editRowNewTable(rowInfo.tableId, editedRow)
            serviceModalActive.makeInactive()
        }
    }

    return (
        <div className={serviceModalActive.active ? 'modal modal_active' : 'modal'} onClick={hendlerModalInactive}>
            <div  className={serviceModalActive.active ? 'modal__content modal__content_active' : 'modal__content'} onClick={(e) => {e.stopPropagation()}}>
                <Form name={inputName} surname={inputSurname} age={inputAge} city={inputCity} onSubmit={handleSubmit} submitName='EDIT'/>
            </div>
        </div>
    );
});

export default Modal;
