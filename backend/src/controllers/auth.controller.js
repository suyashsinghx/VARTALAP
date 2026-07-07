
export async function checkAuth(req, res, next) {

    if(!req.user){
        return res.status(401).json({message:" Unauthorized"});
    }

    res.status(200).json(req.user);
};

//it sends the response if the user is or isn't authenticated by user.req that is sent by the protectRoute