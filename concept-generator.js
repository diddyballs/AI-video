class VideoConceptGenerator {
      constructor() {
          this.conceptPool = [
              { "id": "lion-roar", "animal": "Lion", "prompt": "Cinematic 9:16 video: Lion roaring,
  shockwaves expanding, reality distortion" },
              { "id": "squirrel-size", "animal": "Squirrel", "prompt": "Cinematic 9:16 video: Squirrel grows
  2x in size every step" },
              { "id": "spider-venom", "animal": "Spider", "prompt": "Cinematic 9:16 video: Neon venom
  melting steel, acid cascade" }
          ];
      }
      generateConcepts() { return this.conceptPool.sort(() => 0.5 - Math.random()).slice(0, 3); }
  }
