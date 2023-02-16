async function authenticate(req, res, next) {
    if (req.headers.authorization) {
    const authHeader = req.headers.authorization.split(' ');
    const authType = authHeader [0]; 
    const authValue = authHeader[1];
            
        if (authType === 'Basic') {        
            const [username, password] = Buffer.from(authValue, 'base64').toString().split(':');
        
            const user = await users.findOne({username});
        
            if (!user) {
            return res.status(401).json({
                message: 'Authentication failed'
            });
            }
    //compare passwords
            const isPasswordMatch = await bcrypt.compare(password, user.password)
            if (isPasswordMatch) {     
            req.user = user.username;              
            next();                                 
            } else { 
            return res.status(401).json({     
                message: 'Username or Password is incorrect'
            });
            }
            } else {
                return res.status(401).json({
                message: 'Auth failed'
            });
        }
    } else {
        return res.status(401).json({
            message: 'Auth header not present'
        });
    }
}

