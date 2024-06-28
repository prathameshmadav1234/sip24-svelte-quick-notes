<script>
  import { selectedClip } from '../store.js';
  let clip = null;

  selectedClip.subscribe(value => {
    clip = value;
  });
</script>

<div class="preview">
  {#if clip && clip.url}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src={clip.url} controls></video>
  {:else}
    <p>Select a clip to preview</p>
  {/if}
</div>

<style>
  .preview {
    flex: 3;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  video {
    max-width: 100%;
    max-height: 100%;
  }
  p {
    color: #fff;
  }
</style>
