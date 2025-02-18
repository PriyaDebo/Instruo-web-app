const mongoose = require("mongoose");
const slugify = require("slugify");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    unique: true,
  },
  subtitle: String,
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: {
      values: ["team", "individual"],
      message: "Not a valid type",
    },
    default: "individual",
  },
  desc: {
    type: String,
    required: true,
  },
  image: String,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  prizes: [
    {
      standing: String,
      reward: String,
      color: String,
    },
  ],
  schedule: [
    {
      title: String,
      date: Date,
      time: String,
      duration: String,
      venue: String,
    },
  ],
  contacts: [
    {
      name: String,
      phone: String,
      email: String,
    },
  ],
  rules: [String],
  faq: [
    {
      question: String,
      answer: String,
    },
  ],
  // participants: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "User",
  //   },
  // ],
  // teams: [
  //   {
  //     teamId: {
  //       type: String,
  //       unique: true,
  //     },
  //     teamName: String,
  //     college: String,
  //     participants: [
  //       {
  //         type: mongoose.Schema.ObjectId,
  //         ref: "User",
  //       },
  //     ],
  //   },
  // ],
});

eventSchema.pre("save", function (next) {
  this.eventId = slugify(this.title, { lower: true });
  next();
});

// eventSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "participants",
//     select:
//       "-__v -events -passwordChangedAt -passwordResetToken -passwordResetExpired",
//   });

//   this.populate({
//     path: "teams.participants",
//     select:
//       "-__v -events -passwordChangedAt -passwordResetToken -passwordResetExpired",
//   });

//   next();
// });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
