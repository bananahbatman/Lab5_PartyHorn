
document.getElementById("volume-slider").addEventListener("change", function(){
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
    
    if(document.getElementById("volume-number").valueAsNumber == 0)
    {
        document.getElementById("Honk-Btn").disabled = true;
    }
    else
    {
        document.getElementById("Honk-Btn").disabled = false;
    }

    document.getElementById("horn-sound").volume = document.getElementById("volume-number").valueAsNumber / 100;
    if (document.getElementById("volume-slider").valueAsNumber > 66)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        
    }
    else if(document.getElementById("volume-slider").valueAsNumber > 33)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        
    }
    else if(document.getElementById("volume-slider").valueAsNumber > 0)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        
    }
    else
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    }
} );

document.getElementById("volume-number").addEventListener("input", function(){
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    
    if(document.getElementById("volume-number").valueAsNumber == 0)
    {
        document.getElementById("Honk-Btn").disabled = true;
    }
    else
    {
        document.getElementById("Honk-Btn").disabled = false;
    }

    document.getElementById("horn-sound").volume = document.getElementById("volume-number").valueAsNumber / 100;
    if (document.getElementById("volume-slider").valueAsNumber > 66)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        
    }
    else if(document.getElementById("volume-slider").valueAsNumber > 33)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        
    }
    else if(document.getElementById("volume-slider").valueAsNumber > 0)
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        
    }
    else
    {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    }

});


document.getElementById("radio-car-horn").addEventListener("change", function(){
if (document.getElementById("radio-car-horn").checked)
{
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}
});

document.getElementById("radio-party-horn").addEventListener("change", function(){
    if (document.getElementById("radio-party-horn").checked)
    {
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    }
});

document.getElementById("radio-air-horn").addEventListener("change", function(){
    if (document.getElementById("radio-air-horn").checked)
    {
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    }
});


document.getElementById("honk-btn").addEventListener("click", function(){
    event.preventDefault();
    if(document.getElementById("volume-slider").valueAsNumber > 0)
    {
        
        var audio = document.getElementById("horn-sound");
        audio.play();
        return false;
    }
});