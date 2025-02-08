
  // Tells Eleventy to look for Luxon
const { DateTime } = require('luxon');


// This is all the stuff that Eleventy is going to process when it exports your site
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");

 
  // Adds Next & Previous links to the bottom of our blog posts
  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("posts");    
    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];      
      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }
    return coll;
  });

  // Add the filter "readableDate" to simplify the way blog dates are presented in the Archives page
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
      'yyyy-LL-dd'
    );
  });

  // Add the filter "topDate" to simplify the way blog dates are presented at the top of blog posts
  eleventyConfig.addFilter('topDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
      'yyyy LLLL dd'
    );
  });

  // These are the folders that Eleventy will use. "src" is where you edit files that Eleventy will then take in and export into "public," which you upload.
    return {
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        layouts: "_includes/layout",
      },
    };
  };
