const { body, validationResult } = require("express-validator");

const validateMovie = (req, res, next) => {
  body("year").isLength({ max: 4 }),
    body("title").isLength({ max: 255 }),
    body("director").isLength({ max: 255 }),
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ validationErrors: errors.array() });
      } else {
        next();
      }
    };
};

const validateUser = [
  body("email").isEmail(),

  body("firstname").isLength({ max: 255 }),

  body("lastname").isLength({ max: 255 }),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

module.exports = {
  validateMovie,
  validateUser,
};
