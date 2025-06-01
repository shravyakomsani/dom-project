let Data=[
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
      category: "Electronics",
      price: 59.99,
      rating: 4.5,
      image: "https://picsum.photos/seed/101/200"
    },
    {
      id: 2,
      name: "Coffee Maker",
      description: "12-cup programmable coffee machine with auto shut-off.12-cup programmable coffee machine with auto shut-off.12-cup programmable coffee machine with auto shut-off",
      category: "Home Appliances",
      price: 39.99,
      rating: 4.2,
      image: "https://picsum.photos/seed/102/200"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      description: "Ergonomic mouse with RGB lighting and customizable DPI.",
      category: "Electronics",
      price: 29.99,
      rating: 4.7,
      image: "https://picsum.photos/seed/103/200"
    },
    {
      id: 4,
      name: "Water Bottle",
      description: "Stainless steel vacuum insulated bottle, 1 liter.",
      category: "Fitness",
      price: 15.99,
      rating: 4.3,
      image: "https://picsum.photos/seed/104/200"
    },
    {
      id: 5,
      name: "Yoga Mat",
      description: "Eco-friendly, non-slip yoga mat with carrying strap.",
      category: "Fitness",
      price: 25.99,
      rating: 4.6,
      image: "https://picsum.photos/seed/105/200"
    },
    {
      id: 6,
      name: "Smart Watch",
      description: "Track fitness, sleep, heart rate, and notifications.",
      category: "Electronics",
      price: 79.99,
      rating: 4.1,
      image: "https://picsum.photos/seed/106/200"
    },
    {
        id: 7,
        name: "Blender",
        description: "High-speed blender with multiple speed settings.",
        category: "Home Appliances",
        price: 49.99,
        rating: 4.4,
        image: "https://picsum.photos/seed/107/200"
      },
      {
        id: 8,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness and color temperature.",
        category: "Home Appliances",
        price: 22.99,
        rating: 4.3,
        image: "https://picsum.photos/seed/108/200"
      },
      {
        id: 9,
        name: "Backpack",
        description: "Water-resistant backpack with laptop compartment.",
        category: "Fashion",
        price: 34.99,
        rating: 4.5,
        image: "https://picsum.photos/seed/109/200"
      },
      {
        id: 10,
        name: "Sneakers",
        description: "Breathable running shoes for men and women.",
        category: "Fashion",
        price: 45.00,
        rating: 4.0,
        image: "https://picsum.photos/seed/110/200"
      },
      {
        id: 11,
        name: "Scented Candles",
        description: "Aromatic candles for relaxation and ambiance.",
        category: "Home Appliances",
        price: 19.99,
        rating: 4.6,
        image: "https://picsum.photos/seed/111/200"
      },
      {
        id: 12,
        name: "Electric Kettle",
        description: "Fast-boil electric kettle with auto shut-off.",
        category: "Home Appliances",
        price: 28.99,
        rating: 4.2,
        image: "https://picsum.photos/seed/112/200"
      },
      {
        id: 13,
        name: "Bluetooth Speaker",
        description: "Portable speaker with 10-hour battery life.",
        category: "Electronics",
        price: 37.99,
        rating: 4.4,
        image: "https://picsum.photos/seed/113/200"
      },
      {
        id: 14,
        name: "Desk Organizer",
        description: "Multi-compartment desk organizer for stationery.",
        category: "fitness",
        price: 12.99,
        rating: 4.3,
        image: "https://picsum.photos/seed/114/200"
      },
      {
        id: 15,
        name: "Sunglasses",
        description: "UV-protected stylish sunglasses for all seasons.",
        category: "Fashion",
        price: 18.99,
        rating: 4.1,
        image: "https://picsum.photos/seed/115/200"
      },
      {
        id: 16,
        name: "Graphic T-Shirt",
        description: "Cotton t-shirt with a creative graphic print.",
        category: "Fashion",
        price: 14.99,
        rating: 4.2,
        image: "https://picsum.photos/seed/116/200"
      },
      {
        id: 17,
        name: "Office Chair",
        description: "Ergonomic chair with lumbar support and wheels.",
        category: "Home Appliances",
        price: 89.99,
        rating: 4.6,
        image: "https://picsum.photos/seed/117/200"
      },
      {
        id: 18,
        name: "Cookware Set",
        description: "Non-stick pots and pans, 5-piece set.",
        category: "Home Appliances",
        price: 65.99,
        rating: 4.5,
        image: "https://picsum.photos/seed/118/200"
      },
      {
        id: 19,
        name: "Tote Bag",
        description: "Reusable fabric tote bag for everyday use.",
        category: "Fashion",
        price: 9.99,
        rating: 4.0,
        image: "https://picsum.photos/seed/119/200"
      },
    
    {
        id: 20,
        name: "Wall Clock",
        description: "Minimalist wall clock for living room or office.",
        category: "Home Appliances",
        price: 24.99,
        rating: 4.3,
        image: "https://picsum.photos/seed/120/200"
      }

  ]
  function showall(e){
    // document.getElementById("box").innerHTML=""
// document.getElementById("box")
e.map((i)=>{
    document.getElementById("box").innerHTML+= `<div class="card card-1" style="width: 18rem;">
    <img src="${i.image}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${i.name}</h5>
      <h5 class="card-title">${i.price}</h5>
      <p class="card-text">${i.description.length>30?i.description.slice(0,30):i.description}....</p>
      <a href="#" class="btn btn-primary">add to card</a>
    </div>
  </div>`



})
  }
  showall(Data)
  let newdata;
function showdata(e){
    newdata = Data.filter(i => i.category.toLowerCase() == e.toLowerCase());
    // newdata = Data.filter(i => i.category==e);
   document.getElementById("box").innerHTML="";
   showall(newdata)

}
function showalldata(){
     document.getElementById("box").innerHTML=""
     showall(Data);
}