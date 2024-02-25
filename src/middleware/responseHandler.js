module.exports = (req, res, next) => {
  // console.log({req})
  if (Object.keys(req.responseObject).length > 0) {
    const responseObj = req.responseObject

    //console.log(responseObj)

    if (responseObj.hasOwnProperty('code')) {
      res.status(responseObj.code)
      delete responseObj['code']
    }
    res.send(responseObj)
  }
  next()
}
