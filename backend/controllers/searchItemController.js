import Item from "../models/Item.js"

const searchItem = async(req,res) => {
    const { query } = req.query; // Lấy từ khóa tìm kiếm từ query params
  try {
    const items = await Item.find({ $text: { $search: query } }); // Sử dụng $text để tìm kiếm toàn văn
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

export {searchItem}