const { PlayerDesk } = require("../lib/player-desk");
const { SetupFaction } = require("./setup-faction");
const { SetupGenericPromissory } = require("./setup-generic-promissory");
const { SetupGenericTechDeck } = require("./setup-generic-tech-deck");
const { SetupSheets } = require("./setup-sheets");
const { SetupStrategyCards } = require("./setup-strategy-cards");
const { SetupSupplyBoxes } = require("./setup-supply-boxes");
const { SetupSystemTiles } = require("./setup-system-tiles");
const { SetupTableDecks } = require("./setup-table-decks");
const { SetupUnits } = require("./setup-units");
const { MapStringLoad } = require("../lib/map-string/map-string-load");
const { refObject, world } = require("@tabletop-playground/api");

const ACTION = {
    GIZMO_DESKS: "*Gizmo desks",
    COUNT_OBJECTS: "*Count objects",
    CLEAN: "*Clean",
    UNITS: "*Units",
    SUPPLY: "*Supply",
    SHEETS: "*Sheets",
    GENERIC_TECH: "*Generic tech",
    GENERIC_PROMISSORY: "*Generic promissory",
    SYSTEM_TILES: "*System tiles",
    TABLE_DECKS: "*Table decks",
    STRATEGY_CARDS: "*Strategy cards",
    DEMO_MAP: "*Demo map",
    DEMO_FACTION: "*Demo faction",
};

for (const action of Object.values(ACTION)) {
    refObject.addCustomAction(action);
}

refObject.onCustomAction.add((obj, player, actionName) => {
    console.log(`${player.getName()} selected ${actionName}`);

    if (actionName === ACTION.GIZMO_DESKS) {
        PlayerDesk.drawDebug();
    } else if (actionName === ACTION.COUNT_OBJECTS) {
        console.log(`World #objects = ${world.getAllObjects().length}`);
    } else if (actionName === ACTION.CLEAN) {
        for (const obj of world.getAllObjects()) {
            if (obj.getContainer() || obj == refObject) {
                continue;
            }
            obj.destroy();
        }
    } else if (actionName === ACTION.UNITS) {
        for (const playerDesk of PlayerDesk.getPlayerDesks()) {
            new SetupUnits(playerDesk).setup();
        }
    } else if (actionName === ACTION.SUPPLY) {
        for (const playerDesk of PlayerDesk.getPlayerDesks()) {
            new SetupSupplyBoxes(playerDesk).setup();
        }
    } else if (actionName === ACTION.SHEETS) {
        for (const playerDesk of PlayerDesk.getPlayerDesks()) {
            new SetupSheets(playerDesk).setup();
        }
    } else if (actionName === ACTION.GENERIC_TECH) {
        for (const playerDesk of PlayerDesk.getPlayerDesks()) {
            new SetupGenericTechDeck(playerDesk).setup();
        }
    } else if (actionName === ACTION.GENERIC_PROMISSORY) {
        for (const playerDesk of PlayerDesk.getPlayerDesks()) {
            new SetupGenericPromissory(playerDesk).setup();
        }
    } else if (actionName === ACTION.SYSTEM_TILES) {
        new SetupSystemTiles().setup();
    } else if (actionName === ACTION.TABLE_DECKS) {
        new SetupTableDecks().setup();
    } else if (actionName === ACTION.STRATEGY_CARDS) {
        new SetupStrategyCards().setup();
    } else if (actionName === ACTION.DEMO_MAP) {
        MapStringLoad.load(
            "70 32 50 47 42 73 74 65 48 69 71 64 78 36 26 66 77 72 1 46 79 2 27 45 3 24 29 4 62 37 5 41 38 6 43 40"
        );
    } else if (actionName === ACTION.DEMO_FACTION) {
        const factions = [
            "ul",
            "arborec",
            "creuss",
            "muaat",
            "nekro",
            "argent",
            "vuilraith",
            "winnu",
        ];
        for (const playerDesk of PlayerDesk.getPlayerDesks()) {
            SetupFaction.setupDesk(playerDesk, factions.shift());
        }
    }
});
