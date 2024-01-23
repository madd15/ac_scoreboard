---------------------------------------------------------------------------------------------
-- More detailed description of each config option can be found in 'docs/config.md' file.
---------------------------------------------------------------------------------------------

ac = {
	-- Language for the UI
	locale = 'en',

	-- Whether to check for newer resource version and notify in server console.
	versionCheck = true,

	-- Whether to show Server name or Server image
	visibleImage = true,

	-- Server name shown in the scoreboard header.
	serverName = 'Haven Roleplay',

	-- Server image shown in the scoreboard header.
	serverImage = 'https://media.discordapp.net/attachments/1132662807410782318/1187335587406028800/HPRPlogo.png',

	-- Command name to open the scoreboard UI.
	commandName = 'score',

	-- Default keybind for the '/scoreboard' command.
	commandKey = 'DELETE',

	-- Which parts of the scoreboard should be visible (both, groups, players).
	visibleParts = 'groups',

	-- On which side of the screen the scoreboard should be (left, right).
	drawerSide = 'right',

	-- Group list shown in the scoreboard.
	groupList = {
		{
			label = 'Police',
			groups = {'police', 'sherriff'},
			display = true
		},
		{
			label = 'EMS',
			groups = {'ambulance'},
			display = true,
			separator = true
		},
		{
			label = 'Mechanic',
			groups = {'lscustom'},
			display = true,
			separator = true
		},
		{
			label = 'UwU Cafe',
			groups = {'uwu'},
			display = true
		},
		{
			label = 'Vanilla Unicorn',
			groups = {'vanillaunicorn'},
			display = true
		},
	}
}
