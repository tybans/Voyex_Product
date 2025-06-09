const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    image: "https://images.unsplash.com/photo-1684703147716-014da6a31aa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpcmVsZXNzJTIwaGVhZHBob25lfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "Men's Jacket",
    category: "Apparel",
    price: 2599,
    image: "https://images.unsplash.com/photo-1715608069599-9b8bf8df52e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1lbidzJTIwamFja2V0fGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Smartphone",
    category: "Electronics",
    price: 15999,
    image: "https://images.unsplash.com/photo-1719945421298-f03d3d80c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    category: "Electronics",
    price: 3499,
    image: "https://images.unsplash.com/photo-1542193810-9007c21cd37e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsdXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "Running Shoes",
    category: "Footwear",
    price: 2999,
    image: "https://media.istockphoto.com/id/1126884662/photo/fashionable-sneakers-isolated-on-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rzlT3CW4bor4A1Jv5m4Y4qi5BHB88_nlSiiRQ_2HhCM="
  },
  {
    id: 6,
    title: "Analog Watch",
    category: "Accessories",
    price: 1899,
    image: "https://images.unsplash.com/photo-1696774690902-6e2057307e20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuYWxvZyUyMHdhdGNofGVufDB8fDB8fHww"
  },
  {
    id: 7,
    title: "Laptop Backpack",
    category: "Bags",
    price: 1499,
    image: "https://images.unsplash.com/photo-1667411424771-cadd97150827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFwdG9wJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    title: "LED Monitor",
    category: "Electronics",
    price: 7499,
    image: "https://images.unsplash.com/photo-1565896311009-382b9e813b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TEVEJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 9,
    title: "Office Chair",
    category: "Furniture",
    price: 5599,
    image: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    title: "Gaming Mouse",
    category: "Electronics",
    price: 899,
    image: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww"
  },
  {
    id: 11,
    title: "Sunglasses",
    category: "Accessories",
    price: 999,
    image: "https://images.unsplash.com/photo-1619642302163-f26d23d88495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1biUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 12,
    title: "Coffee Maker",
    category: "Appliances",
    price: 3199,
    image: "https://media.istockphoto.com/id/1426212593/photo/modern-coffee-machine-with-cup-in-office-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=VroCJfjJWtaaqBmFu5BluX9cKzyhZ6bQ2w-O72Sf-Zc="
  },
  {
    id: 13,
    title: "Wrist Band",
    category: "Accessories",
    price: 499,
    image: "https://media.istockphoto.com/id/118107739/photo/rare-tibetan-dzi-beads-bracelet.webp?a=1&b=1&s=612x612&w=0&k=20&c=UGWENvVJlJ_eF1tONk_VmAnC-SDIbFeIAv0RnvTox_Q="
  },
  {
    id: 14,
    title: "Yoga Mat",
    category: "Fitness",
    price: 799,
    image: "https://plus.unsplash.com/premium_photo-1667739346017-fbc9cd35d666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8WW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 15,
    title: "Men's Jeans",
    category: "Apparel",
    price: 2199,
    image: "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJ3MlMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 16,
    title: "Table Lamp",
    category: "Home Decor",
    price: 1299,
    image: "https://images.unsplash.com/photo-1609847214283-8bad801da710?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRhYmxlJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 17,
    title: "Water Bottle",
    category: "Fitness",
    price: 399,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 18,
    title: "Fitness Tracker",
    category: "Electronics",
    price: 3499,
    image: "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 19,
    title: "Men's T-Shirt",
    category: "Apparel",
    price: 699,
    image: "https://media.istockphoto.com/id/1207547332/photo/hanging-plan-white-polo-t-shirt-on-wall-with-male-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=sdNg1awM5BW4oV_yIfX7L4b3ZFWEdHlOvsGW1hszIPA="
  },
  {
    id: 20,
    title: "Wireless Charger",
    category: "Electronics",
    price: 1199,
    image: "https://media.istockphoto.com/id/1028116790/photo/close-up-phone-charging-on-wireless-charger-device.webp?a=1&b=1&s=612x612&w=0&k=20&c=GG9tD3EiHdZi6aIWZ26Ak5ooIiz4aTLeHap3g0OUiLQ="
  }
];

export default products;
