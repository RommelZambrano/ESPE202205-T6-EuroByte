<%-- 
    Document   : addProducts
    Created on : May 22, 2022, 6:23:56 PM
    Author     : Rommel Zambrano rzam_
--%>

<%@page import="Model.Productos"%>
<%@page import="org.bson.Document"%>
<%@page import="ConnectionMongoDB.MongoDBConnection"%>
<%@page import="java.text.DecimalFormat"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="../CSS/PageCss.css" rel="stylesheet" type="text/css"/>
        <meta http-equiv="Refresh" content="3;URL=../index.html">

        <title>Productos Agregados</title>
    </head>
    <body>
        <header>Productos Agregados Correctamente</header>
        <% 
            DecimalFormat df = new DecimalFormat();
            MongoDBConnection mongoDBConnection = new MongoDBConnection();
            MongoDBConnection mongoDBMetodos = new MongoDBConnection();
            mongoDBMetodos.ConnectionMongo();
            Document document = new Document();                     
   
            String nombre;
            String descripcion;
            int cantidad;
            double precio;  
            double total;
            double ganancia;
            
            
            nombre = request.getParameter("ProductoNombre");
            descripcion = request.getParameter("ProductoDescripcion");
            cantidad = Integer.parseInt(request.getParameter("ProductoCantidad")) ;
            precio = Double.parseDouble(request.getParameter("ProductoPrecio"));
            total = (Math.round(cantidad*precio*100d)/100);
            ganancia = (Math.round((total*0.12) * 100d )/100 );         
            
                      
            Productos productos = new Productos (nombre,descripcion, cantidad ,precio,total,ganancia);
                    
            document.put("nombre", productos.getNombre());
            document.put("descripcion", productos.getDescripcion());
            document.put("cantidad", productos.getCantidad());
            document.put("precio", productos.getPrecio());
            document.put("total", productos.getTotal());
            document.put("ganancia", productos.getGanancia());
            
            mongoDBConnection.save(document,"Productos", mongoDBConnection.database);
        %>
    </body>
</html>