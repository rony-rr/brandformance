const fs = require("fs");
const path = require("path");

const bulkInstance = dir => {
	let files = fs.readdirSync(dir);
	// Remove hidden files
	files = files.filter(name => !name.startsWith("."));

	return files.map(file => {
		const filePath = path.join(dir, file);
		const instance = require(filePath);
		const name = file.replace(".js", "");
		return name !== "index" && {
			name: name,
			instance: instance
		};
	});
};

module.exports = {
	bulkInstance
};
