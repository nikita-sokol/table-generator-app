import React from 'react';
import serviceTable from "../store/serviceTable";
import {observer} from "mobx-react-lite";

const TableBtns = observer( (props) => {
    const copyTabel = () => {
        if (props.typeTable === 'sourceTable') {
            if (serviceTable.sourceTable.rows.length) {
                serviceTable.copySourceTable()
                props.rowId.current = 1
            } else {
                alert('Таблица не должна быть пустой!')
            }
        } else if (props.typeTable === 'newTable')  {
            serviceTable.copyNewTable(props.infoTable)
        }
    }
    const removeTabel = () => {
        if (props.typeTable === 'sourceTable') {
            alert('Исходная таблица не может быть удалена')
        } else if (props.typeTable === 'newTable')  {
            serviceTable.removeTable(props.infoTable.id)
        }
    }

    return (
        <div className="table-btns">
            <button className='table-btns__copy-table button' onClick={copyTabel}>Copy table</button>
            <button className='table-btns__cross cross' onClick={removeTabel}></button>
        </div>
    );
});

export default TableBtns;
