// import mongoose  from "mongoose";
// const onlineUniversitySchema = new mongoose.Schema({
//   universityName: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   location: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   establish: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   shortDescription: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   // About section (3 objects)
//   about: [
//     {
//       about1: { type: String, required: true },
//       about2: { type: String, required: true },
//       about3: { type: String, required: true }
//     }
//   ],

//   // Online education (2 objects)
//   onlineEducation: [
//     {
//       edu1: { type: String, required: true },
//       edu2: { type: String, required: true }
//     }
//   ],

//   // University programs
//   universityProgram: [
//     {
//       program: { type: String, required: true },
//       specialization: { type: String, required: true }
//     }
//   ],

//   // Image (optional)
//   image: {
//     type: String, // could be a URL or file path
//     required: false
//   },

//   // University Ranking (3 objects)
//   universityRanking: [
//     {
//       rank1: { type: String, required: true },
//       rank2: { type: String, required: true },
//       rank3: { type: String, required: true }
//     }
//   ]

// }, { timestamps: true });

// // Create model
// const OnlineUniversity = mongoose.model("OnlineUniversity", onlineUniversitySchema);

// module.exports = OnlineUniversity;
