const screen=document.querySelector(".battle");
const screenResultat=document.querySelector("#result");
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

toArrayNmbAndOps=(StringToArray)=>{

    let finalArray=StringToArray.replaceAll("*",",*,")
                    .replaceAll("/",",/,").replaceAll("+",",+,")
                    .replaceAll("-",",-,").split(",");
    console.log(finalArray);
}
toArrayNmbAndOps("2*6/4-5+2/1-5*2");
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

    const indexLastElement=screen.innerText.length-1;
    const screenContent=screen.innerText;
    const lastElementInserted=screenContent.innerText[indexLastElement];
   
   
        if( lastElementInserted !== "+" &&
            lastElementInserted !== "-" &&
            lastElementInserted !== "*" &&
            lastElementInserted !== "/" &&
            lastElementInserted !== "."){
                let count=0;
                const arrayWork=toArrayNmbAndOps(screenContent);
                while( count<arrayWork.length ){
                    if( arrayWork[i]=="*"||arrayWork[i]=="/" ){
                        
                    }
                }

        }
    
   


}

buttonsContainer.addEventListener("click",addToScreen);
deleteButton.addEventListener("click",deleteHandler);
clean.addEventListener("click",()=>{
    screen.innerText="";
});