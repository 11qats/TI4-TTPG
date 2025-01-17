const assert = require("../wrapper/assert-wrapper");
const locale = require("../lib/locale");
const {
    AbstractPlanetAttachment,
} = require("../objects/attachments/abstract-planet-attachment");
const { ObjectNamespace } = require("../lib/object-namespace");
const {
    Card,
    GameObject,
    ImageWidget,
    Rotator,
    UIElement,
    Vector,
    globalEvents,
    refPackageId,
    world,
} = require("../wrapper/api");

const TOP = {
    x0: 2.2,
    y0: -0.4,
    dx: -1.6,
    dy: 1.6,
    numCols: 2,
};
const BOT = {
    x0: 2.2,
    y0: 0.4,
    dx: -1.6,
    dy: -1.6,
    numCols: 2,
};

function addImageCardFace(card, image, index) {
    assert(card instanceof Card);
    assert(typeof image === "string");
    assert(typeof index === "number");

    if (index >= 2) {
        index += 1; // obscures values
    }
    if (index >= 4) {
        index += 2; // obscures name, trait
    }

    const col = index % BOT.numCols;
    let row = Math.floor(index / TOP.numCols);
    if (row > 2) {
        row -= 0.5;
    }

    const ui = new UIElement();
    ui.position = new Vector(
        BOT.x0 + row * BOT.dx,
        BOT.y0 + col * BOT.dy,
        -0.11
    );
    ui.rotation = new Rotator(180, 180, 0);
    ui.scale = 0.3;
    ui.widget = new ImageWidget()
        .setImage(image, refPackageId)
        .setImageSize(50, 50);

    card.addUI(ui);
}

function addImageCardBack(card, image, index) {
    assert(card instanceof Card);
    assert(typeof image === "string");
    assert(typeof index === "number");

    if (index >= 4) {
        index += 2; // obscures values, name, and trait
    }

    const col = index % TOP.numCols;
    let row = Math.floor(index / TOP.numCols);

    const ui = new UIElement();
    ui.position = new Vector(
        TOP.x0 + row * TOP.dx,
        TOP.y0 + col * TOP.dy,
        0.11
    );
    ui.rotation = new Rotator(0, 0, 0);
    ui.scale = 0.3;
    ui.widget = new ImageWidget()
        .setImage(image, refPackageId)
        .setImageSize(50, 50);

    card.addUI(ui);
}

function addAttachmentsUI(card) {
    assert(card instanceof Card);

    const planet = world.TI4.getPlanetByCard(card);
    if (!planet) {
        return;
    }

    if (card.__hasAttachmentsUI) {
        removeAttachmentsUI(card);
    }

    if (planet.attachments.length === 0) {
        return; // nothing to attach
    }

    const attachmentNames = [];
    planet.attachments.forEach((attachment, index) => {
        assert(attachment instanceof AbstractPlanetAttachment);
        const attrs = attachment.getAttrs();
        const isFaceUp = attachment.isAttachedFaceUp() || !attrs.faceDown;
        const image = attrs[isFaceUp ? "faceUp" : "faceDown"].image;
        assert(image);

        addImageCardFace(card, image, index);
        addImageCardBack(card, image, index);
        attachmentNames.push(locale(attrs.localeName));
    });
    card.setDescription(attachmentNames.join("\n"));

    card.__hasAttachmentsUI = true;
}

function removeAttachmentsUI(card) {
    assert(card instanceof Card);

    const planet = world.TI4.getPlanetByCard(card);
    if (!planet) {
        return;
    }

    for (const ui of card.getUIs()) {
        card.removeUI(ui);
    }
    card.setDescription("");
    delete card.__hasAttachmentsUI;
}

globalEvents.TI4.onSystemChanged.add((systemTileObj) => {
    assert(systemTileObj instanceof GameObject);

    // Get card NSIDs.
    const system = world.TI4.getSystemBySystemTileObject(systemTileObj);
    const cardNsids = new Set();
    for (const planet of system.planets) {
        const cardNsid = planet.getPlanetCardNsid();
        cardNsids.add(cardNsid);
    }

    // Find cards.
    const cards = [];
    for (const obj of world.getAllObjects()) {
        const nsid = ObjectNamespace.getNsid(obj);
        if (cardNsids.has(nsid)) {
            cards.push(obj);
        }
    }

    // Modify.
    for (const card of cards) {
        addAttachmentsUI(card);
    }
});

globalEvents.TI4.onSingletonCardCreated.add((card) => {
    assert(card instanceof Card);
    const nsid = ObjectNamespace.getNsid(card);
    if (nsid.startsWith("card.planet")) {
        addAttachmentsUI(card);
    }
});

globalEvents.TI4.onSingletonCardMadeDeck.add((card) => {
    assert(card instanceof Card);
    if (card.__hasAttachmentsUI) {
        removeAttachmentsUI(card);
    }
});

// Script reload doesn't call onObjectCreated on existing objects, load manually.
if (world.getExecutionReason() === "ScriptReload") {
    for (const obj of world.getAllObjects()) {
        const nsid = ObjectNamespace.getNsid(obj);
        if (nsid.startsWith("card.planet")) {
            addAttachmentsUI(obj);
        }
    }
}
