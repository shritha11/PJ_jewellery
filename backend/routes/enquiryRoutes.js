const express = require("express")
const Enquiry = require("../models/enquiry")

const router = express.Router()

router.post("/", async(req,res) => {
    try {
        const {
            name, 
            phone,
            email,
            city,
            piece,
            occasion,
            message,
        } = req.body
        if (!name || !phone || !piece) {
            return res.status(400).json({
                success: false,
                message: "Name, phone, and jewellery piece are required",
            })
        }

        const enquiry = new Enquiry({
            name,
            phone,
            email, 
            city,
            piece, 
            occasion,
            message,
        })

        const savedEnquiry = await enquiry.save()

        res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully",
            enquiry: savedEnquiry,
        })
    } catch(error) {
        console.error("Error creating enquiry:", error)
        res.status(500).json({
            success: false,
            message: "Failed to submit enquiry",
        })

    }
})

module.exports = router