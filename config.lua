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
        visibleMaxPlayers = false,

        -- On which side of the screen the scoreboard should be (left, right).
        drawerSide = 'right',

        -- Group list shown in the scoreboard.
        groupList = {
            {label = "Haven Police", groups = {"police"}, icon = "FaBuildingShield", display = true},
            {label = "Haven Ambulance", groups = {"ambulance"}, icon = "FaTruckMedical", display = true},
            {label = "Exotic Customs", groups = {"savage"}, icon = "FaScrewdriverWrench", display = true},
            {label = "Luxury Autos", groups = {"cardealer"}, icon = "FaCarSide", display = true},
            {label = "East Coast Customs", groups = {"reline"}, icon = "FaScrewdriverWrench", display = true},
            {label = "Full Throttle", groups = {"bikedealer"}, icon = "FaMotorcycle", display = true},
            {label = "Harley Heaven", groups = {"hh"}, icon = "FaMotorcycle", display = true},
            {label = "UwU Cat Cafe", groups = {"catcafe"}, icon = "FaBowlFood", display = true},
            {label = "Koi Restaraunt", groups = {"japan"}, icon = "FaBowlFood", display = true},
            {label = "Shake N Bake", groups = {"shake"}, icon = "FaBowlFood", display = true},
            {label = "Court Staff", groups = {"judge", "lawyer"}, icon = "FaGavel", display = true},
        }
}
