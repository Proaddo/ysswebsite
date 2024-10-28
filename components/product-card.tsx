import React from "react";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard;