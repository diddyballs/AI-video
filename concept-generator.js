class VideoConceptGenerator {
      constructor() {
          this.concepts = [
              {
                  animal: "Lion",
                  prompt: "Lion roaring, shockwaves expanding, reality distortion, exponential
  intensity, dramatic lighting",
                  style: "hyperrealistic",
                  audio: "Exponentially increasing bass and spatial audio"
              },
              {
                  animal: "Squirrel",
                  prompt: "Squirrel taking step, instantly doubling in size, realistic fur
  texture, dramatic low-angle",
                  style: "photorealistic",
                  audio: "Deep seismic footsteps, growing rumbling"
              },
              {
                  animal: "Spider",
                  prompt: "Spider fangs dripping neon green venom, photorealistic acid melting
  steel",
                  style: "hyperrealistic",
                  audio: "Geiger counter ticking, acid hiss"
              },
              {
                  animal: "Shark",
                  prompt: "Shark swimming, each lap creates wave intensification, photorealistic
  water physics",
                  style: "photorealistic",
                  audio: "Water cracking, sonic boom effects"
              },
              {
                  animal: "Elephant",
                  prompt: "Elephant age reveals, eyes glowing with ancient wisdom, time bending
  effects",
                  style: "ethereal",
                  audio: "Distant drum rhythms, soft humming"
              },
              {
                  animal: "Bird",
                  prompt: "Bird singing, sound waves amplifying, glass shattering, harmonic
  resonance",
                  style: "photorealistic",
                  audio: "High frequency ringing, harmonic echoes"
              }
          ];
      }

      generateConcepts() {
          const shuffled = [...this.concepts].sort(() => 0.5 - Math.random());
          return shuffled.slice(0, 6);
      }
  }
