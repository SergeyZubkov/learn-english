
/**
 * Defining a Word Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */
import mongoose from 'mongoose';
// Other oauthtypes to be added
import toJson from 'meanie-mongoose-to-json';

import moment from 'moment';
/*
 Word Schema
 */

const WordSchema = new mongoose.Schema({
  ru: { type: String},
  en: {type: String},
  createdDate: {
  	day: Number,
  	month: Number,
  	year: Number,
  	full: Date
  },
  repetitionDate: {type: Date},
  repetitionCount: {type: Number},
  attemptCount: {type: Number}
});

WordSchema.index({"createdDate.year": -1, "createdDate.month": -1, "cretedDate.day": -1});

WordSchema.virtual('createdDateISO').set(function(dateISOString) {
  const d = moment(dateISOString);

  this.createdDate = {
    day: d.date(),
    month: d.month(),
    year: d.year(),
    full: dateISOString
  }
})

WordSchema.plugin(toJson);

/**
 * Statics
 */

WordSchema.statics = {};

export default mongoose.model('Word', WordSchema);