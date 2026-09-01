const { AppDataSource } = require('../config/data-source');
const { Question } = require('../entities/Question');
const getQuestions = async (req, res) => {
    try {
        const questionRepository = AppDataSource.getRepository(Question);
        const questions = await questionRepository.find();
        res.json(questions);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ message: "Server error" });  
   }
};
module.exports = { getQuestions };
