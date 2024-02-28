import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    member: { type: mongoose.Types.ObjectId, ref: 'Member', required: true },
});

export const PaymentModel = mongoose.model('Payment', PaymentSchema);