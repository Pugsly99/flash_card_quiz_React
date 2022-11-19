import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';

//test data
const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'what is React?',
    answer: 'javascript libray',
    options: ['2', '3', '4', '5'],
  },
  {
    id: 2,
    question: 'what is JSX?',
    answer: 'javascript XML',
    options: ['2', '3', '4', '5'],
  },
];

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div className="App">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default App;
