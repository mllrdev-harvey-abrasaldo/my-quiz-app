interface IQuestion {
    id: number,
    question: string,
    options: [
        string,
        string,
        string,
        string,
    ],
    answer: number,
};

export default IQuestion;