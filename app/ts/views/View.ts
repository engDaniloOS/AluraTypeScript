export abstract class View<T>{

    private _elemento: JQuery;

    protected constructor(seletor: string){
        this._elemento = $(seletor);
    }

    update(modelo: T): void{
        this._elemento.html(this.template(modelo));
    }

    protected abstract template(model: T): string;
}