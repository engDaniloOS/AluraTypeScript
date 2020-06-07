export class Negociacao{

    //#region Construtor
    constructor(private _data: Date, private _quantidade: number, private _valor: number){ }
    //#endregion
  
    //#region Geters 
    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
    //#endregion

    get volume(){
        return this._quantidade * this._valor;
    }
}