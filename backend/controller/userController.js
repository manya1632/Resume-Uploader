import UserModel from "../models/userModel.js";

class UserRegistration {

    static userForm = async(req, res) =>{ 
        try {
            const { fullName, email, state, gender, dob } = req.body
            const pimg = req.files['pimg'][0].filename
            const rdoc = req.files['rdoc'][0].filename
            if (fullName && email && pimg && rdoc) {
              const doc = new UserModel({
                fullName :fullName,
                email: email,
                state: state,
                gender: gender,
                dob : dob ,
                pimg : pimg,
                rdoc: rdoc
              })
              const candidate = await doc.save()
              res.status(201).send({ "status": "success", "message": "Profile Uploaded Successfully", "candidate": candidate })
            } else {
              res.status(200).send({ "status": "failed", "message": "All Fields are Required" })
            }
          } catch (error) {
            console.log(error)
          }
    
    }
}

export default UserRegistration