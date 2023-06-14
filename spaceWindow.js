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
}