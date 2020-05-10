const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const Schema = mongoose.Schema;


const IpSchema = new mongoose.Schema(
  {
    cpuIp: String,
  },
  { timestamps: true }
);
 
const IpItem = mongoose.model("IpItem", IpSchema);


const blogSchema = new mongoose.Schema({    
    title: {
        type: String,
        trim: true,
        required: true,
      },
      description: {
        type: String,
        trim: true,
        required: true,
      },
    image: {
        data: Buffer,
        contentType: String,
        path:String,
        name: String
    },
    status: {
        type: Number,
        default: 0
      },
      likes: {
        type: Number,
        default: 0
      },
      userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },

      // ipAddress: {
      //   data: Buffer,
      //   cpuIp: String,
       
      // },
     
      ipAddress: [IpSchema]
}, 
  {timestamps: true}
);


const Blog = mongoose.model("Blog", blogSchema);


module.exports = {Blog, IpSchema};