import React from "react"

export function Jumbotron() {
    return (
        <div className="Jumbo">
            <div className="container fluid jumbotron bg-light">
                <h1 className="display-4">BIENVENIDOS!</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem dolores dolor molestiae neque esse obcaecati veniam voluptatibus eius, dolorem quasi omnis nostrum, dolorum autem magni illo provident explicabo ducimus!</p>
                <a className="btn btn-primary btn-md mb-5" href="#" role="button">Comenzemos!!</a>
            </div>
        </div>
    );
};