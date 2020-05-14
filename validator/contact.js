exports.contactSignupValidator = (req, res, next) => {
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max:32
        });
       
        const errors = req.validationErrors()
        if (errors){
            const firstError = errors.map(error => error.msg)[0];
            return res.status(400).json({error: firstError});
        }
    
        next();
    };