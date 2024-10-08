import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Booked Successfully",
        data: savedBooking,
      });
  } catch (error) {
    res
      .status(200)
      .json({
        success: false,
        message: "Internal Server Error",
      });
  }
};

export const getBooking = async (req,res) => {
    const id = req.params.id;
    try {
        const book = await Booking.findById(id);
        res
      .status(200)
      .json({
        success: true,
        message: "Successful",
        data: book,
      });
    } catch (error) {
        res
      .status(404)
      .json({
        success: false,
        message: "Not Found",
      });
    }
}
export const getAllBooking = async (req,res) => {
    const id = req.params.id;
    try {
        const books = await Booking.find();
        res
      .status(200)
      .json({
        success: true,
        message: "Successful",
        data: books,
      });
    } catch (error) {
        res
      .status(404)
      .json({
        success: false,
        message: "Internal Server Error",
      });
    }
}