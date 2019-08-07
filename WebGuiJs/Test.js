


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
