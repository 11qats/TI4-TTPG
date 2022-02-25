const assert = require("../../wrapper/assert-wrapper");
const { world } = require("../../wrapper/api");
const technologyData = require("./technology.data");
const { ObjectNamespace } = require("../object-namespace");
const { CardUtil } = require("../card/card-util");
const { Faction } = require("../faction/faction");
const { PlayerDesk } = require("../player-desk");
const locale = require("../locale");

technologyData.forEach((tech) => {
    tech.name = locale(tech.localeName);
    // TODO: translate also abbrevs (if needed; requires also text extractions from .data)
});

let _technologies;
let _technologiesByFaction = {};
let _settings = {
    pok: world.TI4.config.pok,
};
const types = ["Red", "Yellow", "Green", "Blue", "unitUpgrade"];

const isSourceEnabled = (source) => {
    return (
        source === undefined || // base technology
        (source === "PoK" && world.TI4.config.pok)
    ); // PoK technology
};

const getTechnologiesRawArray = (factionName) => {
    return technologyData.filter((tech) => {
        return (
            isSourceEnabled(tech.source) &&
            (!factionName || // no filtering for factions
                !tech.faction || // not a faction technology
                tech.faction === factionName) // matching faction
        );
    });
};

const checkCache = () => {
    const pok = world.TI4.config.pok;
    if (_settings.pok !== pok) {
        _technologies = undefined;
        _technologiesByFaction = {};
    }
    _settings.pok = pok;
};

const getTechnologiesMap = (factionName) => {
    let technologies = {
        all: getTechnologiesRawArray(factionName),
        byType: {},
    };

    types.forEach((type) => {
        technologies.byType[type] = technologies.all.filter((tech) => {
            return !type || tech.type === type;
        });
    });

    return technologies;
};

const getTechnologies = (factionName) => {
    checkCache();

    if (!factionName) {
        _technologies = _technologies || getTechnologiesMap();
        return _technologies;
    }

    _technologiesByFaction[factionName] =
        _technologiesByFaction[factionName] || getTechnologiesMap(factionName);
    return _technologiesByFaction[factionName];
};

class Technology {
    static getOwnedPlayerTechnologies(playerSlot) {
        assert(Number.isInteger(playerSlot));

        let playerTechnologiesNsid = [];

        for (const obj of world.getAllObjects()) {
            if (!CardUtil.isLooseCard(obj)) {
                continue; // not a lone, faceup card on the table
            }
            const nsid = ObjectNamespace.getNsid(obj);
            if (!nsid.startsWith("card.technology")) {
                continue;
            }
            const ownerPlayerSlot = PlayerDesk.getClosest(
                obj.getPosition()
            ).playerSlot;

            if (ownerPlayerSlot === playerSlot) {
                playerTechnologiesNsid.push(nsid);
            }
        }

        return technologyData.filter((tech) => {
            return playerTechnologiesNsid.some((nsid) =>
                // startsWith is used to support omega cards
                nsid.startsWith(tech.cardNsid)
            );
        });
    }

    static getTechnologies(playerSlot) {
        if (!playerSlot) {
            return getTechnologies().all;
        }

        const factionName = Faction.getByPlayerSlot(playerSlot).raw.faction;
        assert(factionName); // a faction was identified
        return getTechnologies(factionName).all;
    }

    static getTechnologiesByType(playerSlot) {
        if (!playerSlot) {
            return getTechnologies().byType;
        }

        const factionName = Faction.getByPlayerSlot(playerSlot).raw.faction;
        assert(factionName); // a faction was identified
        return getTechnologies(factionName).byType;
    }

    static getTechnologiesOfType(type, playerSlot) {
        assert(types.includes(type));
        return Technology.getTechnologiesByType(playerSlot)[type];
    }
}

module.exports = { Technology };