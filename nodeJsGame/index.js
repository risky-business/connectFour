var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const chalk = require("chalk");

var story = {
    q:
        "Welcome to the world of Pokemon! Now that your are a Pokemon trainer you need to choose a Pokemon,since, you are the first one here you have the option to choose between 3 Pokemon: Charmander, Bulbasaur and Squirtle. Which one will it be?",
    answers: {
        Charmander: {
            q:
                "Great Choice!Fire Pokemon, Watch out for water type Pokemon. Now that you have a Pokemon Would you like to battle?",
            answers: {
                yes: "That is animal cruelty, I will be reporting you to PETA",
                no:
                    "You sure, its so much fun,I suggest you say 'yes'.GAME OVER, RESTART GAME"
            }
        },

        Bulbasaur: {
            q:
                "Great Choice!Leaf Pokemon, Watch out for Fire type Pokemon. Now that you have a Pokemon Would you like to battle?",
            answers: {
                yes: "That is animal cruelty, I will be reporting you to PETA",
                no:
                    "You sure, its so much fun,I suggest you say 'yes'.GAME OVER, RESTART GAME"
            }
        },
        Squirtle: {
            q:
                "Great Choice!Water Pokemon, Watch out for Electric type Pokemon. Now that you have a Pokemon Would you like to battle?",
            answers: {
                yes: "That is animal cruelty, I will be reporting you to PETA",
                no:
                    "You sure, its so much fun,I suggest you say 'yes'.GAME OVER, RESTART GAME"
            }
        }
    }
};
function game(story) {
    rl.question(story.q, function(answer) {
        if (!story.answers[answer]) {
            console.log(chalk.red("try again"));
            return game(story);
        } else if (story.answers[answer].q) {
            game(story.answers[answer]);
        } else {
            console.log(chalk.yellow(story.answers[answer]));
            rl.close();
        }
    });
}

game(story);
