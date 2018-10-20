/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    processRegister: async (req, res) => {
        let {username, password} = req.body;
        try {
            let userCreate = await User.create({username, password}).fetch();
            if (userCreate) {
                req.session.me = username;
                console.log(req.session.me);
                res.redirect('/me', {username: req.session.me});
            }
            else console.log("error");
        } catch (error) {
            res.send(400, {error})
        }

    },

    processLogin: async (req, res) => {
        let {username, password} = req.body;
        try {
            let user = await User.findOne({username, password});
            if (user) {
                req.session.me = username;
                res.redirect('/me');
            }
            else console.log("error");
        } catch (error) {
            res.send(400, {error})
        }
    },
    logout: async (req, res) => {
        res.redirect('/login');
    }

};

