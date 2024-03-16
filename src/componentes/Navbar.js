import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <button class="navbar-toggler btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="bi bi-list"></span>
            </button>

            <div class="container-fluid">
            <div class="row">
                
                
                <nav id="sidebar" class="collapse col-md-3 col-lg-2 d-md-block sidebar">
                    <div class="position-sticky">
        

                        <ul class="nav flex-column">
                        <li class="nav-item">
                            <Link to= "/" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Inicio
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/vender" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Vender
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/inventario" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Inventario
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/proveedores" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Proveedores
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/clientes" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Clientes
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/reportes" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Reportes
                            </Link>
                        </li>
                        </ul>

                        

                        <hr class="my-3"/>

                        <ul class="nav flex-column mb-auto">
                        <li class="nav-item">
                            <Link to="/ajustes" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Ajustes
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/salir" class="nav-link d-flex align-items-center gap-2 text-dark">
                            Salir
                            </Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <div class= "col-md-9 col-lg-10">
                    <Outlet/>
                </div>    
            </div>
            </div>  
        </div>
    );
}
export default Navbar