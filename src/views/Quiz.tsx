import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have Shadcn UI Button component
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'; // Assuming you have Shadcn UI Card components
import { Label } from '@/components/ui/label'; // Assuming you have Shadcn UI Label component
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Assuming you have Shadcn UI RadioGroup components
import { Progress } from '@/components/ui/progress'; // Assuming you have Shadcn UI Progress component

// Define the Question type
interface Option {
  id: string;
  answerText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  options: Option[];
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([
    {
      questionText: 'What is the capital of France?',
      options: [
        { id: 'a', answerText: 'Berlin', isCorrect: false },
        { id: 'b', answerText: 'Madrid', isCorrect: false },
        { id: 'c', answerText: 'Paris', isCorrect: true },
        { id: 'd', answerText: 'Rome', isCorrect: false },
      ],
    },
    {
      questionText: 'Which planet is known as the "Red Planet"?',
      options: [
        { id: 'a', answerText: 'Jupiter', isCorrect: false },
        { id: 'b', answerText: 'Mars', isCorrect: true },
        { id: 'c', answerText: 'Venus', isCorrect: false },
        { id: 'd', answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the chemical symbol for water?',
      options: [
        { id: 'a', answerText: 'Wo', isCorrect: false },
        { id: 'b', answerText: 'Wa', isCorrect: false },
        { id: 'c', answerText: 'H2O', isCorrect: true },
        { id: 'd', answerText: 'HO2', isCorrect: false },
      ],
    },
    // Add more questions here
  ]);

  useEffect(() => {
    // You can fetch questions from an API here if needed
    // Example:
    // fetch('/api/questions')
    //   .then(response => response.json())
    //   .then(data => setQuestions(data))
    //   .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      const currentQuestionData = questions[currentQuestion];
      const isCorrect = currentQuestionData.options.find(
        (option) => option.id === selectedOption
      )?.isCorrect;

      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      setSelectedOption(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setShowResults(true);
      }
    } else {
      alert('Please select an answer.');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="container mx-auto py-10 max-w-xl">
      <Card className="shadow-md rounded-lg ">
        <CardHeader className="pb-2">
          <h2 className="text-2xl font-semibold text-center">Quiz Time!</h2>
        </CardHeader>
        <CardContent className="p-6">
          {showResults ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Your Results</h3>
              <p className="text-gray-700 mb-4">
                You scored <span className="font-bold text-green-500">{score}</span> out of{' '}
                {questions.length}
              </p>
              <Button onClick={handleRestartQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Try Again
              </Button>
            </div>
          ) : questions.length > 0 ? (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-32" />
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">{questions[currentQuestion].questionText}</p>
                <RadioGroup value={selectedOption} onValueChange={handleOptionSelect} className="grid gap-2">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                      <Label htmlFor={option.id} className="peer-checked:bg-blue-100 peer-checked:border-blue-500 peer-checked:text-blue-700 border rounded-md p-3 w-full cursor-pointer">
                        {option.answerText}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex justify-between">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  variant="outline"
                >
                  Previous
                </Button>
                <Button onClick={handleNextQuestion}>
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600 italic">Loading quiz questions...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Quiz;