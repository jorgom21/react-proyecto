import React from "react";
import imgproducto from "../imagenes/producto.jpg";

function Inventario(){
    return(
        <div class="container mt-4">
                    <h2 class="mb-4">Inventario de Productos</h2>
                
                    
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Buscar productos..." aria-label="Buscar productos" aria-describedby="button-search"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-search">Buscar</button>
                    </div>


                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Agregar producto
                    </button>
                    
                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar producto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            
                                <div class="container mt-4">
                                    <h2 class="mb-4">Formulario de Producto</h2>

                                    <form>
                                        <div class="mb-3">
                                            <label for="nombreProducto" class="form-label">Nombre del Producto</label>
                                            <input type="text" class="form-control" id="nombreProducto" placeholder="Ingrese el nombre del producto" required/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="cantidad" class="form-label">Cantidad</label>
                                            <input type="number" class="form-control" id="cantidad" placeholder="Ingrese la cantidad" required/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="imagen" class="form-label">Seleccione una Imagen</label>
                                            <input type="file" class="form-control" id="imagen" name="imagen" accept="image/*" required/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="descripcion" class="form-label">Descripción</label>
                                            <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
                                        </div>

                                        <div class="mb-3">
                                            <label for="valorCompra" class="form-label">Valor de Compra</label>
                                            <input type="number" class="form-control" id="valorCompra" placeholder="Ingrese el valor de compra" required/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="valorVenta" class="form-label">Valor de Venta</label>
                                            <input type="number" class="form-control" id="valorVenta" placeholder="Ingrese el valor de venta" required/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="proveedor" class="form-label">Proveedor</label>
                                            <input type="text" class="form-control" id="proveedor" placeholder="Ingrese el nombre del proveedor" required/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div class="mb-3">
                        <button class="btn btn-primary">Imprimir Listado</button>
                        <button class="btn btn-success">Exportar a Excel</button>
                    </div>
                
                    <div class="btn-group mb-3" role="group">
                        <button type="button" class="btn btn-secondary">Lista</button>
                        <button type="button" class="btn btn-secondary">Cuadrícula</button>
                    </div>
                
                    <div class="row row-cols-1 row-cols-md-5 g-4">

                        <div class="col">
                            <div class="card">
                                <img src={imgproducto} class="card-img-top img-fluid" alt="Producto 1"/>
                                <div class="card-body">
                                    <h5 class="card-title">Código: 001</h5>
                                    <p class="card-text">Nombre: Producto 1</p>
                                    <p class="card-text">Precio: $20.00</p>
                                    <p class="card-text">Cantidad: 50</p>
                                    <a href="#" class="btn btn-primary">Editar</a>
                                </div>
                            </div>
                        </div>
                

                        <div class="col">
                            <div class="card">
                                <img src={imgproducto} class="card-img-top img-fluid" alt="Producto 2"/>
                                <div class="card-body">
                                    <h5 class="card-title">Código: 002</h5>
                                    <p class="card-text">Nombre: Producto 2</p>
                                    <p class="card-text">Precio: $15.00</p>
                                    <p class="card-text">Cantidad: 30</p>
                                    <a href="#" class="btn btn-primary">Editar</a>
                                </div>
                            </div>
                        </div>


                        <div class="col">
                            <div class="card">
                                <img src={imgproducto} class="card-img-top img-fluid" alt="Producto 3"/>
                                <div class="card-body">
                                    <h5 class="card-title">Código: 003</h5>
                                    <p class="card-text">Nombre: Producto 1</p>
                                    <p class="card-text">Precio: $20.00</p>
                                    <p class="card-text">Cantidad: 50</p>
                                    <a href="#" class="btn btn-primary">Editar</a>
                                </div>
                            </div>
                        </div>
                
                        <div class="col">
                            <div class="card">
                                <img src={imgproducto} class="card-img-top img-fluid" alt="Producto 4"/>
                                <div class="card-body">
                                    <h5 class="card-title">Código: 004</h5>
                                    <p class="card-text">Nombre: Producto 2</p>
                                    <p class="card-text">Precio: $15.00</p>
                                    <p class="card-text">Cantidad: 30</p>
                                    <a href="#" class="btn btn-primary">Editar</a>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                <img src={imgproducto} class="card-img-top img-fluid" alt="Producto 5"/>
                                <div class="card-body">
                                    <h5 class="card-title">Código: 005</h5>
                                    <p class="card-text">Nombre: Producto 1</p>
                                    <p class="card-text">Precio: $20.00</p>
                                    <p class="card-text">Cantidad: 50</p>
                                    <a href="#" class="btn btn-primary">Editar</a>
                                </div>
                            </div>
                        </div>
                
                        <div class="col">
                            <div class="card">
                                <img src={imgproducto} class="card-img-top img-fluid" alt="Producto 6"/>
                                <div class="card-body">
                                    <h5 class="card-title">Código: 006</h5>
                                    <p class="card-text">Nombre: Producto 2</p>
                                    <p class="card-text">Precio: $15.00</p>
                                    <p class="card-text">Cantidad: 30</p>
                                    <a href="#" class="btn btn-primary">Editar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Inventario