export const routeBodyValidation = (schema) => (req, res, next) => {
  try {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: 400,
        message: error.details[0].message
      });
    }

    return next();
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: `error is ${err.message}`
    });
  }
};
