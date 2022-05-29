/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Interfaces;

import Model.Productos;
import java.util.List;

/**
 *
 * @author Rommel Zambrano rzam_
 */
public interface ProductCRUD {
    public List listProducts();
    public Productos listProduct(int id);
    public boolean addProduct(Productos productos);
    public boolean updateProduct(Productos productos);
    public boolean deleteProduct(int id);
}
