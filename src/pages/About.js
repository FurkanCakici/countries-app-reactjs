import React, { Component } from 'react'

export class About extends Component {

    render() {
        return (
            <div>
                <h1 className="display-3 text-center">Uygulama Hakkında</h1>
                <hr />
                <p className="h3 my-4 text-center">50 den fazla ülke hakkında özet bilgiler sunan bir uygulamadır kendileri..</p>
                <ul className="list-group text-center mx-auto h5 my-5" style={{ width: "40%" }}>
                    <li className="list-group-item active">Neler Kullandım</li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>ReactJs</li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>ReactJs Router</li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>Axios</li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>Rest Contruies <a href="https://restcountries.eu/" target="_blank">(Link)</a> </li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>Font Awesome</li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>Bootstrap 4</li>
                    <li className="list-group-item"><i className="fas fa-check-circle mx-1"></i>Gh-pages deploy</li>
                </ul>
            </div>
        )
    }
}

export default About















