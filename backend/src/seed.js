const { AppDataSource } = require('./config/data-source');
const { Question } = require('./entities/Question');

const seedDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Data Source initialized for seeding...");

        const questionRepository = AppDataSource.getRepository(Question);

        await questionRepository.clear();
        console.log("Existing questions cleared.");

        const sampleQuestions = [
            {
                text: "React mein hooks kab introduce huye the?",
                option1: "16.0",
                option2: "16.8",
                option3: "17.0",
                option4: "18.0",
                correctOption: 2,
                explanation: "React 16.8 mein Hooks (useState, useEffect etc.) introduce kiye gaye the."
            },
            {
                text: "Props pass karne ke liye kya use hota hai?",
                option1: "Parent to Child",
                option2: "Child to Parent",
                option3: "Sibling to Sibling",
                option4: "None of the above",
                correctOption: 1,
                explanation: "React mein data unidirectional flow hota hai, yani Parent se Child ki taraf."
            },
            {
                text: "Virtual DOM ka main purpose kya hai?",
                option1: "Direct DOM manipulation",
                option2: "Performance optimization",
                option3: "Database connectivity",
                option4: "Server-side rendering",
                correctOption: 2,
                explanation: "Virtual DOM actual DOM manipulation ko kum karke performance improve karta hai."
            },
            {
                text: "React mein 'Key' prop ka use kyun kiya jata hai?",
                option1: "Styling ke liye",
                option2: "State update karne ke liye",
                option3: "List items ko uniquely identify karne ke liye",
                option4: "Components ko delete karne ke liye",
                correctOption: 3,
                explanation: "Keys React ko help karti hain identify karne mein ki kaun sa item change, add, ya remove hua hai."
            },
            {
                text: "JSX ka full form kya hai?",
                option1: "JavaScript XML",
                option2: "Java Syntax Extension",
                option3: "JSON XML",
                option4: "JavaScript Extension",
                correctOption: 1,
                explanation: "JSX stands for JavaScript XML, ye JavaScript ke andar HTML likhne ki facility deta hai."
            },
            {
                text: "State aur Props mein kya difference hai?",
                option1: "Dono same hain",
                option2: "Props mutable hain, State immutable",
                option3: "State internal hai, Props external",
                option4: "Props sirf functions mein use hote hain",
                correctOption: 3,
                explanation: "State component ka internal data hota hai, jabki Props parent se pass kiye jate hain."
            },
            {
                text: "useEffect hook ka use kab hota hai?",
                option1: "Render hone se pehle",
                option2: "Side effects handle karne ke liye",
                option3: "Variable declare karne ke liye",
                option4: "Sirf API call ke liye",
                correctOption: 2,
                explanation: "useEffect ka use data fetching, subscriptions, ya manual DOM changes jaise side effects ke liye hota hai."
            },
            {
                text: "React component kab re-render hota hai?",
                option1: "Sirf props change hone par",
                option2: "Sirf state change hone par",
                option3: "State ya Props change hone par",
                option4: "Hamesha re-render hota hai",
                correctOption: 3,
                explanation: "Jab bhi component ki state ya props change hote hain, React use automatically re-render karta hai."
            }
        ];

        await questionRepository.save(sampleQuestions);
        console.log("8 Sample questions seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Error during seeding:", error);
        process.exit(1);
    }
};

seedDatabase();
