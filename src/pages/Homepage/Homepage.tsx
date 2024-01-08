import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";
import { ProductModel } from "../../models/responses/ProductModel";
import { useEffect, useState } from "react";

type Props = {};

const Homepage = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // 1- Birden fazla noktada kullanılabilir
  // 2- Sorumluluğun UI dosyası üzerinden kalkması
  // 3- Ortak bi noktadan yönetebilmek için
  const fetchProducts = () => {
    let service: ProductService = new ProductService();
    service.getAll().then((response) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
