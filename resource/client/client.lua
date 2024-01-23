local opened = false
local playerId = PlayerId()

local dataPromise = nil
RegisterNetEvent("ac_scoreboard:receiveData", function(data)
	if dataPromise then
		dataPromise:resolve(data)
		dataPromise = nil
	end
end)

---@param action string
---@param data table | boolean
local function sendNuiMessage(action, data)
	SendNUIMessage({
		action = action,
		data = data,
	})
end

local function handleClose()
	SetNuiFocus(false, false)
	SetNuiFocusKeepInput(false)
	opened = false
end

local function getGroups()
	local groupData = {}
	local offDutyData = {}
	for k, v in pairs(ac.groupList) do
		local group = v
		local count = 0
		for j, d in pairs(group.groups) do
			count += GlobalState[("%s:count"):format(d)] or 0
		end
		if count ~= 0 then
			groupData[#groupData + 1] = {
				label = group.label,
				count = count,
				display = group.display,
				separator = group.separator or nil,
			}
		else
			offDutyData[#offDutyData + 1] = {
				label = group.label,
				count = count,
				display = group.display,
				separator = group.separator or nil,
			}
		end
	end

	for i = 1, #offDutyData do
		groupData[#groupData + 1] = {
			label = group.label,
			count = count,
			display = group.display,
			separator = group.separator or nil,
		}
	end

	return groupData
end

local function getUiLocales()
	local uiLocales = {}
	for k, v in pairs(locales) do
		if k:find("ui_") then
			uiLocales[k] = v
		end
	end

	return uiLocales
end

local initialDataSet = false
local function setData()
	dataPromise = promise.new()
	TriggerServerEvent("ac_scoreboard:requestData")
	local data = Citizen.Await(dataPromise)

	if not initialDataSet then
		initialDataSet = true
		data.serverName = ac.serverName
		data.serverImage = ac.serverImage
		data.visibleImage = ac.visibleImage
		data.visibleParts = ac.visibleParts
		data.drawerSide = ac.drawerSide
		data.serverId = GetPlayerServerId(playerId)
		data.locales = getUiLocales()
	end

	data.groups = getGroups()

	sendNuiMessage("setData", data)
end

if ac.commandKey then
	RegisterKeyMapping(ac.commandName, locale("keymap_open"), "keyboard", ac.commandKey)
end

TriggerEvent("chat:addSuggestion", ("/%s"):format(ac.commandName), locale("command_open"))
RegisterCommand(ac.commandName, function()
	if opened then
		handleClose()
		sendNuiMessage("setVisible", false)
		return
	end

	opened = true

	CreateThread(function()
		while opened do
			DisablePlayerFiring(playerId, true)
			HudWeaponWheelIgnoreSelection()
			DisableControlAction(0, 1, true)
			DisableControlAction(0, 2, true)
			DisableControlAction(0, 140, true)
			DisableControlAction(0, 200, true)

			Wait(0)
		end
	end)

	setData()

	SetNuiFocus(true, true)
	SetNuiFocusKeepInput(true)

	sendNuiMessage("setVisible", true)
end, false)

RegisterNUICallback("close", function(_, cb)
	cb(1)
	handleClose()
end)
