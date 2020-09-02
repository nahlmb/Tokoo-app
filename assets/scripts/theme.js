const injectTheme = (themeVars, newCss) => {
    if(themeVars){

        const root = document.documentElement;
        for(var key in themeVars) {
            console.log(key);
            root.style.setProperty(key, themeVars[key])
        }
    }
    if(newCss){
        const style = document.createElement('style');
        style.textContent = newCss;
        document.head.append(style);
    }
}