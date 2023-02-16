//apps entry point
const express = require('express');
const ownerRouter =  require('./routes/owners')   
const carRouter =  require('./routes/cars')
const employeeRouter =  require('./Routes/employees')
const bcrypt = require('bcrypt');                       //importing bcrypt

require('dotenv').config();

const db = require('./database/db');
const port = process.env.port

const app = express();      

 
db.connectToMongoDB();  
app.use(express.static('public'));
app.use(express.json());

app.use('/cars', carRouter);
app.use('/owners', ownerRouter);
//app.use('/owners', authenticate, ownerRouter);
app.use('/employees',  employeeRouter);

app.get("/homepage", (req,res) => {              
    res.send("Welcome to my Carlot");
    });

             //using users router


    app.post('/signin', async (req,res) =>{
        const {username, password} = req.body;
        const owner = await owner.findOne({owner})
            if (!owner){
                return res.status(401).json({
                    message:"Not a user"
                });
            }
            const isPasswordMatch = await bcrypt.compare(password, owner.password)

            if (isPasswordMatch) {
                const token = Buffer.from(`${username}:${password}`).toString('base64');
                return res.status(200).json({
                    message:"Auth successful",
                    token:token
                })
            }else {
            return res.status(401).json({
                message:"Auth failed"
            })
        }
})
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




app.listen(port, () => {
console.log(`carLot is running on http://localhost:${port}`)
});


