import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    contactName: String, 
    contactNumber: Number, 
    Email: String,
    company: String
}, {
    timestamps: true,
    collection: 'business'
});

export default mongoose.model('Business', BusinessSchema);