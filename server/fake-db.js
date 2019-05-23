const Rental = require("./models/rental");

class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Gorgeous apartment with a stunning ocean view",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image:
          "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 4,
        shared: true,
        description: "An excellent apartment in the city center.",
        dailyRate: 43
      },
      {
        title: "Modern apartment in the city center",
        city: "New York",
        street: "Time Square",
        category: "apartment",
        image:
          "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 1,
        shared: false,
        description: "A very nice apartment in the city center.",
        dailyRate: 11
      },
      {
        title: "Newly built cottage with a stunning view",
        city: "Spisska Nova Ves",
        street: "Banicka 1",
        category: "house",
        image:
          "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 5,
        shared: true,
        description: "A Very nice apartment in center of the city.",
        dailyRate: 23
      }
    ];
  }
  async cleanDb() {
    await Rental.deleteMany();
  }
  pushRentalsToDb() {
    this.cleanDb();
    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);
      newRental.save();
    });
  }
  // seedDb() {
  //   this.pushRentalsToDb();
  // }
}
module.exports = FakeDb;
