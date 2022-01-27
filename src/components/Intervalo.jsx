import './Intervalo.css'

import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarMin, alterarMax } from '../store/actions/numeros'

function Intervalo(props) {

    const { min, max } = props
    
    return(
        <Card title="Intervalo de Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                        onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
           
        </Card>
    )
}

function mapStateToProp(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero){
            const action = alterarMin(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(Intervalo)