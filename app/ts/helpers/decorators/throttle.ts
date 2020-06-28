export function throttle(milissegundos = 300) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {

            if(event) event.preventDefault();
            
            clearInterval(timer);
            
            //Apenas para métodos sem retorno
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }

        return descriptor;
    }
}