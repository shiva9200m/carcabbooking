// Mock data for the travel website

export const destinations = [
  {
    id: 1,
    name: "Kathmandu",
    location: "Nepal",
    price: "7000",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=687&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Kathmandu",
    budget: "luxury",
    description: "Paradise on Earth with crystal clear waters",
  },
   {
    id: 1,
    name: "Pokhara",
    location: "Nepal",
    price: "7000",
    duration: "7 Days",
    image:
      "https://i.pinimg.com/1200x/81/12/cb/8112cb67fa462147eb5c582663f55731.jpg",
    country: "pokhara",
    budget: "luxury",
    description: "Paradise on Earth with crystal clear waters",
  },
  {
    id: 2,
    name: "Banaras",
    location: "Uttar Pradesh",
    price: "3,199",
    duration: "10 Days",
    image:
      "https://plus.unsplash.com/premium_photo-1697729634472-bb82561ef296?q=80&w=687&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Banaras",
    budget: "luxury",
    description: "Breathtaking mountain landscapes",
  },
  {
    id: 3,
    name: "Ayodhya",
    location: "Uttar Pradesh",
    price: "1,899",
    duration: "5 Days",
    image:
      "https://plus.unsplash.com/premium_photo-1697730334768-6e65fa8fded0?q=80&w=870&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ayodhya",
    budget: "medium",
    description: "The City of Love and Lights",
  },
  {
    id: 4,
    name: "Prem Mandir",
    location: "Uttar Pradesh",
    price: "2,699",
    duration: "8 Days",
    image:
      "https://i.pinimg.com/736x/ed/e9/a4/ede9a46da88886b9a98b13f076343e35.jpg",
    country: "Prem Mandir",
    budget: "medium",
    description: "Modern meets traditional in Japan's capital",
  },
  {
    id: 5,
    name: "Goa",
    location: "India",
    price: "2,199",
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=774&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Goa",
    budget: "medium",
    description: "Iconic white-washed buildings and sunsets",
  },
  {
    id: 6,
    name: "Kedarnath",
    location: "India",
    price: "2,899",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=774&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Kedarnath",
    budget: "luxury",
    description: "Luxury and innovation in the desert",
  },
  {
    id: 7,
    name: "Kushinagar",
    location: "Uttar Pradesh",
    price: "1,599",
    duration: "9 Days",
    image:
      "https://images.unsplash.com/photo-1691940175842-84a788886e7f?q=80&w=868&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Kushinagar",
    budget: "budget",
    description: "Tropical paradise with rich culture",
  },
  {
    id: 8,
    name: "Manali",
    location: "India",
    price: "2,999",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=774&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Manali",
    budget: "luxury",
    description: "Land of fire, ice, and northern lights",
  },
  
];

export const packages = [
  {
    id: 1,
    title: "Toyota Innova",
    destination: "7 Seater",
    price: "18/KM",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 245,
    image:
      "https://i.pinimg.com/1200x/3a/1f/cb/3a1fcb1a65e2d38a9a34fbb76cec1e39.jpg",
    includes: ["Driver", "Fuel", "Pickup", "Outstation"],
  },
  {
    id: 2,
    title: "Maruti Suzuki Ertiga",
    destination: "7 Seater",
    price: "13/KM",
    duration: "10 Days / 9 Nights",
    rating: 4.8,
    reviews: 189,
    image:
      "https://i.pinimg.com/736x/89/32/c0/8932c0e6bacc17f73c4d64aa6aa4ff5b.jpg",
    includes: ["Driver", "Pickup", "Local Ride", "Round Trip"],
  },
  {
    id: 3,
    title: "Mahindra Scorpio",
    destination: "6 Seater",
    price: "15/KM",
    duration: "5 Days / 4 Nights",
    rating: 4.7,
    reviews: 312,
    image:
      "https://i.pinimg.com/736x/c6/8c/93/c68c93824a95b83b4dbe91427aac8d1a.jpg",
    includes: ["Driver", "Airport Pickup", "Tours", "Outstation"],
  },
  {
    id: 4,
    title: "Luxury Tempo Traveller",
    destination: "16 Seater",
    price: "20/KM",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    reviews: 278,
    image:
      "https://i.pinimg.com/736x/30/1d/4a/301d4abe73a0f1696cb52aca1f9d971d.jpg",
    includes: ["Driver", "Group Travel", "Tours", "Outstation"],
  },
  {
    id: 5,
    title: "Maruti Suzuki Dzire",
    destination: "5 Seater",
    price: "$2,199",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    reviews: 201,
    image: "https://i.pinimg.com/1200x/8b/25/a7/8b25a77242dbbf5ecf25c06ed9747c90.jpg",
    includes: ["Driver", "Pickup", "Local Taxi", "One Way"]
  },
  {
    id: 6,
    title: "Kia Carens",
    destination: "7 Seater",
    price: "$2,899",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 167,
    image: "https://i.pinimg.com/736x/c6/06/6a/c6066a85f5e861f7ff8e2838588cb125.jpg",
    includes: ["Driver", "Pickup", "Family Cab", "Outstation"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sunil sharma",
    location: "Gorakhpur, India",
    rating: 5,
    text: "Amazing experience! The trip to Banaras was perfectly organized. Every detail was taken care of, and the service was exceptional.",
    image:
      "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=764&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Dillip Kumar",
    location: "Lucknow, India",
    rating: 5,
    text: "Best travel agency I've ever worked with. The Nepal package exceeded all expectations. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1744535814650-adcc647fd2b7?q=80&w=687&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Rima Singh",
    location: "Gorakhpur, India",
    rating: 5,
    text: "Unforgettable memories in. The itinerary was perfect, and the accommodations were stunning. Will definitely book again!",
    image:
      "https://images.unsplash.com/photo-1663560453720-42a09eb92b8e?q=80&w=687&auto=format&fit=crop&fm=webp&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const features = [
  {
    icon: "Globe",
    title: "Gorakhpur Route Coverage",
    description: "Local, airport, railway and outstation cab service from Gorakhpur",
  },
  {
    icon: "Shield",
    title: "Safe Cab Booking",
    description: "Clean cars, verified drivers and reliable pickup for every trip",
  },
  {
    icon: "Clock",
    title: "24/7 Support",
    description: "Day and night cab availability for urgent and planned travel",
  },
  {
    icon: "DollarSign",
    title: "Affordable Taxi Fare",
    description: "Clear pricing for local rides, one-way trips and round trips",
  },
];
