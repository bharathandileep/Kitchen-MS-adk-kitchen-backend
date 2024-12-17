const mongoose = require('mongoose');
const Company = require('../Models/AssociatesModel');

// Check if company_id is unique
// const isCompanyIdUnique = async (company_id) => {
//     const company = await Company.findOne({ company_id });
//     if (company) {
//         throw new Error('company_id already exists');
//     }
// };

// Create a new company
exports.createCompany = async (req, res) => {
    // const { company_id } = req.body;

    try {
        // await isCompanyIdUnique(company_id);

        const newCompany = new Company(req.body);
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided
        const skip = (page - 1) * limit;
    
        const totalItems = await Company.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
    
        const company = await Company.find().skip(skip).limit(limit);
        res.json({
          status: '200 OK',
          message: 'Customers retrieved successfully',
          data: company,
          pagination: {
            totalItems,
            totalPages,
            currentPage: page,
            itemsPerPage: limit
          }
        });
     } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific company by ID
exports.updateCompany = async (req, res) => {
    const { company_id } = req.body;

    try {
        const existingCompany = await Company.findById(req.params.id);
        if (!existingCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // if (company_id && company_id !== existingCompany.company_id) {
        //     await isCompanyIdUnique(company_id);
        // }

        Object.assign(existingCompany, req.body);
        const updatedCompany = await existingCompany.save();
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific company by ID
exports.deleteCompany = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const deletedCompany = await Company.findByIdAndDelete(id);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
