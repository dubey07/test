const Company = require('../model/Company');
const Review = require('../model/Review');

exports.createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Comapny Created Successfully",
            data: company
        })
        res.status(201).json(company);
    } catch (err) {
        res.status(400).json({ error: err.message }); 
    }
};

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        return res.status(200).json({
            success: true,
            message: "Companied Fetched Successfully",
            data: companies
        })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.body.id)
        .populate({
            path: 'reviews',   // This is the field in Company schema
            model: 'Review',   // Correct model name for the Review model (case-sensitive)
        });
        if (!company) return res.status(404).json({ error: 'Company not found' });
        return res.status(200).json({
            success: true,
            data: company,
            message: "Company data Fetched Successfully"
        });
    } catch (err) { 
        res.status(400).json({ error: err.message });
    }
};

exports.createReview = async (req, res) => {
    try {
        const company = await Company.findById(req.body.company);
        if (!company) return res.status(404).json({ error: 'Company not found' });

        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getReviewsForCompany = async (req, res) => {
    try {
        const reviews = await Review.find({ company: req.params.companyId }).populate('company');
        res.json(reviews);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('company');
        if (!review) return res.status(404).json({ error: 'Review not found' });
        res.json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

