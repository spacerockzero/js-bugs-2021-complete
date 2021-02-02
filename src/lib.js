const user = "Developer";

const person = {
  name: "Joe"
};

// var person = "Steve";

let direction = "down";

if (direction === "down") {
  direction = "up";
}

const pastTenseVerb = "ran";

const location = "arcade";

const games = ["Breakout", "Donkey Kong", "Wreckit Ralph", "Space Invaders"];

let game = { name: games[3], cost: 0.25 };

const tax = 0.1;

game = { ...game, cost: game.cost + tax };

export { user, person, direction, pastTenseVerb, location, game, tax };
