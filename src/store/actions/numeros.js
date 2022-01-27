


//action creator 
export function alterarMin(novoNumero) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

export function alterarMax(novoNumero) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}