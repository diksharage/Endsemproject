export const camps = [
  {
    id: 1,
    wing: "Army",
    name: "RDC Camp",
    location: "New Delhi",
    duration: "10 Days",
    reportingTime:
      "6:00 AM",
    uniform:
      "Full NCC Uniform",
    activities: [
      "Parade Drill",
      "Weapon Training",
      "Leadership",
    ],
  },

  {
    id: 2,
    wing: "Army",
    name: "CATC Camp",
    location:
      "Hyderabad",
    duration: "7 Days",
    reportingTime:
      "7:00 AM",
    uniform:
      "PT Dress",
    activities: [
      "Camping",
      "Obstacle Training",
      "Fitness",
    ],
  },

  {
    id: 3,
    wing: "Army",
    name: "TSC Camp",
    location: "Pune",
    duration: "8 Days",
    reportingTime:
      "5:30 AM",
    uniform:
      "Combat Dress",
    activities: [
      "Shooting",
      "Field Craft",
    ],
  },

  {
    id: 4,
    wing: "Navy",
    name:
      "Naval Training Camp",
    location:
      "Mumbai",
    duration: "6 Days",
    reportingTime:
      "7:00 AM",
    uniform:
      "White Uniform",
    activities: [
      "Navigation",
      "Sailing",
    ],
  },

  {
    id: 5,
    wing: "Navy",
    name:
      "Naval Attachment Camp",
    location:
      "Chennai",
    duration: "5 Days",
    reportingTime:
      "6:00 AM",
    uniform:
      "Naval Dress",
    activities: [
      "Communication",
      "Sea Training",
    ],
  },

  {
    id: 6,
    wing: "Air",
    name:
      "Air Force Attachment Camp",
    location:
      "Bangalore",
    duration:
      "10 Days",
    reportingTime:
      "5:00 AM",
    uniform:
      "Air Uniform",
    activities: [
      "Flying Basics",
      "Aviation",
    ],
  },

  {
    id: 7,
    wing: "Air",
    name:
      "Aeromodelling Camp",
    location:
      "Nagpur",
    duration: "5 Days",
    reportingTime:
      "7:30 AM",
    uniform:
      "Sports Dress",
    activities: [
      "Aircraft Models",
      "Aerodynamics",
    ],
  },
];



// Async Await
export const fetchCamps =
  async () => {
    return new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve(camps);
        }, 1000);
      }
    );
  };