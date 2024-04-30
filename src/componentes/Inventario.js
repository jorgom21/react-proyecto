import imgproducto from "../imagenes/producto.jpg";
import React, {useEffect, useState} from "react";
import axios from "axios";

function Inventario(){

        const url = 'http://localhost:5000/api/productos';
        const [inventario, setInventario] = useState([]);
        const [id, setId] = useState('');
        const [producto, setProducto] = useState('');
        const [existencia, setExistencia] = useState('');
        const [v_unitario_venta, setV_unitario_venta] = useState('');
        const [v_unitario_compra, setV_unitario_compra] = useState('');
        const [idCategoria, setIdCategoria] = useState('');
        const [idProveedores, setIdProveedores] = useState('');
        const [operacion, setOperacion] = useState('');
        const [titulo, setTitulo] = useState('');
    
        useEffect( ()=>{
            getinventario();
        },[]);
    
        const getinventario =async () => {
            const respuesta = await axios.get(url);
            setInventario(respuesta.data);
        }
    
        const openmodal = (op, id, producto, existencia, v_unitario_compra, v_unitario_venta, idCategoria, idProveedores) => {
            setProducto('');
            setId('');
            setExistencia('');
            setV_unitario_compra('');
            setV_unitario_venta('');
            setIdCategoria('');
            setIdProveedores('');
            setOperacion(op);
            if(op===1){
                setTitulo('Añadir producto');
            }
            else if(op===2){
                setTitulo('Editar producto');
                setProducto(producto);
                setId(id);
                setExistencia(existencia);
                setV_unitario_compra(v_unitario_compra);
                setV_unitario_venta(v_unitario_venta);
                setIdCategoria(idCategoria);
                setIdProveedores(idProveedores)
            }
           window.setTimeout(function(){
                document.getElementById('nombreProducto').focus();
            }, 500);
        }
     
    
            const crearSolitud = ()=>{
                let parametros;
                let metodo;
                if(operacion===1){
                    parametros={
                        producto: producto,
                        existencia: existencia,
                        v_unitario_venta: v_unitario_venta,
                        v_unitario_compra: v_unitario_compra,
                        idcategoria: idCategoria,
                        idproveedores: idProveedores
                    }
                    metodo = 'POST';
                }
                else{
                    
                    parametros={
                        idproducto: id,
                        producto: producto,
                        existencia: existencia,
                        v_unitario_venta: v_unitario_venta,
                        v_unitario_compra: v_unitario_compra,
                        idcategoria: idCategoria,
                        idproveedores: idProveedores
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
                        getinventario();
                        
                    }
                ).catch(function(error){
                    alert('error en la peticion')
                    console.log('error en la solicitud')
                })
            }
    
            const eliminar = async (id) => {
                 let parametro={
                    idproducto:id
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
                  getinventario();
              
                } catch (error) {
                  console.error('Error al eliminar el recurso:', error);
                }
              };

    return(
        <div class="container mt-4">
                    <h2 class="mb-4">Inventario de Productos</h2>
                
                    
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Buscar productos..." aria-label="Buscar productos" aria-describedby="button-search"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-search">Buscar</button>
                    </div>


                    <button onClick={()=>openmodal(1)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#inventarioModal">
                        Agregar producto
                    </button>
                    
                    
                    <div class="modal fade" id="inventarioModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            
                                <div class="container mt-4">
                                    <h2 class="mb-4">Formulario de Producto</h2>

                                    <form>
                                        <div class="mb-3">
                                            <label for="nombreProducto" class="form-label">Nombre del Producto</label>
                                            <input type="text" class="form-control" id="nombreProducto" placeholder="Ingrese el nombre del producto"  onChange={(e) => setProducto(e.target.value)}/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="cantidad" class="form-label">Cantidad</label>
                                            <input type="number" class="form-control" id="cantidad" placeholder="Ingrese la cantidad"  onChange={(e) => setExistencia(e.target.value)}/>
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
                                            <input type="number" class="form-control" id="valorCompra" placeholder="Ingrese el valor de compra"  onChange={(e) => setV_unitario_compra(e.target.value)}/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="valorVenta" class="form-label">Valor de Venta</label>
                                            <input type="number" class="form-control" id="valorVenta" placeholder="Ingrese el valor de venta"  onChange={(e) => setV_unitario_venta(e.target.value)}/>
                                        </div>

                                        <div class="mb-3">
                                            <label for="proveedor" class="form-label">Proveedor</label>
                                            <input type="text" class="form-control" id="proveedor" placeholder="Ingrese el nombre del proveedor"  onChange={(e) => setIdProveedores(e.target.value)}/>
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
                                        <th>Producto</th>
                                        <th>Existencia</th>
                                        <th>Valor compra</th>
                                        <th>Valor venya</th>
                                        <th>categoria</th>
                                        <th>proveedor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {inventario.map( (producto,i) => (
                                        <tr key={producto.idproducto}>
                                            <td>{(i+1)}</td>
                                            <td>{producto.producto}</td>
                                            <td>{producto.existencia}</td>
                                            <td>{producto.v_unitario_compra}</td>
                                            <td>{producto.v_unitario_venta}</td>
                                            <td>{producto.idCategoria}</td>
                                            <td>{producto.idProveedores}</td>
                                            <td>
                                                <button onClick={()=>openmodal(2, producto.producto, producto.existencia, producto.v_unitario_compra, producto.v_unitario_venta, producto.idCategoria, producto.idProveedores )} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#inventarioModal">editar</button>
                                                &nbsp;
                                                <button onClick={()=>eliminar(producto.idproducto)} className="btn btn-danger">eliminar</button>
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

export default Inventario