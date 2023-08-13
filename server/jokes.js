const getJokes = async () => {
 
    const allJoke = [
        { Joke: 'Why did the React component go to the doctor?\n\n\Because it could not setState.'},
        { Joke: 'Why did the React component go to therapy?\n\n\Because it had too many state-related issues and could not stop re-rendering its feelings!'},
        { Joke: 'Why do React developers prefer functional components?\n\n\Because they do not like any unnecessary drama (state) in their lives!'},
        { Joke: 'How does a React component apologize to the developer?\n\n\It says, "I am sorry, I did not mean to change your state!"'},
        { Joke: 'Why did the JavaScript developer go broke?\n\n\Because he lost all his cache.'},
      ];
      
      function getRandomProperty(obj) {
        const keys = Object.keys(obj);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return obj[randomKey];
      }
      
      const randomJokeIndex = Math.floor(Math.random() * allJoke.length);
      const randomGetJoke = getRandomProperty(allJoke[randomJokeIndex]);

      return randomGetJoke;
};

module.exports = { getJokes };
