var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event) {

    console.log(event)

    var content = event.results[0][0].transcript;
    console.log(content)

    document.getElementById("textbox").innerHTML = content;

    if (content == "take my selfie")
    {
        console.log("taking selfie......");
        speak();
    }
    else{
        console.log("wrong");
        speakworng();   
    }

    function speakworng(){
        var synth = window.speechSynthesis;
        speak_data1 = "enter the right command. to take selfie.";

        var utterThis4 = new SpeechSynthesisUtterance(speak_data1);
        synth.speak(utterThis4);
    }
        

}

function speak(){
    var synth = window.speechSynthesis;
    
    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie1"
        speak_data = "Taking Your Selfie In 5 seconds";

        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        console.log("selfie taking process completed and img saved to the idk.")
        
        save3();

    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2"
        speak_data2 = "Taking Your Selfie In 10 seconds";

        var utterThis2 = new SpeechSynthesisUtterance(speak_data2);
        synth.speak(utterThis2);
        take_snapshot();
        
        console.log("selfie taking process completed and img saved to the idk.")
        
        save2();
        
        
    }, 10000);

    setTimeout(function()
    {
        img_id = "selfie3"
        speak_data3 = "Taking Your Selfie In 15 seconds";

        var utterThis3 = new SpeechSynthesisUtterance(speak_data3);
        synth.speak(utterThis3);
        take_snapshot();
        
        console.log("selfie taking process completed and img saved to the idk.")
        
        save1();
        
        
    }, 15000);
}


camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie_image1" src="'+data_uri+'">';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie_image2" src="'+data_uri+'">';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie_image3" src="'+data_uri+'">';
        }

    });
}



