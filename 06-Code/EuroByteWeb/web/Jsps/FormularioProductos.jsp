<%-- 
    Document   : FormularioProductos
    Created on : May 23, 2022, 5:27:34 PM
    Author     : Rommel Zambrano rzam_
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="Controller.Controlador2"%>
<%@page import="Model.Productos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <div class="container mt-4">
            <%
            Controlador2 controlador = new Controlador2();
            ArrayList<Productos> producto;
            producto = controlador.getProductos();
            %>
            <h1 class="text-center mt-4">Lista de Productos</h1>
            <table class="table table-dark mt-4">
                <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Descripcion</th>
                        <th class="text-center">Cantidad</th>
                        <th class="text-center">Precio</th>
                        <th class="text-center">Editar</th>
                        <th class="text-center">Eliminar</th>
                    </tr>
                </thead>               
                <tbody>
                    <%
                    for (Productos productos : producto) {                                   
                %>
                    <tr class = "text-center">
                        <td class="text-center"><% out.print(productos.getId());%> </td>
                        <td class="text-center"><% out.print(productos.getNombre());%></td>
                        <td class="text-center"><% out.print(productos.getDescripcion());%></td>
                        <td class="text-center"><% out.print(productos.getCantidad());%></td>
                        <td class="text-center"><% out.print(productos.getPrecio());%></td>
                        <td class="text-center">  </td>
                            <button class="btn btn-primary">
                                    Editar
                                </button>
                        <td class="text-center">
                            <button class="btn btn-danger">
                                    Eliminar
                                </button>
                            <!--a href="Controlador?accion=updateProduct&id=<%--= productos.getId()--%>"></a>
                                
                        </td>
                        
                            <!--a href="Controlador?accion=deleteProduct&id=<%--= producto.getId()--%>"</a>-->
                                
                            
                        </td>
                    </tr>
                    <%
                        }
                    %>
                </tbody>
            </table>
                
        </div>
    </body>
</html>
