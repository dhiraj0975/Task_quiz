const { EntitySchema } = require('typeorm');

const Question = new EntitySchema({
    name: "Question",
    tableName: "questions",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        text: {
            type: "text"
        },
        option1: {
            type: "varchar"
        },
        option2: {
            type: "varchar"
        },
        option3: {
            type: "varchar"
        },
        option4: {
            type: "varchar"
        },
        correctOption: {
            type: "int"
        },
        explanation: {
            type: "text",
            nullable: true
        }
    }
});

module.exports = { Question };
