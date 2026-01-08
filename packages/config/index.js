// Entry point for the config package
module.exports = {
	biome: require("./biome.json"),
	typescript: {
		base: require("./tsconfig.base.json"),
		react: require("./tsconfig.react.json"),
	},
}
