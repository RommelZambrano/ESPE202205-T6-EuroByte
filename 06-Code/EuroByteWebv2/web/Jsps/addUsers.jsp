<%-- 
    Document   : addUsers
    Created on : 29 may. 2022, 20:59:48
    Author     : Isma
--%>



<%@page import="Model.Usuarios"%>
<%@page import="org.bson.Document"%>
<%@page import="ConnectionMongoDB.MongoDBConnection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Refresh" content="3;URL=../index.html"

        <title>Usuarios Agregados</title>
    </head>
    <body>
        <h1>Añadir Usuario</h1>
        <% 
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDBConnection mongoDBMetodos = new MongoDBConnection();
            mongoDBMetodos.ConnectionMongo();
            Document document = new Document();  
            
            int id;
            String nombre;
            String apellido;
            String direccion;
            String cedula;        
            
            id = (int)(Math. random()*1+1);
            nombre = request.getParameter("UsuarioNombre");
            apellido = request.getParameter("UsuarioApellido");
            direccion = request.getParameter("UsuarioDireccion");
            cedula = request.getParameter("UsuarioCedula");
                      
            Usuarios usuarios = new Usuarios ( id, nombre, apellido, direccion, cedula);
                      
            document.put("id", usuarios.getId());
            document.put("nombre", usuarios.getNombre());
            document.put("apellido", usuarios.getApellido());
            document.put("direccion", usuarios.getDireccion());
            document.put("cedula", usuarios.getCedula());
            
            mongoDBConnection.save (document,"RegistroUsuarios", MongoDBConnection.database);
        %>
    </body>
</html>
