module.exports = function sum(agr) {
	return agr.reduce((pre, current) => pre + current, 0);
};
