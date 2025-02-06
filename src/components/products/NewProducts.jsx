import ProductCard from "./ProductCard";

const productsData = [
  {
    id: "p1",
    img: "/jacket-1.jpg",
    title: "Jacket",
    description: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    id: "p2",
    img: "/skirt-1.jpg",
    title: "Skirt",
    description: "Black Flora Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    id: "p3",
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    description: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    id: "p4",
    img: "/shirt-1.jpg",
    title: "Shirt",
    description: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    id: "p5",
    img: "/sports-1.jpg",
    title: "Sport",
    description: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    id: "p6",
    img: "/watch-1.jpg",
    title: "Watches",
    description: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },

  {
    id: "p7",
    img: "/watch-2.jpg",
    title: "Watches",
    description: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
];

export default function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-4 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item) => {
            return (
              <ProductCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
