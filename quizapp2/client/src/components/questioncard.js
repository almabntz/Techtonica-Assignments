const QuestionCard = ({question}) => {
    
  return (
    <div className={"question-section"}>
      <div className='question-text'>{question.question}</div>
      <div className='answer-section'>
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
      </div>
    </div>
  );
};

export default QuestionCard;