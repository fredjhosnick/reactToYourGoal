
const  questions =[
  {
    amount: 1,
    question: "Richard has 1 cat _____.",
    answerOptions: [
      { answer: "and two dogs", isCorrect: true },
      { answer: "but two cats", isCorrect: false },
      { answer: "and 3 cats", isCorrect: false },
      { answer: "or many cats", isCorrect: false }
    ]
  },
  {
    amount: 2,
    question: "This Apple tastes _____ the red one.",
    answerOptions: [
      
      { answer: "more sweet", isCorrect: false },
      { answer: "and 3 cats", isCorrect: false },
      { answer: "or many cats", isCorrect: false },
      { answer: "sweeter than", isCorrect: true }
    ]
  }, {
    amount: 3,
    question: "Jane and Tom _____15.",
    answerOptions: [
     
      { answer: "will", isCorrect: false },
      { answer: "have", isCorrect: false },
      { answer: "are", isCorrect: true },
      { answer: "is", isCorrect: false }
    ]
  },
  {
    amount: 4,
    question: "My coat is _____ the chair.",
    answerOptions: [
      
      { answer: "in", isCorrect: false },
      { answer: "from", isCorrect: false },
      { answer: "on", isCorrect: true },
      { answer: "between", isCorrect: false }
    ]
  },
  {
    amount: 5,
    question: "_____ this girl next to your dad.",
    answerOptions: [
     
      { answer: "Where's", isCorrect: false },
      { answer: "What's", isCorrect: false },
      { answer: "That's", isCorrect: false },
      { answer: "Who's", isCorrect: true }
    ]
  },
  {
    amount: 6,
    question: "Karen enjoys _____TV.",
    answerOptions: [
     
      { answer: "to watch", isCorrect: false },
      { answer: "watch", isCorrect: false },
      { answer: "watching", isCorrect: true },
      { answer: "watches", isCorrect: false }
    ]
  },
  {
    amount: 7,
    question: "There weren't _____ people at the concert.",
    answerOptions: [
     
      { answer: "lot of", isCorrect: false },
      { answer: "much", isCorrect: false },
      { answer: "very much", isCorrect: false },
      { answer: "many", isCorrect: true }
    ]
  },
  {
    amount: 8,
    question: "We usually meet _____ 8 AM.",
    answerOptions: [
      { answer: "at", isCorrect: true },
      { answer: "in", isCorrect: false },
      { answer: "on", isCorrect: false },
      { answer: "for", isCorrect: false }
    ]
  },
  {
    amount: 9,
    question: "Every day, I _____ clean this board.",
    answerOptions: [
      { answer: "have to", isCorrect: true },
      { answer: "ought", isCorrect: false },
      { answer: "am", isCorrect: false },
      { answer: "have", isCorrect: false }
    ]
  },
  {
    amount: 10,
    question: "She _____ do her homework.",
    answerOptions: [
   
      { answer: "don't", isCorrect: false },
      { answer: "isn't", isCorrect: false },
      { answer: "wasn't", isCorrect: false },
      { answer: "doesn't", isCorrect: true }
    ]
  },
  {
    amount: 11,
    question: "Sarah _____ dinner tonight.",
    answerOptions: [
      
      { answer: "will go cooking", isCorrect: false },
      { answer: "goes to cook", isCorrect: false },
      { answer: "is going to cook", isCorrect: true },
      { answer: "is going cooking", isCorrect: false }
    ]
  },
  {
    amount: 12,
    question: "I laughed _____ the movie was funny.",
    answerOptions: [
     
      { answer: "and", isCorrect: false },
      { answer: "because", isCorrect: true },
      { answer: "so", isCorrect: false },
      { answer: "or", isCorrect: false }
    ]
  },
  {
    amount: 13,
    question: "The Eiffel Tower is _____ the Louvre Museum.",
    answerOptions: [
      { answer: "near", isCorrect: true },
      { answer: "far from", isCorrect: false },
      { answer: "next to", isCorrect: false },
      { answer: "in", isCorrect: false }
    ]
  },
  {
    amount: 14,
    question: "_____ did you last visit your grandparents?",
    answerOptions: [
     
      { answer: "Why", isCorrect: false },
      { answer: "Where", isCorrect: false },
      { answer: "What", isCorrect: false },
      { answer: "When", isCorrect: true }
    ]
  },
  {
    amount: 15,
    question: "My sister _____ her keys at home yesterday.",
    answerOptions: [
      
      { answer: "forget", isCorrect: false },
      { answer: "forgets", isCorrect: false },
      { answer: "forgot", isCorrect: true },
      { answer: "is forgetting", isCorrect: false }
    ]
  },
  {
    amount: 16,
    question: "He can swim, _____ he can't dive.",
    answerOptions: [
      
      { answer: "and", isCorrect: false },
      { answer: "or", isCorrect: false },
      { answer: "so", isCorrect: false },
      { answer: "but", isCorrect: true },
    ]
  },
  {
    amount: 17,
    question: "The weather is so _____ today!",
    answerOptions: [
    
      { answer: "good", isCorrect: false },
      { answer: "nice", isCorrect: true },
      { answer: "well", isCorrect: false },
      { answer: "better", isCorrect: false }
    ]
  },
  {
    amount: 18,
    question: "They _____ to the cinema last night.",
    answerOptions: [
      { answer: "went", isCorrect: true },
      { answer: "go", isCorrect: false },
      { answer: "are going", isCorrect: false },
      { answer: "goes", isCorrect: false }
    ]
  },
  {
    amount: 19,
    question: "I like to eat pizza _____ pasta.",
    answerOptions: [
    
      { answer: "or", isCorrect: false },
      { answer: "but", isCorrect: false },
      { answer: "nor", isCorrect: false },
      { answer: "and", isCorrect: true },
    ]
  },
  {
    amount: 20,
    question: "I'm looking forward _____ the weekend.",
    answerOptions: [
      
      { answer: "at", isCorrect: false },
      { answer: "to", isCorrect: true },
      { answer: "in", isCorrect: false },
      { answer: "on", isCorrect: false }
    ]
  },
   
    {
      amount: 21,
      question: "My brother _____ a new car last month.",
      answerOptions: [
        
        { answer: "buys", isCorrect: false },
        { answer: "buy", isCorrect: false },
        { answer: "buying", isCorrect: false },
        { answer: "bought", isCorrect: true }
      ]
    },
    {
      amount: 22,
      question: "She _____ her exercise routine every day.",
      answerOptions: [
        
        { answer: "change", isCorrect: false },
        { answer: "changes", isCorrect: true },
        { answer: "changed", isCorrect: false },
        { answer: "changing", isCorrect: false }
      ]
    },
    {
      amount: 23,
      question: "We're going to the beach _____ it's sunny.",
      answerOptions: [
       
        { answer: "so", isCorrect: false },
        { answer: "but", isCorrect: false },
        { answer: "if", isCorrect: false },
        { answer: "because", isCorrect: true }
      ]
    },
    {
      amount: 24,
      question: "_____ the book on the shelf, please.",
      answerOptions: [
        { answer: "Put", isCorrect: true },
        { answer: "Putting", isCorrect: false },
        { answer: "Putted", isCorrect: false },
        { answer: "Puts", isCorrect: false }
      ]
    },
    {
      amount: 25,
      question: "I don't like coffee; _____, I prefer tea.",
      answerOptions: [
       
        { answer: "therefore", isCorrect: false },
        { answer: "although", isCorrect: false },
        { answer: "however", isCorrect: true },
        { answer: "but", isCorrect: false }
      ]
    },
    {
      amount: 26,
      question: "He _____ in the park when it started raining.",
      answerOptions: [
        
        { answer: "is", isCorrect: false },
        { answer: "am", isCorrect: false },
        { answer: "was", isCorrect: true },
        { answer: "are", isCorrect: false }
      ]
    },
    {
      amount: 27,
      question: "They _____ to the same school last year.",
      answerOptions: [
        { answer: "went", isCorrect: true },
        { answer: "go", isCorrect: false },
        { answer: "are going", isCorrect: false },
        { answer: "goes", isCorrect: false }
      ]
    },
    {
      amount: 28,
      question: "My sister is _____ than me.",
      answerOptions: [
       
        { answer: "more old", isCorrect: false },
        { answer: "oldest", isCorrect: false },
        { answer: "elder", isCorrect: false },
        { answer: "older", isCorrect: true }
      ]
    },
    {
      amount: 29,
      question: "Please turn off the lights _____ you leave.",
      answerOptions: [
        
        { answer: "after", isCorrect: false },
        { answer: "when", isCorrect: false },
        { answer: "before", isCorrect: true },
        { answer: "while", isCorrect: false }
      ]
    },
    {
      amount: 30,
      question: "I have never been _____ Paris.",
      answerOptions: [
       
        { answer: "at", isCorrect: false },
        { answer: "in", isCorrect: false },
        { answer: "to", isCorrect: true },
        { answer: "on", isCorrect: false }
      ]
    },
    {
      amount: 31,
      question: "The concept of globalization is often debated _____ economists.",
      answerOptions: [
        { answer: "among", isCorrect: true },
        { answer: "between", isCorrect: false },
        { answer: "by", isCorrect: false },
        { answer: "within", isCorrect: false }
      ]
    },
    {
      amount: 32,
      question: "She showed _____ her new painting during the art exhibition.",
      answerOptions: [
       
        { answer: "on", isCorrect: false },
        { answer: "in", isCorrect: false },
        { answer: "off", isCorrect: true },
        { answer: "up", isCorrect: false }
      ]
    },
    {
      amount: 33,
      question: "I can't decamounte _____ the red or the blue dress.",
      answerOptions: [
     
        { answer: "among", isCorrect: false },
        { answer: "between", isCorrect: true },
        { answer: "within", isCorrect: false },
        { answer: "from", isCorrect: false }
      ]
    },
    {
      amount: 34,
      question: "His success is attributed _____ his hard work and dedication.",
      answerOptions: [
       
        { answer: "with", isCorrect: false },
        { answer: "by", isCorrect: false },
        { answer: "for", isCorrect: false },
        { answer: "to", isCorrect: true }
      ]
    },
    {
      amount: 35,
      question: "The government needs to take _____ measures to address the economic crisis.",
      answerOptions: [
       
        { answer: "necessary", isCorrect: false },
        { answer: "critical", isCorrect: false },
        { answer: "urgent", isCorrect: true },
        { answer: "serious", isCorrect: false }
      ]
    },
    {
      amount: 36,
      question: "She has a profound _____ of classical literature.",
      answerOptions: [
        { answer: "understanding", isCorrect: true },
        { answer: "knowledge", isCorrect: false },
        { answer: "awareness", isCorrect: false },
        { answer: "insight", isCorrect: false }
      ]
    },
    {
      amount: 37,
      question: "The new policy will likely have a significant _____ on the economy.",
      answerOptions: [
       
        { answer: "effect", isCorrect: false },
        { answer: "influence", isCorrect: false },
        { answer: "impact", isCorrect: true },
        { answer: "result", isCorrect: false }
      ]
    },
    {
      amount: 38,
      question: "In the 21st century, technology has advanced _____ a remarkable pace.",
      answerOptions: [
      
        { answer: "in", isCorrect: false },
        { answer: "on", isCorrect: false },
        { answer: "by", isCorrect: false },
        { answer: "at", isCorrect: true }
      ]
    },
    {
      amount: 39,
      question: "The novel is a compelling _____ of human nature and society.",
      answerOptions: [
       
        { answer: "depiction", isCorrect: false },
        { answer: "exploration", isCorrect: true },
        { answer: "representation", isCorrect: false },
        { answer: "interpretation", isCorrect: false }
      ]
    },
    {
      amount: 40,
      question: "She _____ her goal of becoming a successful entrepreneur.",
      answerOptions: [
        
        { answer: "accomplished", isCorrect: false },
        { answer: "attained", isCorrect: false },
        { answer: "completed", isCorrect: false },
        { answer: "achieved", isCorrect: true }
      ]
    },
    
    {
      amount: 41,
      question: "The negotiations were conducted _____ representatives from both countries.",
      answerOptions: [
        { answer: "between", isCorrect: true },
        { answer: "among", isCorrect: false },
        { answer: "with", isCorrect: false },
        { answer: "by", isCorrect: false }
      ]
    },
    {
      amount: 42,
      question: "Despite facing numerous challenges, the team remained _____ and determined.",
      answerOptions: [
        
        { answer: "persistent", isCorrect: false },
        { answer: "resilient", isCorrect: true },
        { answer: "strong-willed", isCorrect: false },
        { answer: "unyielding", isCorrect: false }
      ]
    },
    {
      amount: 43,
      question: "The intricacies of quantum physics are _____ to comprehend.",
      answerOptions: [
        
        { answer: "easy", isCorrect: false },
        { answer: "simple", isCorrect: false },
        { answer: "difficult", isCorrect: true },
        { answer: "straightforward", isCorrect: false }
      ]
    },
    {
      amount: 44,
      question: "Her eloquent speech left a lasting _____ on the audience.",
      answerOptions: [
       
        { answer: "impact", isCorrect: false },
        { answer: "effect", isCorrect: false },
        { answer: "influence", isCorrect: false },
        { answer: "impression", isCorrect: true }
      ]
    },
    {
      amount: 45,
      question: "The author's prose is so densely _____ that it requires careful reading.",
      answerOptions: [
        
        { answer: "simple", isCorrect: false },
        { answer: "plain", isCorrect: false },
        { answer: "layered", isCorrect: true },
        { answer: "uncomplicated", isCorrect: false }
      ]
    },
    {
      amount: 46,
      question: "The summit aimed to foster _____ between nations with different political ideologies.",
      answerOptions: [
        
        { answer: "debate", isCorrect: false },
        { answer: "dialogue", isCorrect: true },
        { answer: "conflict", isCorrect: false },
        { answer: "opposition", isCorrect: false }
      ]
    },
    {
      amount: 47,
      question: "His extensive knowledge of ancient civilizations is truly _____.",
      answerOptions: [
        { answer: "encyclopedic", isCorrect: true },
        { answer: "limited", isCorrect: false },
        { answer: "basic", isCorrect: false },
        { answer: "superficial", isCorrect: false }
      ]
    },
    {
      amount: 48,
      question: "The artist's work is characterized by its avant-garde and _____ nature.",
      answerOptions: [
        
        { answer: "traditional", isCorrect: false },
        { answer: "conventional", isCorrect: false },
        { answer: "orthodox", isCorrect: false },
        { answer: "innovative", isCorrect: true }
      ]
    },
    {
      amount: 49,
      question: "The diplomat's nuanced approach to international relations is highly _____.",
      answerOptions: [
       
        { answer: "basic", isCorrect: false },
        { answer: "unsophisticated", isCorrect: false },
        { answer: "sophisticated", isCorrect: true },
        { answer: "naive", isCorrect: false }
      ]
    },
    {
      amount: 50,
      question: "The research findings are based on a _____ analysis of the available data.",
      answerOptions: [
      
        { answer: "casual", isCorrect: false },
        { answer: "rigorous", isCorrect: true },
        { answer: "informal", isCorrect: false },
        { answer: "lax", isCorrect: false }
      ]
    }
]  

export default questions;