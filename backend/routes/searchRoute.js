import express from "express"
import {searchItem} from "../controllers/searchItemController.js"

const searchRouter = express.Router()

searchRouter.get("/search",searchItem)

export default searchRouter

