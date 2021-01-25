const screen=document.querySelector(".battle");
const buttonsContainer=document.querySelector("#buttons");
const deleteButton=document.querySelector("#delete");
const clean=document.querySelector("#clean");
const calculButton=document.querySelector("#calcul");   

deleteHandler=()=>{
    let screenNumbers=screen.innerText;
    let afterRemove=screenNumbers.slice(0,-1);
    screen.innerText="";
    for(let i=0;i<afterRemove.length;i++){
        if(afterRemove[i]=="*" || afterRemove[i]=="+"|| afterRemove[i]=="-"|| afterRemove[i]=="/" || afterRemove[i]=="%") 
            screen.appendChild(addingTextToSpan(afterRemove[i]));
        else{
            let text=document.createTextNode(afterRemove[i])
            screen.appendChild(text);
        } 
    }
}

addToScreen = (event)=>{
    if(screen.innerText.length==0){
        if(event.target.classList.contains("number")){
            if(event.target.innerText!="."){
                let text=document.createTextNode(event.target.innerText);
                screen.append(text); 
            }else{
                screen.appendChild(document.createTextNode("0."))
            }
        }
    }
    else{
        let indexLastElement=screen.innerText.length-1;
        let lastElementInserted=screen.innerText[indexLastElement];
        if(event.target.classList.contains("operation")){
            if(lastElementInserted!=="."){
                
                if(event.target.innerText==="/" || event.target.innerText==="*"){
                    
                    if( lastElementInserted !== "*" &&
                        lastElementInserted !== "/" &&
                        lastElementInserted !== "+" &&
                        lastElementInserted !== "-" )
                    
                            screen.appendChild(addingTextToSpan(event.target.innerText));  
                }

                else if(event.target.innerText==="-"){
                    
                    if(lastElementInserted!=="-"){
                        
                        if(lastElementInserted=="+"){
                            deleteHandler();
                            screen.appendChild(addingTextToSpan("-"));
                        }   
                        else
                            screen.appendChild(addingTextToSpan(event.target.innerText));  
                    }

                }
                else{
                                       
                    if(lastElementInserted!=="+"){
                        
                        if(lastElementInserted=="-"){
                            deleteHandler();
                            screen.appendChild(addingTextToSpan("+"));
                        }
                        else if( lastElementInserted!=="*" && lastElementInserted!=="/" )
                            screen.appendChild(addingTextToSpan(event.target.innerText)) 
                    }
  
                }

    
            }

        }
        else if(event.target.classList.contains("number")){
        let text=document.createTextNode(event.target.innerText);
        screen.append(text);
        }
    }
}

addingTextToSpan=(text)=>{
    let mySpan=document.createElement("span");
    mySpan.style.cssText="color:#e6274e;font-size:22px;margin:2px 5px;"
    let textSpan=document.createTextNode(text);
    mySpan.appendChild(textSpan);
    return mySpan;
}

calculResultHandler=()=>{
    let result;

}

buttonsContainer.addEventListener("click",addToScreen);
deleteButton.addEventListener("click",deleteHandler);
clean.addEventListener("click",()=>{
    screen.innerText="";
    console.log("hi");
});