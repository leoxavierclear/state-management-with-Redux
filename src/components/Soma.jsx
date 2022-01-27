
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Soma (props) {
    const {min, max} = props
    return(
        <Card title="Soma dos Números" blue>
            <div>
                <span>Resultado: </span>
                <strong>{(min + max)}</strong>
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

export default connect(mapStateToProp)(Soma)