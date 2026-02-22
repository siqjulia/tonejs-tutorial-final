/* const playBTN = document.getElementById("play-btn");
const synth = new Tone.Synth(); //set up a synth 

// const feedbackDelay = new Tone.FeedbackDelay("4n", 0.7); //parameters allow you to set the time between delays
const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: 2, 
    feedback: 0.3,
 // maxDelay: 2,

 wet: 0.9, 
});

synth.connect(feedbackDelay); //connect method is like an audio cable plugging synth into delay effect
feedbackDelay.toDestination(); 

playBTN.addEventListener("click", () => {
    if(Tone.context.state != "running") { // make sure browser lets you play sound 
        Tone.start();
    }
    synth.triggerAttackRelease("C4", "2n"); 
}); */

const synth = new Tone.Synth({
    oscillator: { 
        type: "square",
    }
}).toDestination();

const keyboard = new AudioKeys({
    rows: 1,
}); 

keyboard.down((key) => { 
    console.log(key); 
    synth.triggerAttackRelease(key.frequency, "8n") 
    const newColor = randomColor[Math.floor(Math.random() * randomColor.length)]; 
    document.body.style.backgroundColor = newColor;  
}); 


var randomColor = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#9E9E9E",
    "#607D8B"
  ];
  

var assignColor = [ 
    { midiNote:61, color:'#F4320B'}, // W 
    { midiNote:63, color:'#E91E63'}, // E 
    { midiNote:66, color:'#F4320B'}, // T
    { midiNote:68, color:'#F4320B'}, // Y
    { midiNote:70, color:'#F4320B'},// U 
    { midiNote:73, color:'#F4320B'},// O 
    { midiNote:75, color:'#F4320B'},// P
    { midiNote:60, color:'#F4320B'},// A
    { midiNote:62, color:'#F4320B'},// S
    { midiNote:64, color:'#F4320B'},// D
    { midiNote:65, color:'#F4320B'},// F
    { midiNote:67, color:'#F4320B'},// G 
    { midiNote:69, color:'#F4320B'},// H
    { midiNote:71, color:'#F4320B'},// J
    { midiNote:72, color:'#F4320B'},// K 
]