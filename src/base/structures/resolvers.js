const resolveRole = async ({ message, search }) => {
	const contentToCheck = search || message.content;
	if (!contentToCheck || typeof contentToCheck !== "string") return;
	// Try by parsing the search
	if (contentToCheck.match(/^<@&([0-9]{18})>/)) {
		const [, roleID] = contentToCheck.match(/^<@&([0-9]{18})>/);
		const roleFound = message.guild.roles.cache.get(roleID);
		if (roleFound)
			return roleFound;
	}
	// Try with ID
	if (message.guild.roles.cache.has(search)) {
		const roleFound = message.guild.roles.cache.get(search);
		if (roleFound)
			return roleFound;
	}
	// Try with name with @
	if (
		message.guild.roles.cache.some(
			role => `@${role.name}` === search || role.name === search
		)
	) {
		const roleFound = message.guild.roles.cache.find(
			role => `@${role.name}` === search || role.name === search
		);
		if (roleFound)
			return roleFound;
	}
	return;
};

module.exports = {
	resolveRole
};