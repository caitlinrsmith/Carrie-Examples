/*****************************************/
/******* GRADED ASSIGNMENT #1 PREP *******/
/****** A FEW OF MY FAVORITE THINGS ******/
/************ by Carrie Jones ************/
/*****************************************/

/*  
  This is the STARTER code. 
	Feel free to fork it to your own account and practice!

 	Tutorial Recording:
		https://youtu.be/5cGQjrRYi0Q

	Solution:
		https://replit.com/@CarolineRose/FavoriteThings

  Find more examples and practice problems here: 
 		https://carolista.github.io/student-resources/
*/

/*
	Here are some exercises to help prepare you for Parts 1 & 2 of Graded Assignment 1. It incorporates your new knowledge of data types, variables, strings, and arrays, (but not loops just yet). 
*/

/**** FIRST THINGS FIRST ****/

/* 	
	Toward the beginning of these exercises we will be collecting a little user input, which means we need to import the readline-sync library, and that always goes at the very top of your code.
*/

// TODO: Import the readline-sync library so you can dialogue with the user in the console.

const input = require("readline-sync");

/**** PLAYING FAVORITES ****/

/*
	Okay, now we can proceed with your program. For this exercise, let's set up a couple random questions for the user.
*/

// // EXAMPLE - Favorite ice cream flavor
// input.question("Hi there. What's your favorite flavor ice cream? ");

// // EXAMPLE - Favorite color
// input.question("What is your favorite color? ");

/*
	Great - we successfully asked the question in the console and got the user to respond. But what happened to their answers?

	If we don't do something with the response, what was the point of asking? We need a way to store the responses.

	Format:
		answer = input.question(someQuestion);
*/

// EXAMPLE - Let's get a recommendation for local food, and this time we'll use the escape character to put some line breaks in and make the output more readable to the user in the console.

let faveRestaurant = input.question("\nWhat is your favorite place to eat?\n");
let faveMeal = input.question(
  "\nAnd what is your favorite food to order at that restaurant?\n"
);

// Now we have their answers stored in variables and ready to use in our code! Let's use a template literal to respond to the user.

// console.log(
//   `\nThat sounds delicious. Based on your recommendation, I am definitely going to have to try the ${faveMeal} at ${faveRestaurant}!`
// );

// If you haven't already, run the program to see how everything works in the console. Play the role of the user to test it out.

/*
	TRY IT! Find out from the user who their favorite actor is and their favorite movie that that actor is in. Store their answers in variables, and then use a template literal to print a sentence as a response including their answers. Run the program to test out your code.

	How does everything look in the console? If necessary, go back through and add some escape characters to make it cleaner.

	BONUS: Refactor the second question to specify the name of the actor the user chose.
*/

let faveActor = input.question("\nWho is your favorite actor?\n");
let movieStarredIn = input.question(
  `What is your favorite movie that ${faveActor} has starred in?\n`
);
console.log(`Yes, ${faveActor} was amazing in ${movieStarredIn}!\n`);

// TODO: Get favorite actor and movie/TV from user

// TODO: Respond back to user

/**** COLLECTING DATA IN ARRAYS ****/

/*
	We've now asked our user for 6 different favorite things, and saved the answers for four of them... but the variables are just kind of out there. It would be much better to collect our answers inside a data structure. An array will work well for what we need.
*/

// TODO: Create an array that holds the first four answers already stored.

let favoritesArray = [faveRestaurant, faveMeal, faveActor, movieStarredIn];
// TODO: Using bracket notation and referencing only the array, print the user's favorite meal.

console.log(`Now I am hungry for ${favoritesArray[1]}\n`);
// TODO: Using a template literal, print a sentence featuring both the user's favorite restaurant and their favorite movie. Reference the array only!
console.log(
  `Would you like to go to ${favoritesArray[0]} and then watch ${favoritesArray[3]} afterword?\n`
);
/*
	Great! Now let's ask a couple more questions and push the answers into the array.
*/

// TODO: Ask the user for their ideal vacation spot and put the answer in the array.

favoritesArray.push(
  input.question("Where is your ideal vacation destination?\n")
);
// TODO: Ask the user what kind of activity they like to do there and put the answer in the array.
favoritesArray.push(
  input.question(
    `What kind of activity do you like to do at ${
      favoritesArray[favoritesArray.length - 1]
    }? \n`
  )
);
// TODO: Print the array to the console to see the new elements you've added.

console.log(favoritesArray);
// TODO: Referencing only the array with bracket notation, print a sentence that incorporates the user's favorite meal, ideal vacation spot, and activity.
console.log(
  `WoOOOwW, eating ${favoritesArray[1]} at ${
    favoritesArray[favoritesArray.length - 2]
  } after ${favoritesArray[favoritesArray.length - 1]} sounds so nice!`
);

/*
	Okay... but what if we don't know which index holds which answer? We need a way to be sure we are referencing the right one.
*/

// Let's create an array that holds keywords that match the order of the answers.
let keywords = ["restaurant", "meal", "actor", "movie", "vacation", "activity"];

// TODO: Print both arrays one after the other to see how the elements line up in parallel.

console.log(favoritesArray);
console.log(keywords);
// TODO: Print a better version of the last sentence that uses bracket notation on the userAnswers array in combination with indexOf to match the keyword.

console.log(
  `I haven't tried ${favoritesArray[keywords.indexOf("activity")]} or been to ${
    favoritesArray[keywords.indexOf("vacation")]
  } but I would love to go and try!`
);

/* 
	IMPORTANT NOTE: Once you get to Part 3 of Graded Assignment 1, you will be using loops to make the process of asking questions and referencing values from arrays a lot simpler. But for now it's good to practice doing it in bits and pieces to make sure you've got the fundamentals down.
*/

/**** COMPARING DATA ****/

/*
	Use template literals and make sure the comparisons are case-insensitive.
*/

// EXAMPLE: Write a conditional to check if the user chose pizza as their favorite food, and print something different back to them if it's true or false.
// Use bracket notation to reference the element you need from the array, based on the keyword.
let food = String(keywords.indexOf("meal")).toLowerCase();
let pizza = "pizza";

if (favoritesArray[food] === pizza) {
  console.log(
    `\nThanks! ${favoritesArray[food]} is exactly what I had in mind!`
  );
} else {
  console.log(
    `\nCould we maybe do Korean food? I have a craving for seaweed soup.`
  );
}

/* 
	TRY IT! This time, so that you don't have to type out all those array references more than once, store it in a variable. Then create a second variable to hold the string "Hawaii".

	Now that you're using two variables, your code in the if/else block will be much cleaner.
*/

// TODO: Create two variables, then write another conditional to check if the user chose Hawaii as their favorite vacation spot and print something to the console for each condition. Use bracket notation again, based on the keyword.

let destination = String(keywords.indexOf("vacation")).toLowerCase();
let hawaii = "hawaii";

if (favoritesArray[destination] === hawaii) {
  console.log(
    `\n ${favoritesArray[destination]} is exactly where I wanted to go!`
  );
} else {
  console.log(
    `\n Could we maybe go to Turkey? The currency exchange rate is really in our favor right now!`
  );
}
