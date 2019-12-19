
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

const listOfTasks = ['do exercise','meditate'];


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text=text.trim();
  const textArray = text.split(" ");
  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if(textArray[0] === 'hello'){
    hello(textArray);
  }else if(text === 'help'){
    help();
  }else if(text === 'list'){
    list();
  }else if(textArray[0] === 'add'){
    if (textArray[1] === undefined) console.error("you need to add a task");
    else add(textArray);
  }
  else{
    unknownCommand(text);
  }
}

function list(){
  for (let i = 0 ; i<listOfTasks.length ; i++){
    console.log(`${i+1}:${listOfTasks[i]}`);
  }
}

function add(textArray){
  textArray.shift();
  listOfTasks.push(textArray.join(" "));
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if(text.length === 2)
  console.log('hello ' + text[1]+"!");
  else console.log("hello!");
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 *  lists the available commands and what they do
 * 
 * @returns {void}
 */
function help(){
  console.log('available commands: \n hello @parameter (says hello @parameter! or hello!) \n quit or exit (exits the app) ');
}

// The following line starts the application
startApp("Bassel Kanso")
