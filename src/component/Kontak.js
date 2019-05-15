import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

class Kontak extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="col-md-5">
                    <h4>My Contact Info</h4>
                    <hr></hr>
                    <p>Kontak yang bisa anda hubungi</p>
                    <ul>
                        <FontAwesomeIcon icon={faHome} /> Terban, Yogyakarta
                    <br />
                        <br />
                        <FontAwesomeIcon icon={faPhone} /> +6212345678
                    <br />
                        <br />
                        <FontAwesomeIcon icon={faMailBulk} /> egaarya99@mail.ugm.ac.id
                    <br />
                        <br />
                        <FontAwesomeIcon icon={faGithub} /> hallowauror
                    <br />
                        <br />
                        <FontAwesomeIcon icon={faFacebook} />Ega Arya
                </ul>
                </div>
            </div >

        )
    }
}
export default Kontak;