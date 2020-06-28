import { logarTempoDeExecucao } from '../helpers/index';

export abstract class View<T>{

    protected _elemento: JQuery;
    private _escapar: boolean;

    protected constructor(seletor: string, escapar: boolean = false){
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(modelo: T): void{
        let template = this.template(modelo);

        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }
 
    protected abstract template(model: T): string; 
}