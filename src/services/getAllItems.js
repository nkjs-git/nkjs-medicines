const getAllItems = async function (req, res) {
  try {
    const { body: { input } } = req
    console.log({ input })
    if (typeof input !== 'string') {
      return { success: false, code: 404, message: 'Please send string type to encode' }
    }
    const base64EncodedStr = Buffer.from(input).toString('base64'); //btoa(input)
    return { success: true, code: 200, data: { rawData: input, base64EncodedData: base64EncodedStr } };
  } catch (err) {
    const { code, message, ...rest } = err
    return { success: false, code: code || 404, message: message || 'Error occurred encoding input data', ...rest }
  }
}

module.exports = {
  getAllItems
}