const assert = require("../../wrapper/assert-wrapper");
const locale = require("../../lib/locale");
const { world } = require("../../wrapper/api");

const OUTCOME_TYPE = {
    FOR_AGAINST: "for/against",
    PLAYER: "player",
    OTHER: "other",
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Represent a single outcome for an agenda.
 */
class AgendaOutcome {
    static getDefaultOutcomeNames(outcomeType) {
        assert(typeof outcomeType === "string");
        switch (outcomeType) {
            case OUTCOME_TYPE.FOR_AGAINST:
                return [
                    locale("ui.agenda.outcome.for"),
                    locale("ui.agenda.outcome.against"),
                ];
            case OUTCOME_TYPE.PLAYER:
                return world.TI4.getAllPlayerDesks().map((desk) => {
                    return capitalizeFirstLetter(desk.colorName);
                });
            case OUTCOME_TYPE.OTHER:
                return Array(8).fill("?");
        }
    }

    constructor() {
        throw new Error("static only");
    }
}

module.exports = { AgendaOutcome, OUTCOME_TYPE };
