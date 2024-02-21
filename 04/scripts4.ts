function gerarEtiquetas(infoEtiqueta: { produto: string, lote: number, ano: number, qtd: number }): string[] {
    const etiquetas: string[] = [];
    const { lote, ano, qtd } = infoEtiqueta;

    for (let i = 1; i <= qtd; i++) {
        const numeroEtiqueta = i.toString().padStart(3, '0'); 
        const etiqueta = `${lote}-${ano}-${numeroEtiqueta}`;
        etiquetas.push(etiqueta);
    }

    return etiquetas;
}

const infoEtiqueta = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
};

const etiquetasGeradas: string[] = gerarEtiquetas(infoEtiqueta);
console.log(etiquetasGeradas);