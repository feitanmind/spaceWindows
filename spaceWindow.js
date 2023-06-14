let mousePosition = {x: undefined, y: undefined}
let spaceWindowMoving = false;
window.addEventListener('mousemove',(event) => {
    mousePosition = { x: event.clientX, y: event.clientY};
})
class SpaceWindow
{
    static moveWindow(topBar)
    {
        let spaceLeft = mousePosition.x - topBar.parentElement.parentElement.offsetLeft;
        let spaceTop = mousePosition.y - topBar.parentElement.parentElement.offsetTop;
        spaceWindowMoving = true;
        let moving = setInterval(() => {
            if(!spaceWindowMoving)
            {
                clearInterval(moving);
            }
            topBar.parentElement.parentElement.style.left = (mousePosition.x - spaceLeft) + "px";
            topBar.parentElement.parentElement.style.top = (mousePosition.y - spaceTop) + "px";
        },0.1)
    }
    static stopMoving(topBar)
    {
        spaceWindowMoving = false;
    }
    static createNewWindow(title = "New Window", htmlBody = "HTML body")
    {
        let newSpaceWindow = document.createElement("div");
        newSpaceWindow.setAttribute("class","spaceWindow");
        let codeOfWindow = `
        <div class="spaceWindow-topBar">
            <div class="spaceWindow-topBar-title" onmousedown="SpaceWindow.moveWindow(this)" onmouseup="SpaceWindow.stopMoving(this)">
                ${title}
            </div>
            <div class="spaceWindow-topBar-minimalizeButton spaceWindow-topBar-button">
                &#65343;
            </div> 
            <div class="spaceWindow-topBar-resizeButton spaceWindow-topBar-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>
            </div>
            <div class="spaceWindow-topBar-closeButton spaceWindow-topBar-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        </div>
        <div class="spaceWindow-windowBody">
            ${htmlBody}
        </div>
        `;
        newSpaceWindow.innerHTML = codeOfWindow;
        document.body.appendChild(newSpaceWindow);
    }

}