import React from 'react'

export default function HogCard({ hog }) {
    handleClick = () => {
        
    }
    return (
        <div className='ui eight wide column'>
            <img src='https://i.chzbgr.com/full/4222843392/h6C340619/' />
            <p>Name: {hog.name}</p>
            <section onClick={this.handleClick} className={}>
                <p>Specialty: {hog.specialty}</p>
                <p>Medal: {hog['highest medal achieved']}</p>
            </section>
        </div>
    )
}