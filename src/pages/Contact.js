import React from 'react'

function Contact() {
    return (
        <div>
            <h1 className="display-3 text-center">İletişim</h1>
            <hr />
            <ul className="list-group text-center mx-auto h5 my-5" style={{ width: "40%" }}>
                <li className="list-group-item active"><i className="fas fa-check-circle mx-1"></i>Site : <a href="https://furkancakici.github.io/" target="_blank" className="text-light" >furkancakici.github.io (All Contact)</a> </li>
                <li className="list-group-item active"><i className="fas fa-check-circle mx-1"></i>Mail : furkancakici25@gmail.com</li>

            </ul>

        </div>
    )
}

export default Contact
