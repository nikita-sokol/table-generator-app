import React from 'react';
import Row from "./Row";
import RowEmpty from "./RowEmpty";
import {observer} from "mobx-react-lite";
import TableBtns from "./TableBtns";

const Table = observer((props) => {
    const rows = props.infoTable.rows;
    return (
        <div className="table-wrap">
            <TableBtns typeTable={props.typeTable} rowId={props.rowId} infoTable={props.infoTable}/>

            <table className='table'>
                <thead>
                    <tr className='table__row-header'>
                        <th className='table__th'>Name</th>
                        <th className='table__th'>Surname</th>
                        <th className='table__th'>Age</th>
                        <th className='table__th'>City</th>
                        <th className='table__th'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (rows.length > 0) ? rows.map(row => {
                            return <Row key={row.id} row={row} typeTable={props.typeTable} tableId={props.infoTable.id}/>
                        }) : <RowEmpty />
                    }
                </tbody>
            </table>
        </div>
    );
});

export default Table;
