import mongoose, { Schema ,model} from "mongoose";

const userSchema = new Schema({
  name : String,
  email : String,
  password : String,
  role : String,
  cart : [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  Wishlist : [String]
})
const UserSchema = model("users",userSchema);

export default UserSchema;
