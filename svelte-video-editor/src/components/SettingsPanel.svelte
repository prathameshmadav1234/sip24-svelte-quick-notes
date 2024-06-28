<script>
    import { userSettings } from '../store.js';
  
    let settings = {};
  
    userSettings.subscribe(value => {
      settings = value;
    });
  
    function updateSetting(key, value) {
      userSettings.update(settings => {
        settings[key] = value;
        return settings;
      });
    }
  </script>
  
  <div class="settings-panel">
    <label>
      Video Quality:
      <select on:change={(e) => updateSetting('videoQuality', e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </label>
    <!-- Add more settings as needed -->
  </div>
  
  <style>
    .settings-panel {
      flex: 1;
      background: #f8f8f8;
      padding: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  </style>
  