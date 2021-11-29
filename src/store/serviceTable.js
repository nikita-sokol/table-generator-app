import {action, makeAutoObservable, makeObservable, observable} from "mobx";

class ServiceTable {
    sourceTable = {
        id: 1,
        rows: []
    }
    newTables = [
        // {
        //     id: 1,
        //     rows: []
        // }
    ]

    constructor() {
        makeAutoObservable(this);
        // makeObservable(this, {
        //     sourceTable: observable,
        //     newTables: observable,
        //     addRow: action.bound,
        //     editRow: action.bound,
        //     removeRow: action.bound,
        //     copyTable: action.bound,
        //     removeTable: action
        // }, {
        //     deep: true
        // });
    }

    addRow (row) {
        this.sourceTable.rows.push(row);
    }

    editRowSourceTable (tableId, editedRow) {
        this.sourceTable.rows.forEach((row,rowInd) => {
            if (row.id === editedRow.id) {
                this.sourceTable.rows[rowInd] = {...editedRow};
            }
        });
    }

    editRowNewTable (tableId, editedRow) {
        this.newTables.forEach((table, tableInd) => {
            if (table.id === tableId) {
                table.rows.forEach((row,rowInd) => {
                    if (row.id === editedRow.id) {
                        this.newTables[tableInd].rows[rowInd] = {...editedRow};
                    }
                });
            }
        });
    }

    removeSourceRow (removeRowId) {
        this.sourceTable.rows.forEach((row,i) => {
            if (row.id === removeRowId) {
                this.sourceTable.rows.splice(i,1)
            }
        });
    }

    removeNewRow (tableId, removeRowId) {
        this.newTables.forEach((table, tableInd) => {
            if (table.id === tableId) {
                table.rows.forEach((row,rowInd) => {
                    if (row.id === removeRowId) {
                        this.newTables[tableInd].rows.splice(rowInd,1)
                    }
                });
                if (!table.rows.length) {
                    this.newTables.splice(tableInd,1)
                }
            }
        });
    }

    copySourceTable() {
        this.newTables.push({...this.sourceTable})
        this.sourceTable.id++
        this.sourceTable.rows = [];
    }

    copyNewTable(table) {
        this.newTables.push({...table, id: this.sourceTable.id})
        this.sourceTable.id++
    }

    removeTable(removeTableId) {
        this.newTables.forEach((table,i) => {
            if (table.id === removeTableId) {
                this.newTables.splice(i,1)
            }
        });
    }
}

export default new ServiceTable();
