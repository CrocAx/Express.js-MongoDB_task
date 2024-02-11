import mongoose from 'mongoose';

// Define the schema for contacts
const contactSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    twitter: {
        type: String
    },
    avatar: {
        type: String
    },
    notes: {
        type: String
    }
}, 
{
    // Specify the option to transform _id to id
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

// Create a mongoose model for contacts
const Contact = mongoose.model('Contact', contactSchema);

// Export the model
export default Contact;
