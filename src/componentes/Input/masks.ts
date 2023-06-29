export function cep(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    //remove caracteres não numericos
    value = value.replace(/\D/g, '');
    //aplica ao primeiro bloco o - após 5 números digitados
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    e.currentTarget.value = value;
    return e;
}

export function phone(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    e.currentTarget.maxLength = 11;
    const numerosFormatados = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const regex = /(\d{2})(\d{5})(\d{4})(?=(\d{11})*$)/g; // Regex para capturar grupos de 11 dígitos
    value = numerosFormatados.replace(regex, '($1) $2-$3')
    e.currentTarget.value = value;
}