 import { root } from "../main"
 export const timeLine = function () {
    const timeLineContainer = document.createElement("section") /* contenedor principal de los otros dos divs*/
    const postUserContainer = document.createElement("article")
    const inputText = document.createElement("input")
    const button = document.createElement("button")
    const postsContainer= document.createElement("article") 
    const userPicture = document.createElement("img")
    const userName= document.createElement("h4")
    inputText.type= "text";
    buttton.textContent="publicar"
    root.append(timeLineContainer)
    timeLineContainer.append(postUserContaine, postsContainer)
    postUserContainer.append(inputText, button)
    postsCointainer.append(userPicture, userName)

     

return mainContainer

}