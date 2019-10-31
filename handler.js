'use strict'
const uuidv4 = require('uuid/v4')
const AWS = require('aws-sdk')
AWS.config.update({ region: process.env.REGION || 'us-east-1' })
const s3 = new AWS.S3()

module.exports = {
  hello: async(event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello! you are now connected!'
        },
        null,
        2
      ),
    }
  },
  upload: async(event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Uploading image'
        },
        null,
        2
      ),
    }
  }
}