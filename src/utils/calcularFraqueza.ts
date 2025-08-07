import { relacaoTipoFraq } from "../data/relacaoTipoFraq";

export function calcularFraqueza (types: string[]) : string[] {
    const fraquezas: string[] = [];

    for (const tipo of types) {
        const fraquezasDoTipo = relacaoTipoFraq[tipo];

        if(fraquezasDoTipo) {
            fraquezas.push(...fraquezasDoTipo);
        }
    }

    const fraquezasUnicas = Array.from(new Set(fraquezas));

    return fraquezasUnicas;
}