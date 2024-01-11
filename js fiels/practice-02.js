const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags",
    Transmission: "Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
 
];

const carDetails = () => {
  const carSection = document.getElementById("car-Section");
  data.forEach((carDetail) => {
    console.log(carDetail.price);
    const carDiv = document.createElement('div');
    carDiv.innerHTML = `
        <div class="border rounded-xl  card">
               <div class="p-5">
                <img class=" w-full h-full rounded-xl" src="${carDetail.imageURL} " alt="">
                <p class="text-3xl py-5 font-semibold">Car Name : ${carDetail.name} </p>
                <p class="text-xl">Car details : ${carDetail.description} </p>
                <p class="py-5 text-xl">Transmission : ${carDetail.Transmission} </p>
                <button class="px-5 py-2 mb-5 text-xl text-white bg-sky-600 font-semibold rounded-xl">
                    Car Price : ${carDetail.price} </button>
               </div>
            </div>
        `;
        carSection.appendChild(carDiv);
  });
};
carDetails();
