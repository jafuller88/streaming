import * as Hls from "hls.js"

function loadVideo() {
    let video: HTMLVideoElement = document.getElementById("video") as HTMLVideoElement;
    if(Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource("http://localhost:8081/video/stream.m3u8");
        if (video) {
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play();
            });
        }
    }
}

loadVideo();
