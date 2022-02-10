const {
    globalEvents,
    Color,
    MockButton,
    MockGameObject,
    MockGameWorld,
    MockPlayer,
    MockVerticalBox,
} = require("../../mock/mock-api");
const { PlayerDesk } = require("../../lib/player-desk");
const {
    broadcastMessage,
    onUiClosedClicked,
    registerStrategyCard,
} = require("./strategy-card");
const TriggerableMulticastDelegate = require("../../lib/triggerable-multicast-delegate");

// mock global.js event registration
globalEvents.TI4 = {
    onStrategyCardPlayed: new TriggerableMulticastDelegate(),
    onStrategyCardSelectionDone: new TriggerableMulticastDelegate(),
};

const red = {
    r: 1,
    g: 0,
    b: 0,
};
const green = {
    r: 0,
    g: 1,
    b: 0,
};

const player1 = new MockPlayer({
    name: "player1",
    playerColor: red,
    slot: 1,
});

const player2 = new MockPlayer({
    name: "player2",
    playerColor: green,
    slot: 2,
});

global.world = new MockGameWorld({
    allPlayers: [player1, player2],
});

describe("broadcaseMessage", () => {
    let player1MessageSpy, player2MessageSpy;
    const testMessage = "test";

    beforeEach(() => {
        player1MessageSpy = jest.spyOn(player1, "sendChatMessage");
        player2MessageSpy = jest.spyOn(player2, "sendChatMessage");
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it("with only text", () => {
        broadcastMessage(testMessage);

        expect(player1MessageSpy).toHaveBeenCalledTimes(1);
        expect(player1MessageSpy).toHaveBeenCalledWith(testMessage, undefined);
        expect(player2MessageSpy).toHaveBeenCalledTimes(1);
        expect(player2MessageSpy).toHaveBeenCalledWith(testMessage, undefined);
    });

    it("with text arguments", () => {
        broadcastMessage(testMessage, {});

        expect(player1MessageSpy).toHaveBeenCalledTimes(1);
        expect(player1MessageSpy).toHaveBeenCalledWith(testMessage, undefined);
        expect(player2MessageSpy).toHaveBeenCalledTimes(1);
        expect(player2MessageSpy).toHaveBeenCalledWith(testMessage, undefined);
    });

    it("with a player", () => {
        broadcastMessage(testMessage, undefined, player2);

        expect(player1MessageSpy).toHaveBeenCalledTimes(1);
        expect(player1MessageSpy).toHaveBeenCalledWith(testMessage, green);
        expect(player2MessageSpy).toHaveBeenCalledTimes(1);
        expect(player2MessageSpy).toHaveBeenCalledWith(testMessage, green);
    });

    it("with text arguments and a player", () => {
        broadcastMessage(testMessage, {}, player2);

        expect(player1MessageSpy).toHaveBeenCalledTimes(1);
        expect(player1MessageSpy).toHaveBeenCalledWith(testMessage, green);
        expect(player2MessageSpy).toHaveBeenCalledTimes(1);
        expect(player2MessageSpy).toHaveBeenCalledWith(testMessage, green);
    });
});

describe("when a strategy card UI is created", () => {
    var buttons, card, index, widgetFactory;

    beforeEach(() => {
        index = 0;
        card = new MockGameObject({
            id: "card",
        });
        buttons = [
            new MockButton({ text: "button 0" }),
            new MockButton({ text: "button 1" }),
        ];

        widgetFactory = function () {
            let widget = new MockVerticalBox();
            widget.addChild(buttons[index]);
            index++;
            return widget;
        };

        PlayerDesk.setPlayerCount(2);
        PlayerDesk.getPlayerDesks()[0].seatPlayer(player1);
        PlayerDesk.getPlayerDesks()[1].seatPlayer(player2);
    });

    afterEach(() => {
        card.destroy();
        jest.clearAllMocks();
    });

    it("by calling the registerStrategyCard and trigger the 'Play' event", () => {
        const red = {
            r: 1,
            g: 0,
            b: 0,
        };

        registerStrategyCard(card, widgetFactory, 100);
        globalEvents.TI4.onStrategyCardPlayed.trigger(card, player1);

        // one UI per player
        expect(global.world.getUIs().length).toBe(2);
        expect(
            global.world.getUIs()[0].widget.getChild().getChildren()[0]
        ).toBe(buttons[0]);
        expect(
            global.world.getUIs()[1].widget.getChild().getChildren()[0]
        ).toBe(buttons[1]);
    });
});

describe("when the close button is clicked in a players selection", () => {
    let buttons, card, index;

    const widgetFactory = () => {
        let widget = new MockVerticalBox();
        widget.addChild(buttons[index]);
        index++;
        return widget;
    };

    beforeEach(() => {
        index = 0;
        buttons = [
            new MockButton({ text: "button 0" }),
            new MockButton({ text: "button 1" }),
        ];

        PlayerDesk.setPlayerCount(2);
        PlayerDesk.getPlayerDesks()[0].seatPlayer(player1);
        PlayerDesk.getPlayerDesks()[1].seatPlayer(player2);
    });

    afterEach(() => {
        card.destroy();
        jest.clearAllMocks();
    });

    it("in case the owner clicked the button, then the global event triggers", () => {
        card = new MockGameObject();
        const globalEventTriggerSpy = jest.spyOn(
            globalEvents.TI4.onStrategyCardSelectionDone,
            "trigger"
        );
        registerStrategyCard(card, widgetFactory, 100);
        globalEvents.TI4.onStrategyCardPlayed.trigger(card, player1);

        onUiClosedClicked(buttons[0], player1);

        expect(globalEventTriggerSpy).toHaveBeenCalledTimes(1);
    });

    it("in case the another player clicked the button, then the global event does not trigger", () => {
        card = new MockGameObject();
        const globalEventTriggerSpy = jest.spyOn(
            globalEvents.TI4.onStrategyCardSelectionDone,
            "trigger"
        );
        registerStrategyCard(card, widgetFactory, 100);
        globalEvents.TI4.onStrategyCardPlayed.trigger(card, player1);

        onUiClosedClicked(buttons[0], player2);

        expect(globalEventTriggerSpy).toHaveBeenCalledTimes(0);
    });

    it("in case all players have resolved the strategy card, a message is broadcast", () => {
        card = new MockGameObject();
        const player1SendChatMessageSpy = jest.spyOn(
            player1,
            "sendChatMessage"
        );
        const player2SendChatMessageSpy = jest.spyOn(
            player2,
            "sendChatMessage"
        );
        registerStrategyCard(card, widgetFactory, 100);
        globalEvents.TI4.onStrategyCardPlayed.trigger(card, player1);

        onUiClosedClicked(buttons[1], player2);
        onUiClosedClicked(buttons[0], player1);

        expect(player1SendChatMessageSpy).toHaveBeenCalledTimes(1);
        expect(player2SendChatMessageSpy).toHaveBeenCalledTimes(1);
    });
});

describe("when registering a strategy card", () => {
    let card, widgetFactory, onStrategyCardPlayed, onStrategyCardSelectionDone;

    beforeEach(() => {
        card = new MockGameObject();
        widgetFactory = jest.fn(() => new MockGameObject());
        onStrategyCardPlayed = jest.fn();
        onStrategyCardSelectionDone = jest.fn();
    });

    afterEach(() => {
        card.destroy();
    });

    it("and the play button is pressed as well as a player UI is closed", () => {
        registerStrategyCard(
            card,
            widgetFactory,
            100,
            new Color(1, 0, 0),
            onStrategyCardPlayed,
            onStrategyCardSelectionDone
        );

        expect(globalEvents.TI4.onStrategyCardPlayed._delegates.length).toBe(1);
        expect(
            globalEvents.TI4.onStrategyCardSelectionDone._delegates.length
        ).toBe(1);

        globalEvents.TI4.onStrategyCardPlayed.trigger(card, player1);

        // the widgetFactory is called once per player
        expect(widgetFactory).toBeCalledTimes(2);
        expect(onStrategyCardPlayed).toBeCalledTimes(1);
        expect(onStrategyCardSelectionDone).toBeCalledTimes(0);

        globalEvents.TI4.onStrategyCardSelectionDone.trigger(card, player1);

        expect(widgetFactory).toBeCalledTimes(2);
        expect(onStrategyCardPlayed).toBeCalledTimes(1);
        expect(onStrategyCardSelectionDone).toBeCalledTimes(1);
    });

    it("and the object is destroyed", () => {
        registerStrategyCard(
            card,
            widgetFactory,
            100,
            new Color(1, 0, 0),
            onStrategyCardPlayed,
            onStrategyCardSelectionDone
        );

        card.destroy();

        expect(globalEvents.TI4.onStrategyCardPlayed._delegates.length).toBe(0);
        expect(
            globalEvents.TI4.onStrategyCardSelectionDone._delegates.length
        ).toBe(0);
    });
});
