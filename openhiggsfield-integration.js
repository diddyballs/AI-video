class OpenHiggsfieldVideoGenerator {
      async generateBatch(concepts) {
          return concepts.map(c => ({
              thumbnailUrl: `https://via.placeholder.com/400x600/333/fff?text=${c.animal}`,
              metadata: { prompt: c.prompt, model: "openhiggsfield-v2" }
          }));
      }
  }
