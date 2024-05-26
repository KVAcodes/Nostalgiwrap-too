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

    async function preloadInitialVideo() {
        const videoSrc = window.innerWidth <= 650 ? mobileVideoSrc : defaultVideoSrc;
        const videoBlob = await fetchVideo(videoSrc);

        // Set initial video source
        const objectURL = URL.createObjectURL(videoBlob);
        video_dyn.src = objectURL;

        // Hide the loading screen
        loadingScreen.style.display = 'none';

        // Preload the other video
        preloadOtherVideo();
    }

    async function preloadOtherVideo() {
        if (window.innerWidth <= 650) {
            defaultVideoBlob = await fetchVideo(defaultVideoSrc);
        } else {
            mobileVideoBlob = await fetchVideo(mobileVideoSrc);
        }
    }

    function setVideoSource() {
        let videoBlob;
        if (window.innerWidth <= 650) {
            videoBlob = mobileVideoBlob;
        } else {
            videoBlob = defaultVideoBlob;
        }

        if (videoBlob) {
            const objectURL = URL.createObjectURL(videoBlob);
            video_dyn.src = objectURL;
        }
    }

    // Preload the initial video
    preloadInitialVideo();

    // Update the video source when the window is resized
    window.addEventListener('resize', setVideoSource);

    // Adds an event listener to restart the video when it ends
    video_dyn.addEventListener('ended', function () {
        if (video_dyn.muted !== false) {
            video_dyn.currentTime = 0;
            video_dyn.play();
        }
    });
});