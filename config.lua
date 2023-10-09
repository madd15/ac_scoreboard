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
	serverName = 'Oceania RP',

	-- Server image shown in the scoreboard header.
	serverImage = 'https://cdn.discordapp.com/attachments/373669492187856896/1158554416471871558/OCE1920x756-2.png',

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
			groups = {'police'},
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
	},

	-- Activity list. groupLabel MUST appear in the groupList above.
	activityList = {
		{
			label = 'Bank',
			minNumber = 0,
			groupLabel = 'Police'
		},
		{
			label = 'Heist',
			minNumber = 3,
			groupLabel = 'Police'
		},
	},
}
