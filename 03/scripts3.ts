function imprimirTabuadas(numeros: number[]): void {
    numeros.forEach(numero => {
        console.log(`Tabuada de ${numero}:`);
        for (let i = 0; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        console.log('---------------');
    });
}

const numeros: number[] = [1, 5, 2];
imprimirTabuadas(numeros);