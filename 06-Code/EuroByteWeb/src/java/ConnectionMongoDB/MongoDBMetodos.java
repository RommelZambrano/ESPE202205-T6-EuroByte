/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ConnectionMongoDB;


import com.mongodb.client.MongoDatabase;

/**
 *
 * @author Rommel Zambrano rzam_
 */
public class MongoDBMetodos { 
    
    MongoDBConnection mongoDBConnection = new MongoDBConnection();
    
    public static MongoDatabase database;
      
        public void ConnectionMongo(){
        database = mongoDBConnection.connection();
       
    }
    
}
