import React, {useRef} from 'react';
import Form from "./Form";
import Table from "./Table";
import serviceTable from "../store/serviceTable";
import {observer} from "mobx-react-lite";
import {useInput} from "../hooks/useInput";
import Modal from "./Modal";

const TableGenerator = observer(() => {
    const rowId = useRef(1)

    const inputName = useInput('', {isEmpty: true, minLength: 3, maxLength: 15, inputName: 'name'})
    const inputSurname = useInput('', {isEmpty: true, minLength: 3, maxLength: 15, inputName: 'surname'})
    const inputAge = useInput('', {isEmpty: true, maxLength: 30, inputName: 'age'})
    const inputCity = useInput('', {isEmpty: true, inputName: 'city'})

    const handleSubmit = (event) => {
        const row = {
            id: rowId.current,
            name: inputName.value,
            surname: inputSurname.value,
            age: inputAge.value,
            city: inputCity.value
        }
        serviceTable.addRow(row)
        rowId.current++

        inputName.changeValue('')
        inputSurname.changeValue('')
        inputAge.changeValue('')
        inputCity.changeValue('')

        event.preventDefault()
    }

    return (
        <div className='wrap'>
            <Modal />
            <div className="wrap-forms">
                <Form name={inputName} surname={inputSurname} age={inputAge} city={inputCity} onSubmit={handleSubmit} submitName='ADD'/>
                <Form name={inputName} surname={inputSurname} age={inputAge} city={inputCity} onSubmit={handleSubmit} submitName='ADD'/>
            </div>
            <Table rowId={rowId} key='serviceTable' typeTable='sourceTable' infoTable={serviceTable.sourceTable} />
            {
                serviceTable.newTables.map(table => {
                    return <Table key={table.id} infoTable={table} typeTable='newTable'/>
                })
            }
        </div>
    );
});

export default TableGenerator;
