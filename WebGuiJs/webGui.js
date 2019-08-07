/*

WebGui by Blesson K. 2019
Inspired by a certain blocky game :)

MIT License
Feel free to use for your own projects

*/

print = console.log;

Body = {};
Body.position = [x=0,y=0];
Body.obj = document.body;

OnMobile = (typeof window.orientation !== 'undefined');


function newUi(type,parent){
    
    newObj = {};
    newObj.obj = document.createElement(type);
    newObj.position = [x=0,y=0];
    
    newObj.obj.style.position='Absolute';
    
    newObj.Position = function(x,y){
        newObj.obj.style.top = y;
        newObj.obj.style.left = x;
        newObj.position = [x=x,y=y];
    }
    
    newObj.Size = function(w,h){
        
        newObj.obj.style.width=w;
        newObj.obj.style.height=h
        
    }
    
    newObj.Z = function(z){newObj.obj.zIndex = z}
    
    newObj.OnClick = function(doFunct){newObj.obj.onclick=doFunct}
    
    newObj.BackgroundColor = function(color){newObj.obj.style.backgroundColor=color}
    
    newObj.TextColor = function(color){newObj.obj.style.color=color}
    
    newObj.TextSize = function(size){newObj.obj.style.fontSize=size}
    
    newObj.Text = function(txt){ newObj.obj.innerHTML=txt}
    
    newObj.Parent = function(newParent){
        newParent.obj.appendChild(newObj.obj)
        newObj.parent = newParent;
    }
    
    //-------------------------------------------
    
    if (parent)
        newObj.Parent(parent);
    
    newObj.Size(50,50)
    
    return newObj
}





