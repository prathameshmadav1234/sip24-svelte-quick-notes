<script>
	import Navbar from './components/Navbar.svelte';
	import Timeline from './components/Timeline.svelte';
	import Preview from './components/Preview.svelte';
	import ToolsPanel from './components/ToolsPanel.svelte';
	import MediaLibrary from './components/MediaLibrary.svelte';
	import SettingsPanel from './components/SettingsPanel.svelte';
  </script>
  
  <main>
	<Navbar />
	<div class="editor">
	  <Preview />
	  <ToolsPanel />
	  <Timeline />
	  <MediaLibrary />
	</div>
	<SettingsPanel />
  </main>
  
  <style>
	main {
	  display: flex;
	  flex-direction: column;
	  height: 100vh;
	}
	.editor {
	  display: flex;
	  flex: 1;
	}
  </style>
  