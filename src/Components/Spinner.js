import React, { Component } from 'react'
import loading from '../img/loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <>
            <div className="text-center my-3">
                <img height="50" src={loading} alt="Spinner"/>
            </div>
            </>
        )
    }
}
