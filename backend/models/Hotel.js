import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    required: false
  },
  title: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: false
  },
  rooms: {
    type: [String],
    required: false
  },
  cheapestPrice: {
    type: Number,
    required: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema)