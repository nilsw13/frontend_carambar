import React, { useState } from 'react'
import { useJokes } from '../../hooks/useJokes';
import SuccesToast from '../utils/SuccesToast';

function CreateJoke() {

    // we define states 
    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    })

    const [showToast, setShowToast] = useState(false);

    // we get from the useJokes hook the createJoke function and loading / error state

    const { submitJoke, error, loading } = useJokes();

    // we now handle field changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    // we now handle form submission

    const handleSubmit = async (e) => {
        e.preventDefault();

        // basiq validation need to add ZOD later

        if (!formData.question || !formData.answer) {
            return;
        }

        try {
            const newJoke =  await submitJoke(formData);

            if (newJoke) {
                setFormData({
                    question: '',
                    answer: ''
                });
                console.log("joke created",newJoke);
                setShowToast(true);

                 // Masquer le toast après 3 secondes
                 setTimeout(() => {
                    setShowToast(false);
                }, 3000);
                

            }
        } catch (error) {
            console.error("error while creating joke",error);


       
    }
    }

  return (
    <div className='grid gap-20'>
            <h1 className='text-4xl font-bold text-purple-cam-400/60 bubble'>
                Crée ta propre blague
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        placeholder="Votre question"
                        className="w-full p-2 border rounded"
                    />
                    {error && error.includes('question') && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                        placeholder="Votre réponse"
                        className="w-full p-2 border rounded"
                    />
                    {error && error.includes('answer') && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading || !formData.question || !formData.answer}
                    className="w-full px-4 py-2 font-bold text-yellow-200 rounded bubble bg-purple-cam-400 disabled:opacity-50"
                >
                    {loading ? 'En cours...' : 'Accrocher au mur'}
                </button>

                {/* Message de succès ou d'erreur global */}
                {error && !error.includes('question') && !error.includes('answer') && (
                    <p className="text-sm text-center text-red-500">{error}</p>
                )}
            </form>

            {showToast && <SuccesToast message="Blague créée avec succès" />}
        </div>
    
  )

}

export default CreateJoke