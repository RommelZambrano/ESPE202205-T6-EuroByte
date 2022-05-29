/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controller;

import ConnectionMongoDB.MongoDBConnection;
import Model.Productos;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import org.bson.Document;

/**
 *
 * @author Rommel Zambrano rzam_
 */
public class Controlador2 {
    public static ArrayList<Productos> getProductos() throws ParseException, IOException {
           
       MongoDBConnection mongoDBConnection = new MongoDBConnection();
       ArrayList<Productos> productos = new ArrayList<>();
       MongoDatabase database = mongoDBConnection.connection();
       MongoCollection collection = database.getCollection("Productos");
       MongoCursor<Document> cursor = collection.find().iterator();     
        try {
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Productos producUnit = new Productos();
                producUnit.setId(jsonObject.get("ID").getAsInt());
                producUnit.setNombre(jsonObject.get("Nombre").getAsString());
                producUnit.setDescripcion(jsonObject.get("Descripcion").getAsString());
                producUnit.setCantidad(jsonObject.get("Cantidad").getAsFloat());
                producUnit.setPrecio(jsonObject.get("Precio").getAsFloat());
                productos.add(producUnit);
          }
           
       } finally {
           cursor.close();
       }
        return productos;
   
       
    }       
}
