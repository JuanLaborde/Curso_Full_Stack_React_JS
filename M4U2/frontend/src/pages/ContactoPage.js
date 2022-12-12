import React from 'react';
import '../styles/components/pages/ContactoPage.css';
const ContactoPage = (props) => {
    return (
        <main className = "holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className ="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value ="Enviar"/>

                    </p>
                </form>
            </div>
            <div className ="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios.</p>
                <ul>
                    <li>Telefono: 43242388</li>
                    <li>Email: contacto@transportex.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;