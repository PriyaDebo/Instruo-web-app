const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const Event = require("../models/eventModel");
const User = require("../models/userModel");

exports.registerForEvent = asyncHandler(async (req, res, next) => {
  const { eventId, participantId } = req.body;
  const event = await Event.findById(eventId);
  if (!event) {
    return next(new AppError("Event Does Not Exist", 404));
  }

  const participant = await User.findById(participantId);
  if (!participant) {
    return next(new AppError("Participant Does Not Exist", 404));
  }

  event.participants.push(participantId);
  event.save();

  participant.events.push(eventId);
  participant.save();

  res.status(201).json({
    status: "success",
    message: "Registration Successful",
  });
});

exports.createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);

  res.status(201).json({
    status: "success",
    data: event,
  });
});

exports.getAllEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find({});

  res.status(200).json({
    status: "success",
    events,
  });
});

exports.getEventById = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(new AppError("Event Does Not Exist", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      event,
    },
  });
});

exports.updateEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!event) {
    return next(new AppError("Event Does Not Exist", 404));
  }

  res.status(201).json({
    status: "success",
    data: event,
  });
});

exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id);

  if (!event) {
    return next(new AppError("Event Does Not Exist", 404));
  }

  res.status(204).json({});
});

exports.getEventParticipants = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(new AppError("Event Does Not Exist", 404));
  }

  res.status(201).json({
    status: "success",
    data: {
      participants: event.participants,
    },
  });
});