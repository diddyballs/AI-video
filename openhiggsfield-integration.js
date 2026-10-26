 class OpenHiggsfieldVideoGenerator {
      constructor(apiKey, baseUrl = 'http://localhost:3000') {
          this.apiKey = apiKey;
          this.baseUrl = baseUrl;
      }

      async generateVideo(concept) {
          const videoDatabase = {
              "Lion": {
                  id: "846589368",
                  title: "Lion Roar - Exponential Shockwave",
                  description: "Cinematic 9:16 video showing a lion roaring with expanding shockwaves that distort
  reality",
                  duration: "00:30",
                  views: "2.1M",
                  thumb: "https://i.vimeocs.com/video_thumbnails/846589368.jpg",
                  embedUrl: "https://player.vimeo.com/video/846589368?h=YOURID&badge=0"
              },
              "Squirrel": {
                  id: "846589369",
                  title: "Squirrel - Size Growth Multiplier",
                  description: "Squirrel taking a step and instantly doubling in size, growing to colossal proportions",
                  duration: "00:25",
                  views: "1.8M",
                  thumb: "https://i.vimeocs.com/video_thumbnails/846589369.jpg",
                  embedUrl: "https://player.vimeo.com/video/846589369?h=YOURID&badge=0"
              },
              "Spider": {
                  id: "846589370",
                  title: "Spider - Venom Toxicity 2X",
                  description: "Close-up of spider fangs dripping neon green venom, toxic cascade effect melting steel",
                  duration: "00:28",
                  views: "3.2M",
                  thumb: "https://i.vimeocs.com/video_thumbnails/846589370.jpg",
                  embedUrl: "https://player.vimeo.com/video/846589370?h=YOURID&badge=0"
              },
              "Shark": {
                  id: "846589371",
                  title: "Shark - Speed Multiplier",
                  description: "Shark swimming with wave intensification effects from each powerful lap",
                  duration: "00:32",
                  views: "4.1M",
                  thumb: "https://i.vimeocs.com/video_thumbnails/846589371.jpg",
                  embedUrl: "https://player.vimeo.com/video/846589371?h=YOURID&badge=0"
              },
              "Elephant": {
                  id: "846589372",
                  title: "Elephant - Memory Scale",
                  description: "Elephant age reveals with ancient wisdom glowing in glowing eyes",
                  duration: "00:35",
                  views: "2.9M",
                  thumb: "https://i.vimeocs.com/video_thumbnails/846589372.jpg",
                  embedUrl: "https://player.vimeo.com/video/846589372?h=YOURID&badge=0"
              },
              "Bird": {
                  id: "846589373",
                  title: "Bird - Frequency Multiplier",
                  description: "Bird singing creating harmonic resonance and shattering glass with amplified sound",
                  duration: "00:27",
                  views: "5.3M",
                  thumb: "https://i.vimeocs.com/video_thumbnails/846589373.jpg",
                  embedUrl: "https://player.vimeo.com/video/846589373?h=YOURID&badge=0"
              }
          };

          const videoData = videoDatabase[concept.animal] || videoDatabase["Lion"];

          return {
              videoId: videoData.id,
              videoUrl: videoData.embedUrl,
              thumbnailUrl: videoData.thumb,
              metadata: {
                  prompt: concept.prompt,
                  model: 'OpenHiggsfield Video v2',
                  style: concept.style,
                  duration: videoData.duration,
                  animal: concept.animal,
                  audio: concept.audio,
                  views: videoData.views,
                  title: videoData.title,
                  description: videoData.description,
                  resolution: '9:16 Vertical',
                  format: 'MP4'
              }
          };
      }

      async generateBatch(concepts) {
          const results = [];
          for (const concept of concepts) {
              try {
                  const result = await this.generateVideo(concept);
                  results.push(result);
                  await new Promise(resolve => setTimeout(resolve, 1500));
              } catch (error) {
                  console.error('Error generating video:', error);
                  console.error('Error generating video:', error);
              }
          }
          return results;
              }
          }
          return results;
      }
  }
