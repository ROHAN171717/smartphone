const Smartphone=require('./../models/mobileModel')


//get all smartphones
exports.getPhones=async (req,res)=>{
    try{
        const phones=await Smartphone.find();
        res.status(200).json(phones);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the smartphone in database
exports.addPhone = async (request, response) => {
    const phone = request.body;
    
    const newPhone = new Smartphone(phone);
    try{
        await newPhone.save();
        response.status(201).json(newPhone);
    } catch (error){
        response.status(409).json({ message: error.message});  
    }
}

// Get a smartphone by id
exports.getPhoneById = async (request, response) => {
    try{
        const phone = await Smartphone.findById(request.params.id);
        response.status(200).json(phone);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited smartphone in the database
exports.editPhone = async (request, response) => {
    let phone = request.body;

    const editPhone = new Smartphone(phone);
    try{
        await Smartphone.updateOne({_id: request.params.id}, editPhone);
        response.status(201).json(editPhone);
    } catch (error){
        response.status(409).json({ message: error.message}); 
        console.log(editPhone._id);
          
    }
}

// deleting data of phone from the database
exports.deletePhone = async (request, response) => {
    try{
        await Smartphone.deleteOne({_id: request.params.id});
        response.status(201).json("Phone deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}