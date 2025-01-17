const { AbstractSetup } = require("./abstract-setup");
const { ObjectNamespace } = require("../lib/object-namespace");
const { Spawn } = require("./spawn/spawn");
const { ObjectType, Rotator, Vector, world } = require("../wrapper/api");

const GRAVEYARDS = {
    d: 89.8,
    yaw0: 126,
    dYaw: 36,
    count: 9,
    nsid: "bag:base/garbage",
};

class SetupTableGraveyards extends AbstractSetup {
    setup() {
        for (let i = 0; i < GRAVEYARDS.count; i++) {
            const yaw = GRAVEYARDS.yaw0 + GRAVEYARDS.dYaw * i;
            const pos = new Vector(
                GRAVEYARDS.d,
                0,
                world.getTableHeight() + 1
            ).rotateAngleAxis(yaw, [0, 0, 1]);
            const rot = new Rotator(0, yaw, 0);
            const obj = Spawn.spawn(GRAVEYARDS.nsid, pos, rot);
            obj.setScale(new Vector(0.8, 0.8, 0.5));
            obj.setObjectType(ObjectType.Ground);
        }
    }

    clean() {
        for (const obj of world.getAllObjects()) {
            if (obj.getContainer()) {
                continue;
            }
            const nsid = ObjectNamespace.getNsid(obj);
            if (nsid !== "bag:base/garbage") {
                continue;
            }
            obj.destroy();
        }
    }
}

module.exports = { SetupTableGraveyards };
