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




