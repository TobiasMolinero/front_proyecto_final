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

export const formatearMoneda = (value: string) => {
    const valorNumerico = parseFloat(value.replace(/[^0-9]/g, ''));

    if (!isNaN(valorNumerico)) {
        return value = conversionMoneda(valorNumerico);
    } else {
        return value = '';
    }
};

let conversionMoneda = (value: number) => {
    let valorFormateado: string = (value / 100).toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });

    return valorFormateado;
};