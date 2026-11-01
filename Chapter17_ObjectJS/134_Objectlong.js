const { Children } = require("react");

// Synthetic training fixture: all personal details and identifiers are fictional.
const user = {
  id: 1001,
  username: "Shashikant Rai",
  firstname: "Shashikant",
  middlename: "kumar",
  lastname: "Rai",
  fullname: "shashikant rai",
  age: 36,
  dateofbirth: "02-12-1989",
  gender: "male",
  email: "shashikantrai@gmail.com",
  alternateemail: "shashikant.work@gmail.com",
  phone: "+91-7654323456",
  isActive: true,
  isEmailverified: true,
  profilepicture: "https://example.com/images/shashikant.png",
  address: {
    housenumber: "101B",
    street: "KV Road",
    landmark: "Near shiv temple",
    city: "Bangalore",
    state: "karnataka",
    postalcode: "560100",
    country: "India",
    coordinates: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
  },
  permanentaddress: {
    village: "damodarpur",
    district: "Bhojpur",
    state: "Bihar",
    postalcode: "802166",
    country: "India",
  },
  languages: ["English", "Hindi", "Bhojpuri"],
  hobbies: ["playing cricket and watching cricket", "cycling", "swimming"],
  skills: ["Manual", "api", "DB testing", "UI automation"],
  education: [
    {
      degree: "B.tech",
      specialization: "Computer science",
      institution: "UPTU Lucknow",
      graduationyear: "2013",
      grade: "A",
    },
    {
      degree: "B.tech",
      specialization: "Computer science",
      institution: "UPTU Lucknow",
      graduationyear: "2013",
      grade: "Distinction",
    },
  ],
  employment: {
    company: "abc ",
    Jobtitle: "QA",
    department: "Testing",
    employeeID: "T0801",
    employmentType: "Permanent",
    joiningdate: "02-04-2025",
    annualsalary: "1900000",
    currency: "INR",
    isRemote: "Yes",
    officeDays: "WFH",
    manager: {
      name: "suman",
      email: "ghtt@gmail.com",
    },
  },
  workexperiance: [
    {
      company: "google",
      role: "QA",
      from: "2000",
      to: "2002",
    },
    {
      company: "googlealphabet",
      role: "QA",
      from: "2006",
      to: "2009",
    },
  ],
  family: {
    maritalstatus: "Married",
    spouse: {
      name: "kiran",
      age: "36",
    },

    Children: [
      { name: "Rahul Rai", age: "12", occupation: "Software engineer" },
      { name: "Krisha rai", age: "22", occupation: "Doctor" },
    ],
    emeregencycontact: {
      name: "Rahul",
      relationship: "Son",
      phone: "+91-9564534567",
    },
  },
  socialmedia: {
    linkdein: "https://example.com/profiles/shashikantrai",
    github: "https://example.com/profiles/shashikantrai",
    twitter: "https://example.com/profiles/shashikantrai",
  },

  preferences: {
    theme: "dark",
    language: "english",
    timezone: "Asis/Kolkata",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    favoritecolors: ["Blue", "Red", "pink"],
  },
  bankaccounts: [
    {
      bankname: "hdfc",
      accounttype: "saving",
      accountnumber: "xxx-xxxx-xxx-0987",
      isprimary: true,
    },
  ],
  documents: {
    pancard: "ASNPR8872N",
    passportnumber: "P1234567",
    drivinglicense: "DL02345",
  },
  loginHistory: [
    { date: "2026-08-08T09:30:00Z", device: "mackbook pro", success: true },
    { date: "2026-09-08T09:30:00Z", device: "iphone", success: true },
  ],
  createdat: "2024-08-08T09:30:00Z",
  updatedat: "2025-08-08T09:30:00Z",
  lastloginat: "2022-08-08T09:30:00Z",
  getintroduction() {
    return `Hi , I am ${this.fullname},a ${this.employment.Jobtitle} from ${this.address.city}`;
  },
  getfulladdress() {
    return `${this.address.housenumber},${this.address.street},${this.address.city},${this.address.state},${this.address.postalcode}`;
  },
};
console.log(user);
console.log(user.getintroduction());
console.log(user.getfulladdress());
