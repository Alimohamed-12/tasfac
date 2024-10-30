const img = document.getElementById('image');
img.onload = function() {
    const width = img.naturalWidth;
    const height = img.naturalHeight;
    const mode = img.src.split('.').pop(); 
    document.getElementById('info').innerHTML = `font size: ${width}x${height} <br> print model: ${mode}`;
};

const video = document.getElementById('video-player');
video.onloadedmetadata = function() {
    const duration = video.duration;
    const width = video.videoWidth;  
    const height = video.videoHeight 
       document.getElementById('infovide').innerHTML = `time: ${duration.toFixed(2)} second <br>font size: ${width}x${height}`;
};


const audio = document.getElementById('audio-player');
audio.addEventListener('loadedmetadata', function() {
    const duration = audio.duration; 
    const sampleRate = 44100; 
    const shape = 'غير متوفر'
    document.getElementById('infoaudio').innerHTML=`time: ${duration.toFixed(2)} second <br>sample rate: ${sampleRate} Hz <br>shape: ${shape}`;
});