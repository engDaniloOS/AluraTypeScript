export function logarTempoDeExecucao(){
    
    return function(target: any, key: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            console.log('------------------------------------');
            console.log(`Parâmetros passados para o método ${key}:${JSON.stringify(args)}`);

            const retorno = metodoOriginal.apply(this, args);
            
            console.log(`Retorno do método: ${JSON.stringify(retorno)}`);
            
            return retorno;
        }
    }
}