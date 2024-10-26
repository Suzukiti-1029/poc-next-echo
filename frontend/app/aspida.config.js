/** @type {Partial<import('aspida/dist/esm/getConfigs').AspidaConfig>} */

module.exports = {
	input: "src/generated/aspida",
	outputEachDir: true,
	openapi: { inputFile: "../../doc/openapi.yml" },
};
