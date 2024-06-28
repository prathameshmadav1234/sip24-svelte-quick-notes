<script>
    import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
    import { videoClips, selectedClip } from '../store.js';
    import { onMount } from 'svelte';
  
    let ffmpeg;
    let isLoaded = false;
    let clips = [];
    let selected = null;
  
    videoClips.subscribe(value => {
      clips = value;
    });
  
    selectedClip.subscribe(value => {
      selected = value;
    });
  
    async function loadFFmpeg() {
      if (!ffmpeg) {
        ffmpeg = createFFmpeg({ log: true });
        await ffmpeg.load();
        isLoaded = true;
      }
    }
  
    async function transcode() {
      if (!selected) return;
      await loadFFmpeg();
      
      ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(selected.url));
      await ffmpeg.run('-i', 'input.mp4', 'output.mp4');
      const data = ffmpeg.FS('readFile', 'output.mp4');
  
      const video = document.getElementById('output-video');
      video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
    }
  
    onMount(loadFFmpeg);
  </script>
  
  <div class="tools-panel">
    <button on:click={transcode} disabled={!selected}>Transcode Video</button>
    <!-- Add more tools as needed -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video id="output-video" controls></video>
  </div>
  
  <style>
    .tools-panel {
      flex: 1;
      background: #eee;
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }
    button {
      margin-bottom: 0.5rem;
    }
    video {
      margin-top: 1rem;
      max-width: 100%;
    }
  </style>
  