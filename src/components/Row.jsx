import React from 'react';
import {observer} from "mobx-react-lite";
import serviceModalActive from "../store/serviceModalActive";
import serviceTable from "../store/serviceTable";

const Row = observer( (props) => {
    const hendlerModalActive = () => {
        serviceModalActive.makeActive(props.tableId, props.row.id, props.typeTable);
    }
    const hendlerRemoveRow = () => {
        if (props.typeTable === 'sourceTable') {
            serviceTable.removeSourceRow(props.row.id);
        } else if (props.typeTable === 'newTable')  {
            serviceTable.removeNewRow(props.tableId, props.row.id);
        }
    }

    return (
        <tr className='table__row'>
            <td className='table__td'>{props.row.name}</td>
            <td className='table__td'>{props.row.surname}</td>
            <td className='table__td'>{props.row.age}</td>
            <td className='table__td'>{props.row.city}</td>
            <td className='table__td'>
                <div className='table__cell-btns'>
                    <a href='#' className='table__row-edit' onClick={hendlerModalActive}>Edit</a>
                    <a href='#' className='table__row-del' onClick={hendlerRemoveRow}>Delete</a>
                </div>
            </td>
        </tr>
    );
});

export default Row;
