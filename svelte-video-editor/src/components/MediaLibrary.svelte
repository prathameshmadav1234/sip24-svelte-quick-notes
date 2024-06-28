<script>
    import { videoClips } from '../store.js';
  
    let clips = [];
    let newClip = '';
  
    videoClips.subscribe(value => {
      clips = value;
    });
  
    function handleFileUpload(event) {
      const files = event.target.files;
      for (let file of files) {
        const url = URL.createObjectURL(file);
        const clip = {
          name: file.name,
          url: url,
          file: file
        };
        videoClips.update(clips => [...clips, clip]);
      }
    }
  </script>
  
  <div class="media-library">
    <input type="file" multiple on:change={handleFileUpload} />
    <ul>
      {#each clips as clip}
        <li>{clip.name}</li>
      {/each}
    </ul>
  </div>
  
  <style>
    .media-library {
      flex: 1;
      background: #fff;
      border-left: 1px solid #ccc;
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }
    input {
      margin-bottom: 0.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 0.5rem;
    }
  </style>
  