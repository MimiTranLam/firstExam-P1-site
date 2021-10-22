# test

# Questions and answers to Part 1

## 1. CLI (5%)

### What is CLI?

CLI stands for Command Line Interface. Users can interact with a system or application by typing in text commands.

### What is the adv/disadv of CLI?

Advantage:

- Can carry out multiple actions in a single application?
- Do everything by just typing. "Type faster than you can click".
- If there is an error or a wrong text command is used, the cli will clearly state what the error is and suggest alternate solutions.

Disadvantage:

- Command needs to be correctly typed out. If there are any typos, the command won't work.
- On top of knowing coding rules of other languages, there are also alot of commands to learn. (eg. If you don't remember how to make a folder and cd into it, there is more typing to do than just in one single command).

### Which do you prefer, CLI or GUI? Why?

I like a mix of both.

### Which command to check your current directory?

Either "pwd" to see the path file and name of the directory OR "ls" to list out all the contents of a directory.

### Which command to create a new folder/directory?

Type "mkdir _dirname_" to make and name a folder/dir.

### Which command to create a new file?

Type "touch _filename_" and format/language (eg. ".js") to make and name a specific file and type of file.

### You are in Desktop folder, which command to make a new directory name coderschool and navigate inside it?

1. Check you're in the correct folder/dir that you want to make the folder in by "pwd" or "ls".
2. Type "mkdir && cd _dirname_" to make and name a folder/dir and navigate inside it.

### Which command to delete a file?

Type "rm _filename_" to remove a file.

### Which command to delete a non-empty folder?

Type "rm -rf _dirname_ to delete a non empty folder/dir.

### What does this command do?

Creates a .md (markdown) file and writes a string of text into the .md file.

## 2. Git/Github (5%)

### What does the . mean in this command?

Means "all". In this command it will add all files in the current working dir to the git repo.

### What does the -m mean, is it OK without -m in this command?

Means git commit message. In this command the user makes a commit to the git repo and names the commit.

### What does the -M mean in this command?

Makes a master branch.

### What do origin and main mean in this command?

Origin indicates which git repo the user is working in (defined by url). Main is the main branch of the git repo.

### Which command to initialise a git repo in local?

Make sure you're in the correct working dir. Type "git init" to initialise the dir as a local repo.

## 3. HTML (10%)

### Inside head tag, what does first meta tag mean?

Declares use of UTF-8 character encoding. Declaring this allows the browser to know to convert typed characters (human-readable text) into machine-readable code and vice versa.

### Inside head tag, what does second meta tag mean?

"viewport" indicates the area of display screen on the client's side. The second part of the meta tag gives instructions to the browser on how to control the webpage's dimensions and scaling. "width=device-width" sets the webpage content (information to be displayed) width to the client's device width. "user-scalable=no" disables browser zoom-in on both mobile and desktop devices. "initial-scale=1.0" sets the zoom level when the page is first loaded. "maximum-scale=1.0" sets the limit on how much the user can zoom as the parameter, in this case it doesn't allow the user to zoom in. "minimum-scale=1.0" also controls zoom.

### Inside head tag, what is wrong with link tag?

The link to the css stylesheet is incorrect. Instead of linking as source, it should be a "href" attribute to specify it's destination in relation to the current resource (the HTML file/document). A "src" is used to embed a resource into the webpage.

### List some tags that do not have closing tag?

- <link/>
- <img/>
- <input/>
  *These self-closing tags cannot have child elements.*

### Give some contexts of using span tag?

A "span" tag is a generic inline container. It does not start on new line and only takes up the necessary width (with the flow).
For eg. Spotify exercise: the links in the navbar, contain a "|" in a span tag to separate the two sides of links while keeping everything on the same line.

### Give 1 example of creating a hyperlink by a tag in html? (answer with HTML code)

Use the "a" tag. Must include source by href linking and a closing tag.
`<a href="https://www.spotify.com/us/premium/">Premium</a>`

### Give 1 example of inserting a picture in html? (answer with HTML code)

Use the self-closing "img" tag. Must include source of/path to image with "src" and alternate text if the image cannot be displayed with "alt" (to let a user know what is meant to be displayed).
`<img src="./images/balloon.png" alt="balloon">`

### Give 1 example of creating an email link in html? (answer with HTML code)

Use the "a" tag. Must include source by href linking and a closing tag. The URI scheme "mailto: " allows users to click on the hyperlink and send an email to the specific address linked in the hyperlink tag.
`<a href="mailto: mimitranlam1212@gmail.com">Some text</a>`

### Create a form similar to the below picture? (answer with HTML code)

```
<div class="name-form">
    First name: <br/>
    <input class="name-input"/> <br/>
    Last name: <br/>
    <input class="name-input"/> <br/>
    <button id="submit-btn">Submit</button>
</div>
```

### Create a form with checkboxes similar to the below picture? (answer with HTML code)

```
<div class="checklist">
    <input type="checkbox"/> I have a bike <br/>
    <input type="checkbox" /> I have a car <br />
    <input type="checkbox" /> I have a boat
</div>
```

### How to add a YouTube video to html? (answer with HTML code)

Use the "iframe" tag to embed a youtube video into an HTML document.

```
<iframe id="youtube-vid" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
```

## 4. CSS(10%)

### Explain box model elements.

The box model is used in CSS for design and layout. The box model element represents the size of an element including (in order from inside to outside) its content, padding, border and margin.

### The value in inch of 1 px?

1 pixel = 1/96 inches.

### What is vw/vh?

Client's viewport width and height.

### List all values of position property? Which one is default value?

**Default is static.**

- static
- relative
- fixed
- sticky
- absolute
- initial (sets position property to default value)
- inherit (inherits the position property of the parent element)

### List all values of flex-direction property? Which one is default value?

**Default is row.**

- row
- row-reverse
- column
- column-reverse
- initial (sets flex-direction property to default value)
- inherit (inherits the flex-direction property of the parent element)

### List all values of justify-content property? Which one is default value?

**Default is flex-start.**

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly
- initial (sets justify-content property to default value)
- inherit (inherits the justify-content property of the parent element)

### List all values of align-items property? Which one is default value?

**Default is stretch.**

- flex-start
- flex-end
- center
- stretch
- baseline
- initial (sets align-items property to default value)
- inherit (inherits the align-items property of the parent element)

### List all values of align-content property? Which one is default value?

**Default is stretch.**

- flex-start
- flex-end
- center
- stretch
- space-between
- space-around
- space-evenly
- initial (sets align-content property to default value)
- inherit (inherits the align-content property of the parent element)

### List all values of flex-wrap property? Which one is default value?

**Default is wrap.**

- wrap
- no-wrap
- wrap-reverse
- initial (sets flex-wrap property to default value)
- inherit (inherits the flex-wrap property of the parent element)

### The different between space-between and space-around in align-content property?

- space-between = spaces each item **between each other** in the element with the available space. Start and end items will touch edges of the parent element.
- space-around = spaces each item **between each other and edges of the parent element** in the element with the available space. All items will have equal space between themselves, as much as possible without touching the edges of the parent element. This means that there will be a different distance of space between items and the parent element edge.
- space-evenly = spaces each item **between each other and edges of the parent element** in the element with the available space. All items will have equal space between themselves and the edges of the parent element.

### Create a box similar to the picture below? (answer with HTML + CSS code)

**HTML**

```
<div class="spacing-positioning">
    <div id="one" class="grey-box">1</div>
    <div id="two" class="grey-box">2</div>
    <div id="three" class="grey-box">3</div>
</div>
```

**CSS**

```
.spacing-positioning {
  margin: 1vw;
  border: 1px solid black;
  height: 150px;
  display: flex;
  justify-content: flex-start;
}

.grey-box {
  margin: 10px;
  background-color: grey;
  height: 130px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}
```

## Basic Javascript (10%)

### What does this code snippet do? Paste it to vscode, try to run and explain.

1. Declares a variable "i" and assigns to it the number 3. Declaring a variable as "let" allows for the variable to be changed.
2. For loop condition: for when i is 3, i will have a maximum parameter of 5.
3. For loop statement: when the for loop is running and inside each cycle, the value of i will be logged into the console.

### What does this code snippet do? Paste it to vscode, try to run and explain.

"" prev Q37, steps 1-3  
4. For loop statement: when the for loop is running and inside each cycle, i will have a new parameter of its current value incremented by 1.

### What does this code snippet do? Paste it to vscode, try to run and explain.

1. Declares a variable "i" and assigns to it the number 3. Declaring a variable as "let" allows for the variable to be changed.
2. For loop condition: first ";" --> while i is whatever value it is... , second ";" run the following commands in the statement.
3. For loop statement: log the value of i into the console,

### Use for-loop to console log square numbers from 1 to 10.

```
for (let i = 1; i < 101; i++) {
    for (let j = 1; j < 101; j++) {
        if(j**2 === i) {
            console.log(i);
        }
    }
}
```

## Advanced Javascript (10%)

### Write a function with input (argument) is an array, output (return) is one element from input with age is 21. Test with above array.

```
const data21 = data.filter((i) => {
    return i.age === 21;
});
console.log(data21[0]);
```

### Write a function with input (argument) is an array, converts this array into json format and saves to db.json file. Test with above array.

```
const users = {};
const fs = require('fs');

users.JSONdata = () => {
    dataArr = JSON.stringify(data);
    fs.writeFileSync('db.json', dataArr);
};

module.exports = users;
```
