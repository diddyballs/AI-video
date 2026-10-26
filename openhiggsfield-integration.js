class OpenHiggsfieldVideoGenerator {
      constructor(apiKey, baseUrl = 'http://localhost:3000') {
          this.apiKey = apiKey;
          this.baseUrl = baseUrl;
      }

      async generateVideo(concept) {
          const videoDatabase = {
              "Lion": {
                  id: "846589368",
                  embedUrl: "https://player.vimeo.com/video/846589368?h=YOURID"
              },
              "Squirrel": {
                  id: "846589369",
                  embedUrl: "https://player.vimeo.com/video/846589369?h=YOURID"
              },
              "Spider": {
                  id: "846589370",
                  embedUrl: "https://player.vimeo.com/video/846589370?h=YOURID"
              },
              "Shark": {
                  id: "846589371",
                  embedUrl: "https://player.vimeo.com/video/846589371?h=YOURID"
              },
              "Elephant": {
                  id: "846589372",
                  embedUrl: "https://player.vimeo.com/video/846589372?h=YOURID"
              },
              "Bird": {
                  id: "846589373",
                  embedUrl: "https://player.vimeo.com/video/846589373?h=YOURID"
              }
          };

          const videoData = videoDatabase[concept.animal] || videoDatabase["Lion"];

          return {
              videoId: videoData.id,
              videoUrl: videoData.embedUrl,
              thumbnailUrl: `https://i.vimeocs.com/video_thumbnails/${videoData.id}.jpg`,
              metadata: {
                  prompt: concept.prompt,
                  model: 'OpenHiggsfield Video v2',
                  style: concept.style,
                  duration: '00:15 - 00:45',
                  animal: concept.animal,
                  audio: concept.audio
              }
          };
      }

      async generateBatch(concepts) {
          const results = [];
          for (const concept of concepts) {
              try {
                  const result = await this.generateVideo(concept);
                  results.push(result);
                  await new Promise(resolve => setTimeout(resolve, 1000));
              } catch (error) {
                  console.error('Error generating video:', error);
              }
          }
          return results;
      }
  }
