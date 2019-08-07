<b><h1>webGui.js</h1></b>

This is a fairly small and simple JavaScript library I made to assist in creating HTML pages with raw JavaScript.
It's inspired off Roblox Lua.

Free to use on your own projects, personal or commercial.

## <b>**Documentation**</b>
Here's the low down on using this library!


**print(string *message*)**
A global function.
*print* is now the same as *console.log*
So you can do 
```js
print("Hello world!");
```
and it would be the same as doing
```js
console.log("Hello world!");
```

**Body**
A global object.
Represents the <body> tag.
Kinda like *workspace* in Roblox Lua.
Objects will not be visible unless under Body.

**OnMobile**
A global boolean.
OnMobile returns true if on mobile or false if not.
Useful for making things mobile friendly.

**newUi(String *HTML Element Type*, Object *parent (optional)*)**
A global function.
This is what contains the majority of functionality.
Creates a new Ui Object.
Has option to set parent.

**UiObj.**Position**(Number *X*, Number *Y*)**
A Ui object's function.
Sets the position of said object.
You can specify pixels, percentages, or a calculation of both.
See Example 1.

**UiObj.**Z**(Number *Z*)**
A Ui object's function.
Sets the Z position of said object.
Useful for bringing things forward or sending things back.

**iObj.**Size**(Number *Width*, Number *Height*)**
A Ui object's function.
Sets the size of said object.
You can specify pixels, percentages, or a calculation of both.
Just like you would specify with Position.
See Example 1.

**UiObj.**OnClick**(Function *callback function*)**
A Ui object's function.
The callback function is called whenever said object is clicked.

**UiObj.**BackgroundColor**(String *Color*)**
A Ui object's function.
Sets the object's background color.
Can be HEX or name.
See Example 1.

**UiObj.**TextColor**(String *Color*)**
A Ui object's function.
Sets the object's Text color.
Can be HEX or name.
See Example 1.

**UiObj.**TextSize**(Number *Size*)**
A Ui object's function.
Sets the object's Text Size.

**UiObj.**Text**(String *text*)**
A Ui object's function.
Sets the object's Text.

**UiObj.**Parent**(Object *parent*)**
A Ui object's function.
Sets the object's parent.


#### *Side note on Parents*
There are two ways to set an object's parent.

Here's one way
```js
newUi('h1',Body)
```
Here's the other way
```js
Heading = newUi('h1')
Heading.Parent(Body)
```
In both cases, the Heading object (Equivalent to the h1 tag) becomes a child of the Body object.


## <b>**Examples**</b>

Here are some epic examples to help you in your quest.

Example 1:
```js
TopBar = newUi('Div',Body)
TopBar.BackgroundColor('#a6b9ff')
TopBar.Size('100%',100)

Title = newUi('h1',TopBar)
Title.Text('Hello world!')
Title.TextColor('White')
Title.Size(800,100)
Title.Position('calc(50% - 400px)',-10)
Title.TextSize(100)

Message = newUi('b',Body)
Message.Text(
`This is an ugly example ui. <br>
bla bla bla bla bla bla bla bla bla bla<br>
You can have whatever text you want here`)
Message.Size('100%','100%')
Message.Position(100,150)
Message.TextSize(50)
```

Example 2:
eh im tired maybe later

Example 3:
here's a picture of a cat instead
https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940



##TO DO:
- Change font
- Set custom font








