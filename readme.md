<center>
    <h1>Welcome 👋</h1>
    <h2> Discord-ansi </h2>
    <hr />
    <h3> here is a new library for discord called </h3>

this library allows for you to make a colorized message

<hr />

# example:

</center>

<center>
    <a href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06"><img src="https://camo.githubusercontent.com/ce7bb67e47775d9e318ef3557f8e85910116f28eb22542a7b63523887417478c/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3733393933373530373736383237303933392f3936393238333536323733313837323330362f414e53492d436f6c6f72732e706e67"/></a>
    <br />
    <small style="opacity: 0.7">image from gist github <a href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06">(click the image or here)</a></small>
    <hr />
</center>

# usage:

the usage is simillar to [chalk](https://npmjs.com/package/chalk) npm

```javascript
const DiscordAnsi = require("discord-ansi"); // or .default (returns new Ansi();)

DiscordAnsi.Ansi; // The Ansi class (you can use it directly without making one module.exports = new Ansi();)
DiscordAnsi.createAnsi(string); // create the ansi code block to make it more easier
DiscordAnsi.bold()("string"); // return "string" but with discord ansi (bold font)
DiscordAnsi.bold(); // returns its self so you can use the other methods to add more styles
```

# methods

all methods have a name describe it self
<br />
most of methods returns [Function] { self }
<br />
so you can use other methods easily
<br />

<hr />
<h2> font colors:</h2>

### Ansi#white

### Ansi#cyan

### Ansi#pink

### Ansi#blue

### Ansi#yellow

### Ansi#green

### Ansi#red

### Ansi#gray

### Ansi#grey

### Ansi#underline

### Ansi#bold

### Ansi#normal

### Ansi#reset

<hr />
<h2> background Colors: </h2>

### Ansi#bgReset

### Ansi#bgWhite

### Ansi#bgLightGray

### Ansi#bgLightGrey

### Ansi#bgIndigo

### Ansi#bgGray

### Ansi#bgGrey

### Ansi#bgGreyishTurquoise

### Ansi#bgMarbleBlue

### Ansi#bgOrange

### Ansi#bgFirelyDarkBlue

<hr />
<h2> Others: </h2>

### Ansi#resetAll

### Ansi#print (Protected)

### Ansi#toAnsi

<hr />
<h1> Properties </h1>

### bg

the background color number

### fg

the font color number

### type

the type of color (bold, underline, normal => none)

### style

the style ansi codes

<hr />

# Advanced Usage:

the colors codes are the most important thing you need to know

## fg colors

(number). code: name
<br />
(1). 30: Gray <br />
(2). 31: Red<br />
(3). 32: Green<br />
(4). 33: Yellow<br />
(5). 34: Blue<br />
(6). 35: Pink<br />
(7). 36: Cyan<br />
(8). 37: White<br />

## bg Colors

(number). code: name
<br />
(1). 40: Firefly dark blue<br />
(2). 41: Orange<br />
(3). 42: Marble blue<br />
(4). 43: Greyish turquoise<br />
(5). 44: Gray<br />
(6). 45: Indigo<br />
(7). 46: Light gray<br />
(8). 47: White<br />

## Types

(number). code: type
<br />
(1). 0: normal<br />
(2). 1: **Bold**<br />
(3). 2: <ins>underline</ins><br />

<hr />
## support?
feel free to open an issue<br />
or join to my server in discord its called <b><a href="https://discord.gg/Kwz5p8dDuG">Potato 🥔</a></b>
