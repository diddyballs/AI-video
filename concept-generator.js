class VideoConceptGenerator {
      constructor() {
          this.concepts = [
              {
                  animal: "Lion",
                  prompt: "Cinematic 9:16 video: A majestic lion roars, shockwaves expanding, reality distortion,
  exponential intensity, dramatic lighting",
                  style: "hyperrealistic",
                  audio: "Exponential bass boost & spatial distortion effects"
              },
              {
                  animal: "Squirrel",
                  prompt: "Cinematic 9:16 video: A cute squirrel takes one step at a time, growing 2x larger with every
  step, realistic fur texture",
                  style: "photorealistic",
                  audio: "Deep seismic footsteps intensifying with each movement"
              },
              {
                  animal: "Spider",
                  prompt: "Cinematic 9:16 video: Spider fangs dripping neon green venom, acid melting steel, toxic
  cascade effect",
                  style: "hyperrealistic",
                  audio: "Geiger counter ticking, acid hiss, melting sounds"
              },
              {
                  animal: "Shark",
                  prompt: "Cinematic 9:16 video: Shark swimming, each lap creates wave intensification, photorealistic
  water physics",
                  style: "photorealistic",
                  audio: "Water cracking, sonic boom effects from each fin beat"
              },
              {
                  animal: "Elephant",
                  prompt: "Cinematic 9:16 video: Elephant age reveals, eyes glowing with ancient wisdom, time bending
  effects, ethereal lighting",
                  style: "ethereal",
                  audio: "Distant drum rhythms, soft humming, wisdom resonance"
              },
              {
                  animal: "Bird",
                  prompt: "Cinematic 9:16 video: Beautiful bird singing, sound waves amplifying, glass shattering,
  harmonic resonance",
                  style: "photorealistic",
                  audio: "High frequency ringing, harmonic echoes, reality cracking"
              }
          ];
      }

      generateConcepts() {
          const shuffled = [...this.concepts].sort(() => 0.5 - Math.random());
          return shuffled.slice(0, 6);
      }
  }
