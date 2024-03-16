function Clientes(){
    return(
        <div class="container mt-4">
        <h2 class="mb-4">Clientes</h2>
    
       
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Buscar clientes..." aria-label="Buscar clientes" aria-describedby="button-search"/>
            <button class="btn btn-outline-secondary" type="button" id="button-search">Buscar</button>
        </div>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Agregar cliente
        </button>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar cliente</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                    <div class="container mt-4">

                        <form>
                            <div class="mb-3">
                                <label for="nombreProducto" class="form-label">Nombre completo</label>
                                <input type="text" class="form-control" id="nombreCliente" placeholder="Ingrese el nombre del cliente" required/>
                            </div>

                            <div class="mb-3">
                                <label for="cantidad" class="form-label">Identificación</label>
                                <input type="number" class="form-control" id="identificacion" placeholder="Ingrese la Identificación" required/>
                            </div>

                            <div class="mb-3">
                                <label for="cantidad" class="form-label">Telefono</label>
                                <input type="number" class="form-control" id="telefono" placeholder="Ingrese el telefono" required/>
                            </div>

                            <div class="mb-3">
                                <label for="proveedor" class="form-label">E-mail</label>
                                <input type="text" class="form-control" id="e-mail" placeholder="Ingrese el E-mail" required/>
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
    
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
           
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Código: 001</h5>
                        <p class="card-text">Nombre: Cliente 1</p>
                        <p class="card-text">Identificación: 123456789</p>
                        <p class="card-text">E-mail: cliente1@example.com</p>
                        <p class="card-text">Teléfono: 123-456-7890</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </div>
    
            
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Código: 002</h5>
                        <p class="card-text">Nombre: Cliente 2</p>
                        <p class="card-text">Identificación: 987654321</p>
                        <p class="card-text">E-mail: cliente2@example.com</p>
                        <p class="card-text">Teléfono: 987-654-3210</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </div>

            
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Código: 003</h5>
                        <p class="card-text">Nombre: Proveedor 3</p>
                        <p class="card-text">Identificación: 123456789</p>
                        <p class="card-text">E-mail: proveedor1@example.com</p>
                        <p class="card-text">Teléfono: 123-456-7890</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </div>
    
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Código: 004</h5>
                        <p class="card-text">Nombre: Proveedor 4</p>
                        <p class="card-text">Identificación: 987654321</p>
                        <p class="card-text">E-mail: proveedor2@example.com</p>
                        <p class="card-text">Teléfono: 987-654-3210</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </div>

            
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Código: 005</h5>
                        <p class="card-text">Nombre: Proveedor 5</p>
                        <p class="card-text">Identificación: 123456789</p>
                        <p class="card-text">E-mail: proveedor1@example.com</p>
                        <p class="card-text">Teléfono: 123-456-7890</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </div>
    
           
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Código: 006</h5>
                        <p class="card-text">Nombre: Proveedor 6</p>
                        <p class="card-text">Identificación: 987654321</p>
                        <p class="card-text">E-mail: proveedor2@example.com</p>
                        <p class="card-text">Teléfono: 987-654-3210</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </div>
    
    
        </div>
    </div>
    )
}

export default Clientes