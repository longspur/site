module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("test.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
    
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        layouts: "_includes/layouts",
      },
    };
  };