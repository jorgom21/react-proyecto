import React, {useEffect, useState} from "react";
import axios from "axios";

function Proveedores(){

    const url = 'http://localhost:5000/api/proveedores';
    const [proveedores, setProveedores] = useState([]);
    const [id, setId] = useState('');
    const [nombres, setNombres] = useState('');
    const [nitproveedor, setNitproveedor] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [operacion, setOperacion] = useState('');
    const [titulo, setTitulo] = useState('');

    useEffect( ()=>{
        getProveedores();
    },[]);

    const getProveedores =async () => {
        const respuesta = await axios.get(url);
        setProveedores(respuesta.data);
    }

    const openmodal = (op, id, nombres, nitproveedor,  email, telefono) => {
        setNombres('');
        setId('');
        setNitproveedor('');
        setTelefono('');
        setEmail('');
        setOperacion(op);
        if(op===1){
            setTitulo('Añadir proveedor');
        }
        else if(op===2){
            setTitulo('Editar proveedor');
            setId(id);
            setNombres(nombres);
            setNitproveedor(nitproveedor);
            setTelefono(telefono);
            setEmail(email)
        }
       window.setTimeout(function(){
            document.getElementById('nombreproveedor').focus();
        }, 500);
    }
 

        const crearSolitud = ()=>{
            let parametros;
            let metodo;
            if(operacion===1){
                parametros={
                    nombres:nombres,
                    nitproveedor:nitproveedor,
                    telefono:telefono,
                    correo:email
                }
                metodo = 'POST';
            }
            else{
                
                parametros={
                    idproveedor:id,
                    nombres:nombres,
                    nitproveedor:nitproveedor,
                    telefono:telefono,
                    correo:email
                }
                metodo = 'PUT';
                console.log(url)
            }
            enviarSolicitud(metodo, url, parametros);

        }

        const enviarSolicitud =async(metodo, url, parametros) =>{
            await axios({method:metodo, url:url, data:parametros}).then(
                function(respuesta){
                    alert('añadido exitoso');
                    console.log(respuesta.data);
                    document.getElementById('cerrarbtn').click();
                    getProveedores();
                    
                }
            ).catch(function(error){
                alert('error en la peticion')
                console.log('error en la solicitud')
            })
        }

        const eliminar = async (id) => {
             let parametro={
                idcliente:id
            }
            try {
                const confirmacion = window.confirm('¿Estás seguro/a de que deseas eliminar este recurso?');
                 if (!confirmacion) {
                 return; // Si el usuario cancela, no hacer nada
              }

              const response = await axios.delete(url, {data:parametro}
              );
          
              console.log(response.data); 
              alert('proveedor borrado');
              getProveedores();
          
            } catch (error) {
              console.error('Error al eliminar el recurso:', error);
            }
          };

    return(
        <div class="container mt-4">
                    <h2 class="mb-4">Listado de Proveedores</h2>
                
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Buscar proveedores..." aria-label="Buscar proveedores" aria-describedby="button-search"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-search">Buscar</button>
                    </div>

                    <button onClick={()=>openmodal(1)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#proveedorModal">
                        Agregar nuevo proveedor
                    </button>

                    <div class="modal fade" id="proveedorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            
                                <div class="container mt-4">

                                    <form>
                                        <div class="mb-3">
                                            <label for="nombreProducto" class="form-label">Nombre completo</label>
                                            <input type="text" class="form-control" id="nombreproveedor" placeholder="Ingrese el nombre del cliente" onChange={(e) => setNombres(e.target.value)}/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="nit" class="form-label">Nit</label>
                                            <input type="number" class="form-control" id="nit" placeholder="Ingrese el nit" onChange={(e) => setNitproveedor(e.target.value)}/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="telefono" class="form-label">Telefono</label>
                                            <input type="number" class="form-control" id="telefono" placeholder="Ingrese el telefono" onChange={(e) => setTelefono(e.target.value)}/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="e-mail" class="form-label">E-mail</label>
                                            <input type="text" class="form-control" id="e-mail" placeholder="Ingrese el E-mail" onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={()=>crearSolitud()} type="button" class="btn btn-primary">Agregar</button>
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

                    <div className="row row-cols-1 row-cols-md-12 g-4">
                        <div className="table-responsive">
                            <div className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Nombre</th>
                                        <th>Nit</th>
                                        <th>Telefono</th>
                                        <th>E-mail</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {proveedores.map( (proveedor,i) => (
                                        <tr key={proveedor.idproveedor}>
                                            <td>{(i+1)}</td>
                                            <td>{proveedor.nombres}</td>
                                            <td>{proveedor.nitproveedor}</td>
                                            <td>{proveedor.telefono}</td>
                                            <td>{proveedor.email}</td>
                                           
                                            <td>
                                                <button onClick={()=>openmodal(2, proveedor.nombres, proveedor.nitproveedor, proveedor.telefono, proveedor.email )} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#proveedorModal">editar</button>
                                                &nbsp;
                                                <button onClick={()=>eliminar(proveedor.idproveedor)} className="btn btn-danger">eliminar</button>
                                            </td>
                                        
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </div>
                    </div>

                
        </div>

                
    )
}

export default Proveedores