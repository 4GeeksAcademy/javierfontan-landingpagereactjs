import React from "react"

export function Card({ title, image}) {
    return (
        <div className="card text-center" >
            <div className="card-body" >
                <img className="card-img-top" src="https://img.freepik.com/fotos-premium/chica-sonriente-mirando-computadora-portatil-mientras-estudia-biblioteca_1048944-22474512.jpg?w=1380" alt="500 x 325" w-100 />
                <h5 className="card-title">{title}</h5>
                <p className="card-text" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maiores, porro minima commodi libero rem assumenda impedit autem blanditiis adipisci quisquam saepe voluptatibus quasi reprehenderit accusamus obcaecati reiciendis, praesentium iste?</p>
                <div class="card-footer">
                    <a href="#" className="btn btn-primary" >Me interesa!</a>
                </div>
            </div>
        </div>
    );
};