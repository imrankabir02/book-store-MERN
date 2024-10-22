import User from "../model/user.model.js";

export const signup = async (req,res) => {
    try {
        const {name, email, password} = req.body;

        console.log("Req body: ", req.body);

        if (!name || !email || !password) {
            return res.status(400).json({ 
                message: "Please provide all required fields" 
            });
        }

        const user = await User.findOne({email});
        
        if(user) {
            return res.status(400).json({message: "User already exists"});
        }

        const createdUser=new User({
            name,
            email,
            password
        })

        await createdUser.save();
        res.status(201).json({
            message:"User Created Successfully",
            user: {
                id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email
            }
        });

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message 
        });
    }
}