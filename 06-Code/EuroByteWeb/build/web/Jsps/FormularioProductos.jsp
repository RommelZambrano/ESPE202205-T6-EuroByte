<%-- 
    Document   : FormularioProductos
    Created on : May 23, 2022, 5:27:34 PM
    Author     : Rommel Zambrano rzam_
--%>


<%@page import="ModelDAO.ModelosDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Model.Productos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
           <%        
            ModelosDAO modelosDAO = new ModelosDAO();
            ArrayList<Productos> producto;
            producto = modelosDAO.getProductos();
           %>
        <div>
            <h1 >Lista de Productos</h1>
            <table class="table table-light">
                <thead>
                    <tr>                 
                        <th >Nombre</th>
                        <th >Descripcion</th>
                        <th >Cantidad</th>
                        <th >Precio</th>
                        <th >Total</th>
                        <th >Ganancia</th>
                        
                    </tr>
                </thead>

           
                <tbody>
                    <%
                      for(Productos productos : producto){
                    %>
                    <tr class="text-center">

                        <td ><% out.print(productos.getNombre());%></td>
                        <td ><% out.print(productos.getDescripcion());%></td>
                        <td ><% out.print(productos.getCantidad());%></td>
                        <td ><% out.print(productos.getPrecio());%></td>
                        <td ><% out.print(productos.getTotal());%> </td>
                        <td ><% out.print(productos.getGanancia());%> </td>
                        
                    </tr>
                    <%
                        }
                    %> 
                </tbody>
                <div>
             <button type="submit">     
                        <a href="../index.html">Regresar</a>
             </button> 
                 </div>
            </table>            
        </div>
    </body>
</html>




