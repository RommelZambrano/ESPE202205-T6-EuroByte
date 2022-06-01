
package Model;

/**
 *
 * @author Rommel Zambrano rzam_
 */
public class Productos {

    private String nombre;
    private String descripcion;
    private int cantidad;
    private double precio ;
    private double total;
    private double ganancia;

    public Productos(String nombre, String descripcion, int cantidad, double precio, double total, double ganancia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.total = total;
        this.ganancia = ganancia;
    }
        

  
 
    
    public Productos (){
        
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public double getGanancia() {
        return ganancia;
    }

    public void setGanancia(double ganancia) {
        this.ganancia = ganancia;
    }
}
