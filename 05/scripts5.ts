function soletrar(nome: string): string {
    return nome.split('').join('-');
}

const nome: string = 'programador';
const nomeSoletrado: string = soletrar(nome);
console.log(nomeSoletrado); 