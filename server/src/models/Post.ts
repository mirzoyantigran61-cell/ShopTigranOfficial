import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  category: { type: String, required: true },
  location: String,
  images: [{ type: String }],
  videos: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  views: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isPromoted: { type: Boolean, default: false },
  isPinned: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'sold', 'deleted'], default: 'active' },
  contactInfo: {
    telegram: String,
    whatsapp: String,
    instagram: String,
    phone: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Post', postSchema);
