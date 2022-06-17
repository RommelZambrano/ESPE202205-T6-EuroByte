package ConnectionMongoDB;


import Model.MongoDB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSecurityException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
/**
 *
 * @author Rommel Zambrano rzam_
 */
public class MongoDBConnection {       
        MongoDB mongoDB = new MongoDB();
        public static MongoDatabase database;     
        
    public MongoDatabase connection (){
        String URI = "mongodb+srv://EuroByte:2022ESPE@cluster0.upuzx.mongodb.net/test";
        
        try {
            mongoDB.setUri(new MongoClientURI(URI));
            mongoDB.setMongoClient(new MongoClient(mongoDB.getUri()));
            mongoDB.setMongoDataBase(mongoDB.getMongoClient().getDatabase("EuroByte"));
            mongoDB.setMongoCollection(mongoDB.getMongoDataBase().getCollection((URI)));
            mongoDB.getMongoCollection().drop();         
        } catch (MongoSecurityException a) {
            mongoDB.setMongoDataBase(null);
        }
            return mongoDB.getMongoDataBase();
}
    
    public void ConnectionMongo(){
        MongoDBConnection mongoDBConnection = new MongoDBConnection()  ;   
        database = mongoDBConnection.connection(); 
    }
    
    public void save(Document document, String collection, MongoDatabase database) {
    MongoCollection<Document> collectionDocument = database.getCollection(collection);
    collectionDocument.insertOne(document);
    }
        
        
}
    
