---------------------------------------------------------------------------------------------
-- More detailed description of each config option can be found in 'docs/config.md' file.
---------------------------------------------------------------------------------------------

ac = {
	-- Language for the UI
	locale = 'en',

	-- Whether to check for newer resource version and notify in server console.
	versionCheck = true,

	-- Server name shown in the scoreboard header.
	serverName = 'Oceania RP',

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
			groups = {'police'}
		},
		{
			label = 'EMS',
			groups = {'ambulance'},
			separator = true
		},
		{
			label = 'Mechanic',
			groups = {'lscustom'},
			separator = true
		},
		{
			label = 'UwU Cafe',
			groups = {'uwu'}
		},
		{
			label = 'Vanilla Unicorn',
			groups = {'vanillaunicorn'}
		},
	},

	-- Robbery list.
	robberyList = {
		{
			label = 'Bank',
			minCops = 0
		},
		{
			label = 'Heist',
			minCops = 3
		},
	},
}
