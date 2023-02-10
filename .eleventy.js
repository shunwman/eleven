module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/_include')
    return {
        dir:{
            input: "src",
            output: "public"
        }
    }
}