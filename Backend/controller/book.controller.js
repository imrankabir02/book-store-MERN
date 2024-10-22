import Book from "../model/book.model.js";

export const getBook=async(req, res) => {
    try {
        const books = await Book.find();  // Assuming you're using Mongoose
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving books",
            error: error.message
        });
    }
};