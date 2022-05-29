<%-- 
    Document   : addProducts
    Created on : May 22, 2022, 6:23:56 PM
    Author     : Rommel Zambrano rzam_
--%>

<%@page import="ConnectionMongoDB.MongoDBMetodos"%>
<%@page import="Model.Productos"%>
<%@page import="org.bson.Document"%>
<%@page import="ConnectionMongoDB.MongoDBConnection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Refresh" content="URL=addProductsInterface.html"

        <title>Productos Agregados</title>
    </head>
    <body>
        <h1>Añadir Producto</h1>
        <% 
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDBMetodos mongoDBMetodos = new MongoDBMetodos();
            mongoDBMetodos.ConnectionMongo();
            Document document = new Document();                     
            int id;
            String nombre;
            String descripcion;
            float cantidad;
            float precio;        
            
            id = Integer.parseInt (request.getParameter("ProductoId"));
            nombre = request.getParameter("ProductoNombre");
            descripcion = request.getParameter("ProductoDescripcion");
            cantidad = Float.parseFloat (request.getParameter("ProductoCantidad"));
            precio = Float.parseFloat (request.getParameter("ProductoPrecio"));
                      
            Productos productos = new Productos (id, nombre, descripcion, cantidad, precio);
                      
            document.put("id", productos.getId());
            document.put("nombre", productos.getNombre());
            document.put("descripcion", productos.getDescripcion());
            document.put("cantidad", productos.getCantidad());
            document.put("precio", productos.getPrecio());
            
            mongoDBConnection.save (document,"Productos", MongoDBMetodos.database);
        %>
    </body>
</html>
