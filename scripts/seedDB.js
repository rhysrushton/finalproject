const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/finalproject"
);

const bookSeed = [
  {
    title: "Dr. Sameer Abedi",
    author: "General Practitioner",
    synopsis:
      "Dr. Abedi studied at the University of London and completed his GP training in the UK, relocating to Australia in 2012. His interest are  chronic disease management, paediatrics and skin cancer medicine. He speaks Urdu, Hindi and English ",
    date: new Date(Date.now()),
  },
  {
    title: "Dr Kabir Ahmed",
    author: "General Practitioner",
    synopsis:
      "Dr. Ahmed graduated from Dhaka Medical College, Bangladesh.  He went on to study at the University of Otago, where he attained a Master of Immunology and worked in probiotic research at Massey University, before starting a career in General Medicine.  Dr. Ahmed practiced in New Zealand for 14 years, mainly in internal medicine in a hospital setting, before relocating to Australia. He is interested in Aboriginal health, chronic care management, emergency medicine and palliative medicine. He speaks Bengali and English.",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Nasim Ahmed",
    author: "General Practitioner",
    synopsis:
      "Dr. Ahmed graduated from Chittagong Medical College, Bangladesh then moved to New Zealand where she completed her internship and undertook further hospital training.  She chose general practice as it provides an opportunity to focus on continuity of  care for the patient, their family and the community as a whole.  Dr. Ahmed obtained her fellowship in general practice from the Royal College of New Zealand in 2015, working in a group of practices for a few years before relocating to Australia.  ",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Radwan Barbandi",
    author: "General Practitioner",
    synopsis:
      "Dr. Barbandi graduated from Nishtar Medical College, Pakistan in 2003 and completed his training at the Pakistan Institute of Medical Sciences.  Dr. Barbandi has worked in the oil industry and as a medical adviser to the International Catholic Migration Commission.  He joins us from the UK.",
    date: new Date(Date.now())
  },
  {
    title: "Associate Professor Michael Burke",
    author: "General Practitioner",
    synopsis:
      "A/Prof Burke is interested in chronic and complex disease, pain management, Hepatits B & C and HIV. He speaks Swahili and English",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Yvette Castellino",
    author: "General Practitioner",
    synopsis:
      "Dr. Castellino is interested in general medicine and women's healh. She speaks Urdu and English",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Peggy Dubert",
    author: "General Practitioner",
    synopsis:
      "Dr. Dubert qualified in South Africa and moved to Australia in 2008.  She holds a Diploma in Childcare and is an Antenatal Shared Care GP.  ",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Ayesha Gunaratne ",
    author: "General Practitioner",
    synopsis:
      "Dr. Gunaratne graduated from the University of Western Sydney and completed her internship in the Blacktown network before moving to general practice training. ",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Phil Humphris",
    author: "General Practitioner",
    synopsis:
      "Dr. Humphris studied at the University of Adelaide and the University of Sydney and followed this with several years in hospital-based medicine.  In addition, he holds a Masters in International Public Health.  Dr. Humphris has worked as the Medical Officer in many remote Aboriginal communities in central Australia and will take regular time out from KRMC to continue working with these communities.  He has also undertaken extensive humanitarian work in Ethiopia, the Middle East, Sudan and other regions, is a Director of Medecins Sans Frontieres and is also Chair of the Musculoskeletal Editorial Working Group of the Remote Primary Health Care Manual (RPHCM), Central Australia. ",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Evan Kabir",
    author: "General Practitioner",
    synopsis:
      "Dr. Kabir graduated from the University of Nottingham, UK in 2004 and completed his GP training at St. Thomas’ Hospital, London, gaining experience in general medicine, paediatrics, psychiatry and sexual health.",
    date: new Date(Date.now())
  },
  {
    title: "Dr. Julia Khaled",
    author: "General Practitioner",
    synopsis:
      "Dr. Julia trained in rural Queensland and has worked in Newcastle and Albury.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
