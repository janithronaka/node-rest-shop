const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const checkAuth = require('../middlewear/check-auth');

router.post('/signup', UserController.users_signup_user);

router.post('/login', UserController.users_user_login);

router.delete('/:userId', checkAuth, UserController.users_delete_user);

router.get('/', UserController.users_get_all);

module.exports = router;