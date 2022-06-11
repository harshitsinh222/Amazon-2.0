import React from "react";
import Product from "./Product";
function ProductFeed({ products }) {
  return (
    <div className="bg-gray-200 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
            rating,
          }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              hasPrime={hasPrime}
              rating={rating}
            />
          )
        )}
      <img
        className="md:col-span-full w-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2 grid grid-flow-row-dense">
        {products
          .slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
              hasPrime,
              rating,
            }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                hasPrime={hasPrime}
                rating={rating}
              />
            )
          )}
      </div>
      {products
        .slice(6, products.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
            rating,
          }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              hasPrime={hasPrime}
              rating={rating}
            />
          )
        )}
    </div>
  );
}

export default ProductFeed;
