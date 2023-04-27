import React from 'react'
import './Comments.css'

export default function Comments() {
    return (
        <div className="comments bg-light row m-3 ">
            <h5>Comments</h5>
            <div className="input-group flex-nowrap m-3">
                <input type="search" className="form-control me-5" placeholder="Write Comments" aria-label="Comments" aria-describedby="addon-wrapping" />
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title cardTitle">Matteda Ramesh</h5>
                    <p className="card-text cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title cardTitle">Matteda Ramesh</h5>
                    <p className="card-text cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title cardTitle">Matteda Ramesh</h5>
                    <p className="card-text cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title cardTitle">Matteda Ramesh</h5>
                    <p className="card-text cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                
            </div>
        </div>
    )
}
