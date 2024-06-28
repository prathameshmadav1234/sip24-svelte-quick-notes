<script>
    import { videoClips, selectedClip } from '../store.js';
  
    let clips = [];
    let selected = null;
  
    videoClips.subscribe(value => {
      clips = value;
    });
  
    selectedClip.subscribe(value => {
      selected = value;
    });
  
    function selectClip(clip) {
      selectedClip.set(clip);
    }
  </script>
  
  <div class="timeline">
    {#each clips as clip}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="clip" class:selected={clip === selected} on:click={() => selectClip(clip)}>
        {clip.name}
      </div>
    {/each}
  </div>
  
  <style>
    .timeline {
      flex: 2;
      background: #f0f0f0;
      padding: 1rem;
      display: flex;
    }
    .clip {
      margin: 0 0.5rem;
      padding: 0.5rem;
      background: #ddd;
      cursor: pointer;
    }
    .clip.selected {
      background: #aaa;
    }
  </style>
  