import {z} from 'zod';

const jokeSchema = z.object({
    // validate question input 
    question: z.string().min(5, {
        message: "La question doit contenir au moins 5 caractères"})
        .max(100, {
        message: "La question doit contenir moins de 100 caractères"})
    // sanitize input
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          // Cette regex détecte les balises, les scripts et autres éléments dangereux
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // Protection contre les caractères spéciaux et de contrôle
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // only letters, numbers and simple punctuation
      .refine(
        (value) => {
          // Cette regex autorise uniquement les caractères sûrs
          const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
          return safeCharsRegex.test(value);
        },
        "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
      )
      
      // // starts with a letter
      .refine(
        (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
        "Le texte doit commencer par une lettre"
      ),
  


      // validate answer input

    answer: z.string().min(3, {
        message: "La réponse doit contenir au moins 5 caractères"})
        .max(100, {
        message: "La réponse doit contenir moins de 100 caractères"})
        .refine(
            (value) => {
              //  regex  SQL 
              const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
              return !sqlInjectionRegex.test(value);
            },
            "Le texte contient des caractères non autorisés"
          )
          
          // regex XSS
          .refine(
            (value) => {
              // Cette regex détecte les balises, les scripts et autres éléments dangereux
              const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
              return !xssRegex.test(value);
            },
            "Le texte contient des caractères non autorisés"
          )
          
          // Protection contre les caractères spéciaux et de contrôle
          .refine(
            (value) => {
              // regex caractères spéciaux
              const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
              return !specialCharsRegex.test(value);
            },
            "Le texte contient des caractères non autorisés"
          )
          
          // only letters, numbers and simple punctuation
          .refine(
            (value) => {
              // Cette regex autorise uniquement les caractères sûrs
              const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
              return safeCharsRegex.test(value);
            },
            "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
          )
          
          // // starts with a letter
          .refine(
            (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
            "Le texte doit commencer par une lettre"
          ),

    
})

export default jokeSchema;