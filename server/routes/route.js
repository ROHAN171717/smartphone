const express=require('express');
const smartphoneController=require('./../controller/smartphoneController')

const router = express.Router();

router.get('/', smartphoneController.getPhones);
router.post('/add', smartphoneController.addPhone);
router.get('/:id', smartphoneController.getPhoneById);
router.put('/:id', smartphoneController.editPhone);
router.delete('/:id', smartphoneController.deletePhone);

module.exports=router;