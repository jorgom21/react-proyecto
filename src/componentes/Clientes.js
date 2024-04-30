import React, {useEffect, useState} from "react";
import axios from "axios";

function Clientes(){

    const url = 'http://localhost:5000/api/clientes';
    const [clientes, setClientes] = useState([]);
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [identificacion, setIdentificacion] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [operacion, setOperacion] = useState('');
    const [titulo, setTitulo] = useState('');

    useEffect( ()=>{
        getclientes();
    },[]);

    const getclientes =async () => {
        const respuesta = await axios.get(url);
        setClientes(respuesta.data);
    }

    const openmodal = (op, id, nombre, identificacion, direccion, ciudad, email, telefono) => {
        setNombre('');
        setId('');
        setIdentificacion('');
        setDireccion('');
        setCiudad('');
        setTelefono('');
        setEmail('');
        setOperacion(op);
        if(op===1){
            setTitulo('Añadir cliente');
        }
        else if(op===2){
            setTitulo('Editar cliente');
            setId(id);
            setNombre(nombre);
            setCiudad(ciudad);
            setDireccion(direccion);
            setIdentificacion(identificacion);
            setTelefono(telefono);
            setEmail(email)
        }
       window.setTimeout(function(){
            document.getElementById('nombrecliente').focus();
        }, 500);
    }
 

        const crearSolitud = ()=>{
            let parametros;
            let metodo;
            if(operacion===1){
                parametros={
                    nombres:nombre,
                    identificacion:identificacion,
                    direccion:direccion,
                    ciudad:ciudad,
                    telefono:telefono,
                    correo:email
                }
                metodo = 'POST';
            }
            else{
                
                parametros={
                    idcliente:id,
                    nombres:nombre,
                    identificacion:identificacion,
                    direccion:direccion,
                    ciudad:ciudad,
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
                    getclientes();
                    
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
              alert('cliente borrado');
              getclientes();
          
            } catch (error) {
              console.error('Error al eliminar el recurso:', error);
            }
          };
          
        
    return(
        <div className="container mt-4">
        <h2 className="mb-4">Clientes</h2>
    
       
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar clientes..." aria-label="Buscar clientes" aria-describedby="button-search"/>
            <button className="btn btn-outline-secondary" type="button" id="button-search">Buscar</button>
        </div>

        <button onClick={()=>openmodal(1)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#clientesmodal">
            Agregar cliente
        </button>
        
        <div className="modal fade" id="clientesmodal" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
                <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                
                    <div className="container mt-4">

                        <form>
                            <div className="mb-3">
                            <label class="form-label">Nombre completo</label>
                                <input type="text" className="form-control" id="nombrecliente" placeholder="Ingrese el nombre del cliente" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>

                            <div className="mb-3">
                            <label class="form-label">Numero de documento</label>
                                <input type="text" className="form-control" id="identificacion" placeholder="Ingrese la Identificación" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)}/>
                            </div>

                            <div className="mb-3">
                            <label class="form-label">Direccion</label>
                                <input type="text" className="form-control" id="direccion" placeholder="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                            </div>

                            <div className="mb-3">
                            <label class="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="ciudad" placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                            </div>

                            <div class="mb-3">
                            <label  class="form-label">Telefono</label>
                                <input type="text" className="form-control" id="telefono" placeholder="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                            </div>

                            <div class="mb-3">
                            <label  class="form-label">E-mail</label>
                                <input type="text" className="form-control" id="e-mail" placeholder="Ingrese el E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                <button id="cerrarbtn" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button onClick={()=>crearSolitud()} type="button" className="btn btn-primary">Agregar</button>
                </div>
            </div>
            </div>
        </div>
    
        <div class="mb-3">
            <button className="btn btn-primary">Imprimir Listado</button>
            <button className="btn btn-success">Exportar a Excel</button>
        </div>
    
        <div class="btn-group mb-3" role="group">
            <button type="button" className="btn btn-secondary">Lista</button>
            <button type="button" className="btn btn-secondary">Cuadrícula</button>
        </div>
    
        
        <div className="row row-cols-1 row-cols-md-12 g-4">
            <div className="table-responsive">
                <div className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Identificación</th>
                            <th>ciudad</th>
                            <th>direccion</th>
                            <th>email</th>
                            <th>Telefono</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {clientes.map( (cliente,i) => (
                            <tr key={cliente.idcliente}>
                                <td>{(i+1)}</td>
                                <td>{cliente.nombres}</td>
                                <td>{cliente.identificacion}</td>
                                <td>{cliente.ciudad}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.correo}</td>
                                <td>{cliente.telefono}</td>
                                <td>
                                    <button onClick={()=>openmodal(2, cliente.idcliente, cliente.nombres, cliente.identificacion, cliente.direccion, cliente.ciudad, cliente.correo, cliente.telefono )} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#clientesmodal">editar</button>
                                    &nbsp;
                                    <button onClick={()=>eliminar(cliente.idcliente)} className="btn btn-danger">eliminar</button>
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

export default Clientes