function Vender() {
    return(
        <div>
            <div id="contenido">
              <h3>Ventas</h3>
              
              <form class="row g-3">

                <div class="col-md-4 mb-3">
                    <label for="numeroFactura" class="form-label">Número de Factura:</label>
                    <input type="text" class="form-control" id="numeroFactura" name="numeroFactura" value="F2022001" readonly/>
                </div>
                
                <div class="col-md-4 mb-3">
                    <label for="codigoCliente" class="form-label">Código del Cliente:</label>
                    <input type="text" class="form-control" id="codigoCliente" name="codigoCliente" required/>
                </div>
              </form>
              <form class="row g-3">
                <div class="col-md-2 mb-3">
                    <label for="numeroFactura" class="form-label">N°:</label>
                    <input type="text" class="form-control" id="numeroFactura" name="numeroFactura" required/>
                </div>
                <div class="col-md-2 mb-3">
                    <label for="cantidad" class="form-label">Cantidad:</label>
                    <input type="number" class="form-control" id="cantidad" name="cantidad" required/>
                </div>
                <div class="col-md-7 mb-3">
                    <label for="producto" class="form-label">Producto:</label>
                    <input type="text" class="form-control" id="producto" name="producto" required/>
                </div>
                <div class="col-md-1">
                    <button type="submit" class="btn btn-primary">Agregar</button>
                </div>
              </form>
                
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th scope="row">001</th>
                            <td>Producto 1</td>
                            <td>3</td>
                            <td>$20.00</td>
                            <td>$60.00</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">002</th>
                            <td>Producto 2</td>
                            <td>2</td>
                            <td>$15.00</td>
                            <td>$30.00</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">003</th>
                            <td>Producto 3</td>
                            <td>5</td>
                            <td>$10.00</td>
                            <td>$50.00</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">004</th>
                            <td>Producto 4</td>
                            <td>1</td>
                            <td>$25.00</td>
                            <td>$25.00</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">005</th>
                            <td>Producto 5</td>
                            <td>4</td>
                            <td>$18.00</td>
                            <td>$72.00</td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-4">
                    <div class="alert alert-success" role="alert">
                        <strong>Valor Total:</strong> $237.00 
                    </div>
                    <button type="button" class="btn btn-primary">Finalizar compra</button>
                </div>
            </div> 
        </div>
    )
}


export default Vender