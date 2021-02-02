import "./styles.css";
import { person, pastTenseVerb, direction, location, user, game } from "./lib";

document.getElementById("app").innerHTML = `
<h1>Hello ${user}</h1>
<div>
  ${person.name} ${pastTenseVerb} ${direction} to the ${location}, 
  and paid $${game.cost} to play ${game.name}
</div>
`;
