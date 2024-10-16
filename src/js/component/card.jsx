import React from "react"

export function Card({title, description, imagen }) {
    return (
        <div className="card text-center" >
            <div className="card-body" >
                <img className="card-img-top" src={imagen} alt="500 x 325" w-100 />
                <h5 className="card-title">{title}</h5>
                <p className="card-text" > {description}</p>
                <div class="card-footer">
                    <a href="#" className="btn btn-primary" >Me interesa!</a>
                </div>
            </div>
        </div>
    );
};