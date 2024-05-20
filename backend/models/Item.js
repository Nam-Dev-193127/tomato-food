import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
  name: String,
  // Thêm trường text để hỗ trợ tìm kiếm toàn văn
  description: { type: String, index: true }
});

const Item = mongoose.model('Item', itemSchema);

export default Item
