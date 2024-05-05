from js import document

div = document.createElement("div")
div.innerHTML = "<h1>This element was created from Python</h1>"
document.body.prepend(div)

x = 0

def hello():
    print("Hello from function in .py file")

def add():
    return x + 10;
