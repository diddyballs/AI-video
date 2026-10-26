 class OpenHiggsfieldVideoGenerator {
      constructor(apiKey, baseUrl = 'http://localhost:3000') {
          this.apiKey = apiKey;
          this.baseUrl = baseUrl;
      }

      async generateVideo(concept) {
          // This is where we send the actual prompt to OpenHiggsfield
          const response = await fetch(`${this.baseUrl}/generate`, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${this.apiKey}`,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  prompt: concept.prompt,
                  model: 'openhiggsfield-video-v2',
                  aspect_ratio: '9:16',
                  duration: '3-5 seconds',
                  style: concept.style || 'photorealistic'
              })
          });

          if (!response.ok) {
              throw new Error(`OpenHiggsfield API error: ${response.statusText}`);
          }

          const data = await response.json();

          return {
              videoId: data.id || `video_${Date.now()}`,
              videoUrl: data.video_url || data.output || `${this.baseUrl}/videos/${data.id}`,
              thumbnailUrl: data.thumbnail_url || `${this.baseUrl}/thumbnails/${data.id}`,
              metadata: {
                  prompt: concept.prompt,
                  model: data.model || 'openhiggsfield-video-v2',
                  processingTime: data.processing_time || '30 seconds',
                  duration: data.duration || '00:15 - 00:45',
                  style: data.style || concept.style || 'photorealistic'
              }
          };
      }

      async generateBatch(concepts) {
          const results = [];
          for (const concept of concepts) {
              try {
                  const result = await this.generateVideo(concept);
                  results.push(result);

                  // Rate limiting - wait between calls
                  await new Promise(resolve => setTimeout(resolve, 2000));
              } catch (error) {
                  console.error(`Failed to generate video for ${concept.animal}:`, error);
                  // Continue with next concept even if one fails
              }
          }
          return results;
      }
  }
