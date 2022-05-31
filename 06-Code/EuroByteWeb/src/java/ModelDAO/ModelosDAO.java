/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ModelDAO;

import ConnectionMongoDB.MongoDBConnection;
import Interfaces.ProductCRUD;
import Model.Productos;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author rzam_
 */
public class ModelosDAO implements ProductCRUD {

    public ArrayList <Productos> getProductos() throws ParseException, IOException {
       
       MongoDBConnection mongoDBConnection = new MongoDBConnection();
       ArrayList<Productos> produtos = new ArrayList<>();
       MongoDatabase database = mongoDBConnection.connection();
       MongoCollection collection = database.getCollection("Productos");
       MongoCursor<Document> cursor = collection.find().iterator();     
        try {
            
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Productos producUnit = new Productos();
                producUnit.setNombre(jsonObject.get("nombre").getAsString());
                producUnit.setDescripcion(jsonObject.get("descripcion").getAsString());
                producUnit.setCantidad(jsonObject.get("cantidad").getAsInt());
                producUnit.setPrecio(jsonObject.get("precio").getAsDouble());
                producUnit.setTotal(jsonObject.get("total").getAsDouble());
                producUnit.setGanancia(jsonObject.get("ganancia").getAsDouble());
                produtos.add(producUnit);
          }
           
       } finally {
           cursor.close();
       }
        return produtos;   
           
}
    
     

    @Override
    public Productos listProduct(int id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public boolean addProduct(Productos productos) {
        throw new UnsupportedOperationException("Not supported yet."); 
    }

    @Override
    public boolean updateProduct(Productos productos) {
        throw new UnsupportedOperationException("Not supported yet."); 
    }

    @Override
    public boolean deleteProduct(int id) {
        throw new UnsupportedOperationException("Not supported yet."); 
    }
    
        public float calculoGanancias(float cantidad, float precio) {
        float total;
        total = (cantidad*precio);
        return total;
    }

    @Override
    public List listProducts() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}


