Webcam.attach('#camera');
camera = document.getElementById("camera");


Webcam.set({
    width: 345,
    height:295,
    image_format:'png',
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version: ', ml5.version);
