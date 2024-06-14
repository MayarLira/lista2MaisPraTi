function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;

    if (sexo === 'M') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === 'F') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        return 'Sexo inválido. Use M para masculino e F para feminino.';
    }

    return pesoIdeal;
}