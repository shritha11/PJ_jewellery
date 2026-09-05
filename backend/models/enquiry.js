const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true
        },
        city: {
            type: String,
            trim: true,
        },
        piece: {
            type: String,
            required: true,
            trim: true,
        }, 
        occasion: {
            type: String,
            trim: true,
        }, 
        message: {
            type: String,
            trim: true,
        }, 
        status: {
            type: String, 
            enum: ["New", "Contacted", "Completed"],
            default: "New",
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Enquiry", enquirySchema)