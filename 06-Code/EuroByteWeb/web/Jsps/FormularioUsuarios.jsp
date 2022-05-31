<%-- 
    Document   : FormularioUsuarios
    Created on : May 31, 2022, 3:31:28 AM
    Author     : rzam_
--%>

<%@page import="ModelDAO.ModelosDAO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Model.Usuarios"%>
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
            ArrayList <Usuarios> usuario;
            usuario = modelosDAO.getUsuarios();
           %>
            <div class="container">
            <h3 align="center">Lista de Usuarios</h3>
            <br>
        </div>
         <div>

            <table >
                <thead>
                    <tr class="text-center">   
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Cedula</th>                     
                    </tr>
                </thead>

           <%
                      for(Usuarios usuarios : usuario){
                    %>
                <tbody>
                    <tr>
                        <td> <% out.print(usuarios.getId());%></td>
                        <td> <% out.print(usuarios.getNombre());%></td>
                        <td> <% out.print(usuarios.getApellido());%></td>
                        <td> <% out.print(usuarios.getDireccion());%></td>
                        <td> <% out.print(usuarios.getCedula());%></td>                      
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
