import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const School = mongoose.model('School', SchoolSchema);

export default School;

