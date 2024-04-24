import mongoose from "mongoose";
const testimonialSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

const Testimonials = mongoose.models.Testimonials||mongoose.model("Testimonials", testimonialSchema);
export default Testimonials;