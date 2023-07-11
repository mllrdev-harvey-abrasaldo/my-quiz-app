import type IQuestion from "@/interface/question";

const questionData: IQuestion[] = [
    {
        id: 1,
        question: 'What is the part of the plant that uses light to make food?',
        options: [
            'leaves',
            'roots',
            'stem',
            'flowers',

        ],
        answer: 1,
    },

    {
        id: 2,
        question: 'This part hold the plant in the ground and takes water from the soil.',
        options: [
            'stem',
            'leaves',
            'flowers',
            'roots',

        ],
        answer: 4,
    },

    {
        id: 3,
        question: 'Which group of animal does not have a backbone?',
        options: [
            'fish',
            'bird',
            'arachnid',
            'amphibian',

        ],
        answer: 3,
    },

    {
        id: 4,
        question: 'Use the numbers below to answer the question. 88, ___, 66, 55',
        options: [
            '44',
            '87',
            '78',
            '77',

        ],
        answer: 4,
    },

    {
        id: 5,
        question: 'Which is the BEST unit to measure the distance between Nebraska and Maine?',
        options: [
            'foot',
            'inch',
            'mile',
            'yard',

        ],
        answer: 3,
    },

    {
        id: 6,
        question: 'Fishes uses their ________ to breathe in water.',
        options: [
            'tail',
            'gills',
            'lungs',
            'fins',

        ],
        answer: 2,
    },
];

export default questionData;