import React, { useState } from 'react'
import api from '../../services/api/axios'

const Button = ({path, title}) => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value)
    }

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value)
    }

    const handleGetJoke = async() => {

        if (question && answer) {
            const body = {
                question: question,
                answer: answer
            }
            try {
                const response = await api.post(path, body)
                console.log("submitted joke :", response.data)
            } catch (error) {
                console.error(error)
            }
            return
        }else {   
        try {
            const response =await api.get(path)
            console.log("received joke :", response.data)
        } catch (error) {
            console.error(error)
        }
    }
    }


  return (
    <div>
         {title === "Submit your joke" && (
                <div className="flex flex-col space-y-2">
                    <input
                        type="text"
                        placeholder="Votre question"
                        value={question}
                        onChange={handleQuestionChange}
                        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-carambar-500"
                    />
                    <input
                        type="text"
                        placeholder="Votre réponse"
                        value={answer}
                        onChange={handleAnswerChange}
                        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-carambar-500"
                    />
                </div>
            )}
            
            {/* Affichage des erreurs */}
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}

            {/* Bouton d'action */}
            <button
                className="px-4 py-2 font-bold text-white transition-colors rounded-lg bg-carambar-700 hover:bg-carambar-800"
                onClick={handleGetJoke}
            >
                {title}
            </button>

    </div>
  )
}

export default Button