module.exports = (req, res, next) => {
  let content = req.body;
  if (!content) {
    res.status(400).json({
      message: "Ooops! kindly populate the fields",
    });
  } else if (!content.senderemail) {
    res.status(400).json({
      message: "I'd love to write you back, kindly input your email",
    });
  } else if (!content.message) {
    res.status(400).json({
      message: "Oops! kindly type in a message",
    });
  } else {
    next();
  }
};
