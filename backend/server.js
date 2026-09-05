const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const enquiryRoute = require("./routes/enquiryRoutes")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/enquiries", enquiryRoute)
app.get("/", (req, res) => {
    res.json({
        message: "PJ Jewellery API is running",
    })
})

app.get("/api/test", (req, res) => {
    res.json({
        success: true, 
        message: "Backend connection successful",
    })
})

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected successfully")
    const PORT = process.env.PORT || 5001

    app.listen(PORT, () => {
        console.log(`PJ Jewellery backend running on port port ${PORT}`)
    })
})
.catch((error) => {
    console.error("MongoDB connection failed:", error)
})
