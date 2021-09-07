import { Mongoose } from "mongoose";


const { Schema } = Mongoose;

const customerInfo = new Schema ({
    FirstName: String,
    LastName: String,
    Email: String,
    password: String,
    PhoneNumber: Number,
    Address: String,
    City: String,
    CurrentOrder: {
        currentOrderInfo: String
    }
});