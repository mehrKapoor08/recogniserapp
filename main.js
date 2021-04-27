Webcam.set({
    width: 350,
    height:300,
    png_quality: 90,
img_format: 'png'
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
    });
};
console.log("ml5  version" , ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a42noaIhu/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult);

}
function gotResult(error, results){
    if(error){
        console.log(error)
    
    }
    else{
        console.log(results);
        document.getElementById("result_image_object_name").innerHTML= results[0].label;
        var r=  results[0].confidence.toFixed(3);
        document.getElementById("result_object_accuracy").innerHTML= (results[0].confidence.toFixed(3) * 100) + "%";
    }

}
