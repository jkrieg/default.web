const themes = {
    light: "theme-light",
    dark: "theme-dark"
};
function component(){
    let currentTheme = "";
    
    function changeTheme(theme){
        const {body} = document;
        body.classList = [theme]
        currentTheme = theme;
    }
    function sayHello(){
        window.alert("Hello from Node");   
    }
    const element = document.createElement("div");
    const btnChangeTheme = document.createElement("button");
    const btnSayHello = document.createElement("button");

    btnChangeTheme.innerText = "Change theme";
    btnSayHello.innerText = "Say Hello";

    btnChangeTheme.addEventListener("click", function(){
        changeTheme(currentTheme == themes.dark? themes.light: themes.dark);
    });

    btnSayHello.addEventListener("click", sayHello);
    element.appendChild(btnChangeTheme);
    element.appendChild(btnSayHello);

    return element;
}


document.body.appendChild(component());