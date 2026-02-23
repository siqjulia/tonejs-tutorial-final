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

addEventListener("mouseover", () => {
    if(Tone.context.state != "running") { // make sure browser lets you play sound 
        Tone.start();
        console.log('audio can play now.')
    }
})

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
    const colorIndex = key.note % randomColor.length; // lines 37 - 38 are hand typed from Gemini 
    const newColor = randomColor[colorIndex]; // hand typed from Gemini [END]
    document.body.style.backgroundColor = newColor; 
});

var randomColor = [ // the idea for this color array was inspired from this CodePen project, but I changed the colors to be more vibrant uses Coolors: https://codepen.io/ramoen/pen/oWeVJQ
    "#ffbe0b", //yellow 
    "#fb5607", //orange
    "#ff006e", //pink
    "#8338ec", // purple
    "#3a86ff", // blue 
    "#00f5d4", // mint green 
    "#8ac926", // lime green 
    "#ffd97d", // light yellow 
    "#43bccd", // teal blue 
    "#fbff12", // lemon yellow 
    "#fc2f00", // red
    "#c200fb", // neon purple 
    "#820263", // dark purple 
    "#04e762", // neon green 
    "#f038ff", // magenta 
    "#dd94e4", // lilac purple
    "#168255", // forrest green 
    "#000e7f", // dark blue 
];




