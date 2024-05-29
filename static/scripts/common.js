document.addEventListener('DOMContentLoaded', function () {
    const video_dyn = document.getElementById('background-video');
    const loadingScreen = document.getElementById('loading-screen');

    // Preload videos
    const mobileVideoSrc = 'static/videos/Background_Animation_mobile.mp4';
    const defaultVideoSrc = 'static/videos/Background_Animation.mp4';

    let mobileVideoBlob, defaultVideoBlob;

    function fetchVideo(url) {
        return fetch(url).then(response => response.blob());
    }

    async function preloadVideos() {
        [mobileVideoBlob, defaultVideoBlob] = await Promise.all([
            fetchVideo(mobileVideoSrc),
            fetchVideo(defaultVideoSrc)
        ]);

        // Initial video setup
        setVideoSource();
        // Hide the loading screen after videos are preloaded
        loadingScreen.style.display = 'none';
    }

    function setVideoSource() {
        const videoBlob = window.innerWidth <= 650 ? mobileVideoBlob : defaultVideoBlob;
        const objectURL = URL.createObjectURL(videoBlob);
        video_dyn.src = objectURL;
    }

    // Sets the initial video source
    preloadVideos();

    // Updates the video source when the window is resized
    window.addEventListener('resize', setVideoSource);

    // Adds an event listener to restart the video when it ends
    video_dyn.addEventListener('ended', function () {
        if (video_dyn.muted !== false) {
            video_dyn.currentTime = 0;
            video_dyn.play();
        }
    });
});