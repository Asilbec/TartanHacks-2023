import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "1",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "2",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text: "When complicated computer programs were being written during the 1960s through the 1980s, computer engineers used a two-digit code for the year. The '19' was left out. Instead of a date reading 1970, it read 70. Engineers shortened the date because data storage in computers was costly and took up a lot of space."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "3",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text: "As the year 2000 approached, computer programmers realized that computers might not interpret 00 as 2000, but as 1900. Activities that were programmed on a daily or yearly basis would be damaged or flawed. As December 31, 1999, turned into January 1, 2000, computers might interpret December 31, 1999, turning into January 1, 1900."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "4",
      image: "/ph3.jpg",
      aspect: 0.665,
      text: "Banks, which calculate interest rates on a daily basis, faced real problems. Interest rates are the amount of money a lender, such as a bank, charges a customer, such as an individual or business, for a loan. Instead of the rate of interest for one day, the computer would calculate a rate of interest for minus almost 100 years!"
    },
    {
      offset: 5,
      factor: 1.75,
      header: "5",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text: "Centers of technology, such as power plants, were also threatened by the Y2K bug. Power plants depend on routine computer maintenance for safety checks, such as water pressure or radiation levels. Not having the correct date would throw off these calculations and possibly put nearby residents at risk."
    },
    {
      offset: 7,
      factor: 1.05,
      header: "The Factory",
      image: "/photo-1548191265-cc70d3d45ba1.jpeg",
      aspect: 1.77,
      text: "In the end, there were very few problems. A nuclear energy facility in Ishikawa, Japan, had some of its radiation equipment fail, but backup facilities ensured there was no threat to the public. The U.S. detected missile launches in Russia and attributed that to the Y2K bug. But the missile launches were planned ahead of time as part of Russias conflict in its republic of Chechnya. There was no computer malfunction."
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
<<<<<<< HEAD
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 4, factor: 4 },
=======
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0, factor: 4 },
>>>>>>> dd41249ce538381b1d0d1bc713aeeffd12198029
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
