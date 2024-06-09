// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv"
// import ProductSchema from "./Schemas/product.schema.js";

// import cors from "cors";

// import cookieParser from 'cookie-parser';
// import AllRoutes from "./Routes/index.js"



// const app = express();
// var corsOptions = {
//   origin : ["http://localhost:3000","https://myntra.com", "https://react-1-three-alpha.vercel.app","https://react-1-woad-five.vercel.app"],
//   credentials : true
// };
// app.use(cors(corsOptions)); 
// dotenv.config()
// app.use(express.json());

// app.use(cookieParser());




// app.get('/', (req, res) => {
//   res.send("working....");
// });

// app.use('/api/v1',AllRoutes)





// app.post("/unwind-project",async(req,res)=>{
//   try{
// const aggreation = [
//   {$unwind :"$tags"},
//   {$project: {name: 1 , price: 1}}
// ]
// const filteredproducts = await ProductSchema.aggregate(aggreation);
// console.log(filteredproducts)
// res.send(true)
//   }catch(error){
//     return res.json({success : false , error})
//   }
// })

// mongoose.connect(process.env.MONGODB_URL).then(()=>{
//   console.log("DB connected")
// });

// app.listen(3001,()=>{
//   console.log("server listning on 3001")
// });

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AllRoutes from './Routes/index.js';
import ProductSchema from './Schemas/product.schema.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: ["http://localhost:3000", "https://myntra.com", "https://react-1-three-alpha.vercel.app", "https://react-1-woad-five.vercel.app"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send("working....");
});

app.use('/api/v1', AllRoutes);

app.post("/unwind-project", async (req, res) => {
  try {
    const aggregation = [
      { $unwind: "$tags" },
      { $project: { name: 1, price: 1 } }
    ];
    const filteredProducts = await ProductSchema.aggregate(aggregation);
    console.log(filteredProducts);
    res.send(true);
  } catch (error) {
    return res.json({ success: false, error });
  }
});

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB connected");
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import AllRoutes from './Routes/index.js';
// import ProductSchema from './Schemas/product.schema.js';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3001;

// const corsOptions = {
//   origin: [
//     "http://localhost:3000",
//     "https://myntra.com",
//     "https://react-1-three-alpha.vercel.app",
//     "https://react-1-woad-five.vercel.app"
//   ],
//   credentials: true
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.send("working....");
// });

// app.use('/api/v1', AllRoutes);

// app.post("/unwind-project", async (req, res) => {
//   try {
//     const aggregation = [
//       { $unwind: "$tags" },
//       { $project: { name: 1, price: 1 } }
//     ];
//     const filteredProducts = await ProductSchema.aggregate(aggregation);
//     console.log(filteredProducts);
//     res.send(true);
//   } catch (error) {
//     return res.json({ success: false, error });
//   }
// });

// mongoose.connect(process.env.MONGODB_URL).then(() => {
//   console.log("DB connected");
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error.message);
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });



