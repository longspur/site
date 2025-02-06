module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addWatchTarget("./src/images/");
    
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        layouts: "_includes/layout",
      },
    };
  };