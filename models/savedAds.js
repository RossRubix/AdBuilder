const mongoose = require('mongoose')
const shortId = require('shortid')
const path = require('path');
const bannerBasePath = 'uploads'

const savedAdsSchema = new mongoose.Schema({
  pageHeader: {
    type: String
  },
  description: {
    type: String
  },
  caption: {
    type: String
  },
  headline: {
    type: String
  },
  message: {
    type: String
  },
  longUrl: {
    type: String
  },
  logoFilename: {
    type: String
  },
  bannerFile: {
    type: Buffer
  },
  shortUrl: {
    type: String,
    default: shortId.generate()
  }
})

// savedAdsSchema.virtual('bannerPath').get(function() {
//   if (this.bannerFile != null) {
//     return path.join('/', bannerBasePath, this.bannerFile.name)
//   }
// })

module.exports = mongoose.model('SavedAds', savedAdsSchema)
module.exports.bannerBasePath = bannerBasePath
