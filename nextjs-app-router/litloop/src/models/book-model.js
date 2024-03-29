import mongoose, {Schema} from "mongoose";

const schema = new Schema({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  author: {
    required: true,
    type: String
  },
  cover: {
    required: true,
    type: String
  },
  genre: {
    required: true,
    type: String
  },
  pages: {
    required: true,
    type: Number
  },
  isRented: {
    required: true,
    type: Boolean
  },
  stock: {
    required: true,
    type: Number
  },
  rentPrice: {
    required: true,
    type: Number
  },
  sellPrice: {
    required: true,
    type: Number
  },
  sold: {
    required: true,
    type: Number
  },
  ISBN: {
    required: true,
    type: String
  },
  renterIds: {
    required: false,
    type: Array
  }
});

export const bookModel = mongoose.models.books 
                        ?? mongoose.model("books", schema);
