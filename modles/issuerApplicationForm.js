const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema



const issuerApplicationSchema = new mongoose.Schema(
  {
    companyname: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    rcnum: {
        type: String,
        trim: true
      },
    dateofincorporation: {
        type: String,
        trim: true
      },
     
      registeredAddress: {
        type: String,
        trim: true
      },
      authorisedshare: {
        type: Number,
        default: 0
      },
      industry: {
        type: String,
        trim: true,
      },
      estimatedAnnualTurnOver: {
        type: Number,
        default: 0
      },
      typeofsecurity: {
        type: String,
        trim: true
      },
      userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      projectDetails: {
        type: String,
        trim: true,
      },
      projectDescription: {
        type: String,
        trim: true,
      },
      estimatedsumtoachieveproject: {
        type: Number,
        default: 0
      },
      file: {
        data: Buffer,
        contentType: String,
        path: String,
        name: String
      },
      principalOfficerContactName: {
        type: String,
        trim: true,
      },
      principalOfficerPhonenumber: {
        type: Number,
        default: 0
      },
      principallOfficerEmail: {
        type: String,
        trim: true,
      },
      enquiriesContactName: {
        type: String,
        trim: true,
      },
      enquiriesPhonenumber: {
        type: Number,
        default: 0
      },
      enquiriesEmail: {
        type: String,
        trim: true,
      },
      complianceContactName: {
        type: String,
        trim: true,
      },
      compliancePhonenumber: {
        type: Number,
        default: 0
      },
      complianceEmail: {
        type: String,
        trim: true,
      },

      status: {
        type: Number,
        default: 0
      },


   
  },
  { timestamps: true }
);

// virtual field



module.exports = mongoose.model("IssuerApplication", issuerApplicationSchema);