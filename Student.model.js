import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  First_Name: { type: String, required: true },
  Middle_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Gender: { type: String, required: true },
  Date_of_Birth: { type: String, required: true },
  Age: { type: String, required: true },
  Mobile_Number: { type: String, required: true },
  EmailId: { type: String, required: true },
  Religion: { type: String, required: true },
  Caste: { type: String, required: true },
  Address: { type: String, required: true },
  Bloodgroup: { type: String, required: true },
});

// Export the model using ES module syntax
export default mongoose.model('Student', studentSchema);