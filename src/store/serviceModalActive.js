import {makeAutoObservable} from "mobx";

class ServiceModalActive {
    active = false;
    rowInfo = {
        typeTable: '',
        tableId: '',
        rowId: ''
    }

    constructor() {
        makeAutoObservable(this);
    }

    makeActive (tableId,rowId,typeTable) {
        this.active = true;
        this.rowInfo.typeTable = typeTable;
        this.rowInfo.tableId = tableId;
        this.rowInfo.rowId = rowId;
    }

    makeInactive () {
        this.active = false;
    }
}

export default new ServiceModalActive();
