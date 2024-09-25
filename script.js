let btn=document.querySelector("#btn") ;
let content=document.querySelector("#content") ;
let voice=document.querySelector("#voice") ;

function speak_text(text){
    let speak_now= new SpeechSynthesisUtterance(text);
    speak_now.volume=1;
    speak_now.rate=1;
    speak_now.pitch=1;
    speak_now.lang="hi-GB";
    window.speechSynthesis.speak(speak_now);

}

// function wishme(){
//     let date = new Date();
//     let hours=date.getHours();

//     if(hours>=0 && hours<=12){
//         speak_text("good morning")
//     }
//     else if(hours>=12 && hours<=16){
//         speak_text("good afternoon")
//     }
//     else{
//         speak_text("good evening")
//     }
    
// }
// window.addEventListener('load' , () => {
//   wishme();
// }
// )

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()

recognition.onresult=(event)=>{
let currentIndex =event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
takecommand(transcript.toLowerCase())
}

btn.addEventListener("click" , ()=>{
    recognition.start()
    // btn.style.display="none"
    // voice.style.display="block"
})


function takecommand(message){

    //  btn.style.display="flex"
    // voice.style.display="none "

if(message.includes("hello") || message.includes("hey") || message.includes("hi")){
         speak_text("hello sir, how can i help you")
}
else if(message.includes("who are you")){
         speak_text("I am Jarvis created by Rishabh Mishra ")

}
else if(message.includes("youtube")){
          speak_text("opening youtube")
window.open("https://youtube.com/" , "_blank")
}

else if(message.includes("instagram")){
    speak_text("opening instagram")
window.open("https://instagram.com/" , "_blank")
}

else if(message.includes("facebook")){
    speak_text("opening facebook")
window.open("https://facebook.com/" , "_blank")
}

else if(message.includes("calculator")){
    speak_text("opening calculator")
window.open("calculator://")
}

else if(message.includes("whatsapp")){
    speak_text("opening whatsapp")
window.open("whatsapp://")
}

else if(message.includes("time")){
    let time= new Date().toLocaleDateString(undefined , {hour:"numeric" ,minute:"numeric"})
speak_text(time)
}

else if(message.includes("day")){
    let date= new Date().toLocaleDateString(undefined , {day:"numeric" ,month:"short"})
speak_text(date)
}

else if(message.includes("gali")){
    speak_text("Bhosdike tu gaali mat de ")

}
else{
    let finaltext = "this is what i found on internet regarding" +  message.replace("jarvis" , "")
    speak_text(finaltext)
    window.open(`https://www.google.com/search?q=${message.replace("jarvis" , "")}` , "_blank")
}

}