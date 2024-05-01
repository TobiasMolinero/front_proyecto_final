export const mascaraDni = (dni: any) => {
    const valor = dni.replace(/\D/g, '');
    const tienePuntos = /\./.test(valor);
    if (!tienePuntos && valor.length === 8) {
        let primeraParte = valor.slice(0, 2);
        let segundaParte = valor.slice(2, 5);
        let terceraParte = valor.slice(5);
        return `${primeraParte}.${segundaParte}.${terceraParte}`;
    }
    return valor;
}
