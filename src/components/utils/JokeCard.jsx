import { motion } from "framer-motion";
import { ThumbsUp, Trash2 } from "lucide-react";



const JokeCard = ({ joke, onLike, onDelete, loading, question, answer  }) => {


 const canDelete = (joke) => {
     if (joke.countOfLikes < 10) {
         return true;
     }
 }


    


    return (
      <div className="w-[2/3] border p-4 rounded-lg shadow-xl bg-purple-cam-400/45 hover:scale-105 transition-all flex flex-col h-full space-y-6">
        <div className="flex-grow space-y-8">
        <p className="text-xl font-bold text-yellow-200 bubble">{question}</p>
        <p className="pt-10 text-md bubble">{answer}</p>
      </div>

        <div className="flex items-center justify-between pt-4">
        
        <motion.button
          className="px-3 py-1 bg-yellow-200 rounded-lg text-purple-cam-400/90"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          onClick={() => onLike(joke.id)} 
          disabled={loading}
        >
          <div className="flex flex-row items-center space-x-2">
            <ThumbsUp/>
            <span>{joke.countOfLikes}</span>
          </div>
        </motion.button>



        {/* delete button*/}
        
        {canDelete(joke) ? (
            <motion.button
            className="p-2 bg-red-500 rounded-lg text-purple-cam-400/90"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            onClick={() => onDelete(joke.id)} 
            disabled={loading}
          >
            <Trash2/>
          </motion.button>
        ) : (
          <motion.button
            className="p-2 bg-red-500 rounded-lg text-purple-cam-400/90"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            disabled
          >
            <Trash2 />
          </motion.button>
        )}
        

        </div>


      </div>
    );
  };

export default JokeCard;