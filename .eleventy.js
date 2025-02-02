module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
eleventyConfig.addPassthroughCopy("images/thumbnails/art1.webp");
eleventyConfig.addPassthroughCopy("Roboto_Mono.ttf");
eleventyConfig.addPassthroughCopy("assets/fonts");
    
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
      },
    };
  };