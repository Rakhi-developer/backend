import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.SChema({},{timestamps:true})


export const medicalRecord=  new mongoose.Schema("medicalRecord",medicalRecordSchema)