// store.js
import { writable } from 'svelte/store';

export const videoClips = writable([]);
export const selectedClip = writable(null);
export const userSettings = writable({});
