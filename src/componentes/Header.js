import React from 'react';

function Header() {
    return(
        <nav class="navbar navbar-expand-lg header">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img class="logo" src={require('../imagenes/logo.png')} alt="Logo"/>
            </a>
            <h1>HOGAR DEL MUEBLE</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               
                <div class="d-flex ms-auto">
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Usuario
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Perfil</a></li>
                            <li><a class="dropdown-item" href="#">Configuracion</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="login.html">Salir</a></li>
                            </ul>
                        </div>
                        <img class="user" src={require('../imagenes/user.png')} alt="user"/>
                </div>
            </div>
        </div>
    </nav>
    );
}
export default Header