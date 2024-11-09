const express=require('express');
const bodyParser=require('body-parser');

const router=express.Router();
const Enquiry=require('../models/model');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/Enquiry', async (req, res) => {
    try {
        const Enquirys = await Enquiry.find().sort({ date: -1 });
        res.json(Enquirys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/Enquiry',async(req,res)=>{
    const enquiry=new Enquiry({
        ProductName:req.body.ProductName,
        ManufactureID:req.body.ManufactureID,
        ProductID:req.body.ProductID
    });

    try{
        const newEnquiry=await enquiry.save();
        res.status(201).json(newEnquiry);
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/Enquiry/:id', async (req,res) => {
    try {
        const upadatedEnquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(upadatedEnquiry);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/Enquiry/:id', async (req,res) => {
    try {
        await  Enquiry.findByIdAndDelete(req.params.id);
        res.json({ message: 'Enquiry deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports =router;