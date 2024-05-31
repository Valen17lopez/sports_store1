import UserRepository from '../repositories/UserRepository';

class ProductService {
    static async getAllproducts() {
        return await UserRepository.getAllproducts();//llamamos el metodo getAllProductos para traer todos los productos de la bd
      }
}
export default ProductService;