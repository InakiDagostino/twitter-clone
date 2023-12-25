import jwt, { decode } from "jsonwebtoken"

export function verification(token){
	let finalId = null
	if (token) {
		if(jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
			
			if (err) {
				return [false, finalId];
				//res.json({ authenticated: false });
			} else {
				finalId = decoded.id
				return [true, finalId];
				//res.json({ authenticated: true });
			}
		})){
			return [true, finalId];
		}else{
			return [false, finalId];
		}
	} else {
		return [false, finalId];
	}
}