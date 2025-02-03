const { createUser } = require('../models/userModel');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const { getUserById, getUserByEmail } = require('../models/userModel');

//argon used for hashing passwords
const argon2 = require('argon2');

//funckija, kuri grąžina token'ą, skirta token'ui kurti, perduodant user id
const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

//funkcija, kuri išsiunčia cookie į naršyklę
const sendTokenCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);
  // res.setHeader('jwt', token);
};

//1. user signup and then login function
exports.signup = async (req, res, next) => {
  try {
    const newUser = req.body;

    const hash = await argon2.hash(newUser.password);
    newUser.password = hash;

    const createdUser = await createUser(newUser);

    if (!createdUser) {
      throw new AppError('User not created', 400);
    }

    //po signup, iš karto login:
    const token = signToken(createdUser.id);

    //įrašime token'ą į naršyklės cookie, expires date turime nurodyti data, datą sukursime iš milisekundžių
    sendTokenCookie(token, res);

    // hide user password and id before sending to client
    createdUser.password = undefined;
    createdUser.id = undefined;

    res.status(201).json({
      status: 'success',
      data: createdUser,
    });
  } catch (error) {
    next(error);
  }
};

//2. user login function
exports.login = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);

    const token = signToken(user.id);
    sendTokenCookie(token, res);

    // hide user password and id before sending to client
    user.password = undefined;
    user.id = undefined;

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

//3. authentification middleware, protecting routes from unregistered user

exports.protect = async (req, res, next) => {
  try {
    console.log(req);

    //you need to istall cookie-parser and write middleware to use req.cookies
    let token = req.cookies?.jwt;

    if (!token) {
      throw new AppError(
        'You are not logged in! Please log in to get accessssss.',
        401
      );
    }

    // 2) Verification token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    // 3) Check if user still exists
    const currentUser = await getUserById(decoded.id);
    if (!currentUser) {
      throw new AppError(
        'The user belonging to this token does no longer exist.',
        401
      );
    }

    // GRANT ACCESS TO PROTECTED ROUTE, add user to req object
    req.user = currentUser;
    next();
  } catch (error) {
    next(error);
  }
};

exports.allowAccessTo = (...roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        throw new AppError(
          'You do not have permission to perform this action',
          403
        );
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

exports.logout = (req, res) => {
  return res.clearCookie('jwt').status(200).json({
    status: 'you are logged out',
  });
};

exports.getAuthenticatedUser = (req, res) => {
  try {
    const authUser = req.user;
    const authPassword = req.user.password;
    res.json(authUser);
  } catch (error) {
    next(error);
  }
};
