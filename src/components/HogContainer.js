import React, { Component } from 'react'
import HogCard from './HogCard'

export default class HogContainer extends Component {

    renderHogCards = () => {
        return this.props.hogs.map((hog, index) => {
            return < HogCard className='ui eight wide column' key={index} hog={hog} />
        })
    }

    render() {
        console.log(this.props.hogs)
        return (
            <div className='ui grid container'>
                {this.renderHogCards()}
            </div>
        )
    }
}
