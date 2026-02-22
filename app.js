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
    const hue = Math.floor((key.note / 127) * 360); // this line is from Gemini, typed by hand.
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 50%)`; // this line is from Gemini, typed by hand. 
}); 


  

