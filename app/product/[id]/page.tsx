import React from 'react';
import products from '../../all/product';
import ProductImages from '../ProductImage';

const DetailPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div className="text-center text-lg font-bold">Product not found</div>;
  }

  return (
    <>
      <section className="w-full mx-auto max-w-[1440px] ">
        <div className="bg-[#052C46] text-white py-10">
          <div className="container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <ProductImages images={product.image} />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col">
              <h1 className="text-2xl sm:text-4xl font-medium">{product.header}</h1>
              <h2 className="text-xl sm:text-2xl font-medium mt-2">{product.title}</h2>
              <p className="mt-2">{product.secondtext}</p>
              <p className="mt-2">{product.desc}</p>
              <h3 className="mt-4 text-lg font-semibold">{product.text}</h3>

              {/* Product Attributes */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.height && <p><strong>Height:</strong> {product.height}</p>}
                {product.springTechnology && <p><strong>Spring Technology:</strong> {product.springTechnology}</p>}
                {product.breathable && <p><strong>Breathable:</strong> {product.breathable}</p>}
                {product.doubleSided && <p><strong>Double Sided:</strong> {product.doubleSided}</p>}
                {product.supportSponge && <p><strong>Support Sponge:</strong> {product.supportSponge}</p>}
                {product.orthopedic && <p><strong>Orthopedic:</strong> {product.orthopedic}</p>}
                {product.material && <p><strong>Material:</strong> {product.material}</p>}
                {product.size && <p><strong>Size:</strong> {product.size}</p>}
                {product.qsovili && <p><strong>Fabric:</strong> {product.qsovili}</p>}
                {product.item && <p><strong>Item:</strong> {product.item}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
