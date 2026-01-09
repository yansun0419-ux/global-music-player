import { create } from 'zustand';

// 1. data interface
export interface Track {
  id: number;
  name: string;
  artists: { name: string }[];
  album: { picUrl: string };
  duration: number;
}

// 2. state
interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  playlist: Track[];
  currentIndex: number;
  volume: number;
}

// 3. actions
interface PlayerActions {
  setPlaylist: (list: Track[]) => void;
  playTrack: (track: Track) => void;
  play: () => void;
  pause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (vol: number) => void;
}

// 4. create Store
export const usePlayerStore = create<PlayerState & PlayerActions>((set, get) => ({
  // initial state
  currentTrack: null,
  isPlaying: false,
  playlist: [],
  currentIndex: -1,
  volume: 0.5,

  // actions implementation
  setPlaylist: (list) => set({ playlist: list }),

  playTrack: (track) => {
    // find the index of this track in the playlist
    const { playlist } = get();
    const index = playlist.findIndex((t) => t.id === track.id);
    
    // add to playlist if not found
    let newPlaylist = playlist;
    let newIndex = index;
    
    if (index === -1) {
      newPlaylist = [...playlist, track];
      newIndex = newPlaylist.length - 1;
    }

    set({
      currentTrack: track,
      playlist: newPlaylist,
      currentIndex: newIndex,
      isPlaying: true, // auto play after switching track
    });
  },

  play: () => set({ isPlaying: true }),
  
  pause: () => set({ isPlaying: false }),

  nextTrack: () => {
    const { playlist, currentIndex } = get();
    if (playlist.length === 0) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    set({
      currentIndex: nextIndex,
      currentTrack: playlist[nextIndex],
      isPlaying: true,
    });
  },

  prevTrack: () => {
    const { playlist, currentIndex } = get();
    if (playlist.length === 0) return;

    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    set({
      currentIndex: prevIndex,
      currentTrack: playlist[prevIndex],
      isPlaying: true,
    });
  },
  
  setVolume: (vol) => set({ volume: vol }),
}));