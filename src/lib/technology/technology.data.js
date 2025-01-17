module.exports = [
    {
        localeName: "technology.name.neural_motivator",
        cardNsid: "card.technology.green:base/neural_motivator",
        type: "Green",
        requirements: {},
        abbrev: "Neural",
    },
    {
        localeName: "technology.name.psychoarchaeology",
        cardNsid: "card.technology.green:pok/psychoarchaeology",
        type: "Green",
        requirements: {},
        abbrev: "Pyschoarch",
        source: "PoK",
    },
    {
        localeName: "technology.name.dacxive_animators",
        cardNsid: "card.technology.green:base/dacxive_animators",
        type: "Green",
        requirements: {
            Green: 1,
        },
        abbrev: "Dacxive",
    },
    {
        localeName: "technology.name.bio_stims",
        cardNsid: "card.technology.green:pok/biostims",
        type: "Green",
        requirements: {
            Green: 1,
        },
        abbrev: "Bio-Stims",
        source: "PoK",
    },
    {
        localeName: "technology.name.hyper_metabolism",
        cardNsid: "card.technology.green:base/hyper_metabolism",
        type: "Green",
        requirements: {
            Green: 2,
        },
        abbrev: "Hyper",
    },
    {
        localeName: "technology.name.x_89_bacterial_weapon",
        cardNsid: "card.technology.green:base/x89_bacterial_weapon",
        type: "Green",
        requirements: {
            Green: 3,
        },
        abbrev: "X-89 B.W.",
    },
    {
        localeName: "technology.name.plasma_scoring",
        cardNsid: "card.technology.red:base/plasma_scoring",
        type: "Red",
        requirements: {},
        abbrev: "Plasma",
    },
    {
        localeName: "technology.name.ai_development_algorithm",
        cardNsid: "card.technology.red:pok/ai_development_algorithm",
        type: "Red",
        requirements: {},
        abbrev: "AI Dev Algo",
        source: "PoK",
    },
    {
        localeName: "technology.name.magen_defense_grid",
        cardNsid: "card.technology.red:base/magen_defense_grid",
        type: "Red",
        requirements: {
            Red: 1,
        },
        abbrev: "Magen",
    },
    {
        localeName: "technology.name.self_assembly_routines",
        cardNsid: "card.technology.red:pok/self_assembly_routines",
        type: "Red",
        requirements: {
            Red: 1,
        },
        abbrev: "Self Assembly",
        source: "PoK",
    },
    {
        localeName: "technology.name.duranium_armor",
        cardNsid: "card.technology.red:base/duranium_armor",
        type: "Red",
        requirements: {
            Red: 2,
        },
        abbrev: "Duranium",
    },
    {
        localeName: "technology.name.assault_cannon",
        cardNsid: "card.technology.red:base/assault_cannon",
        type: "Red",
        requirements: {
            Red: 3,
        },
        abbrev: "Assault Cannon",
    },
    {
        localeName: "technology.name.antimass_deflectors",
        cardNsid: "card.technology.blue:base/antimass_deflectors",
        type: "Blue",
        requirements: {},
        abbrev: "Antimass",
    },
    {
        localeName: "technology.name.dark_energy_tap",
        cardNsid: "card.technology.blue:pok/dark_energy_tap",
        type: "Blue",
        requirements: {},
        abbrev: "Dark Energy Tap",
        source: "PoK",
    },
    {
        localeName: "technology.name.gravity_drive",
        cardNsid: "card.technology.blue:base/gravity_drive",
        type: "Blue",
        requirements: {
            Blue: 1,
        },
        abbrev: "Grav Drive",
    },
    {
        localeName: "technology.name.sling_relay",
        cardNsid: "card.technology.blue:pok/sling_relay",
        type: "Blue",
        requirements: {
            Blue: 1,
        },
        abbrev: "Sling Relay",
        source: "PoK",
    },
    {
        localeName: "technology.name.fleet_logistics",
        cardNsid: "card.technology.blue:base/fleet_logistics",
        type: "Blue",
        requirements: {
            Blue: 2,
        },
        abbrev: "Fleet Logistics",
    },
    {
        localeName: "technology.name.light_wave_deflector",
        cardNsid: "card.technology.blue:base/lightwave_deflector",
        type: "Blue",
        requirements: {
            Blue: 3,
        },
        abbrev: "Light/Wave",
    },
    {
        localeName: "technology.name.sarween_tools",
        cardNsid: "card.technology.yellow:base/sarween_tools",
        type: "Yellow",
        requirements: {},
        abbrev: "Sarween",
    },
    {
        localeName: "technology.name.scanlink_drone_network",
        cardNsid: "card.technology.yellow:pok/scanlink_drone_network",
        type: "Yellow",
        requirements: {},
        abbrev: "Scanlink",
        source: "PoK",
    },
    {
        localeName: "technology.name.graviton_laser_system",
        cardNsid: "card.technology.yellow:base/graviton_laser_system",
        type: "Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "Graviton",
    },
    {
        localeName: "technology.name.predictive_intelligence",
        cardNsid: "card.technology.yellow:pok/predictive_intelligence",
        type: "Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "Pred Intel",
        source: "PoK",
    },
    {
        localeName: "technology.name.transit_diodes",
        cardNsid: "card.technology.yellow:base/transit_diodes",
        type: "Yellow",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Transit",
    },
    {
        localeName: "technology.name.integrated_economy",
        cardNsid: "card.technology.yellow:base/integrated_economy",
        type: "Yellow",
        requirements: {
            Yellow: 3,
        },
        abbrev: "Integrated Eco.",
    },

    {
        localeName: "unit.infantry_2",
        cardNsid: "card.technology.unit_upgrade:base/infantry_2",
        type: "unitUpgrade",
        requirements: {
            Green: 2,
        },
        abbrev: "Infantry II",
        unitPosition: 10,
    },
    {
        localeName: "unit.destroyer_2",
        cardNsid: "card.technology.unit_upgrade:base/destroyer_2",
        type: "unitUpgrade",
        requirements: {
            Red: 2,
        },
        abbrev: "Destroyer II",
        unitPosition: 5,
    },
    {
        localeName: "unit.carrier_2",
        cardNsid: "card.technology.unit_upgrade:base/carrier_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 2,
        },
        abbrev: "Carrier II",
        unitPosition: 8,
    },
    {
        localeName: "unit.space_dock_2",
        cardNsid: "card.technology.unit_upgrade:base/space_dock_2",
        type: "unitUpgrade",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Space Dock II",
        unitPosition: 11,
    },
    {
        localeName: "unit.fighter_2",
        cardNsid: "card.technology.unit_upgrade:base/fighter_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 1,
            Green: 1,
        },
        abbrev: "Fighter II",
        unitPosition: 9,
    },
    {
        localeName: "unit.pds_2",
        cardNsid: "card.technology.unit_upgrade:base/pds_2",
        type: "unitUpgrade",
        requirements: {
            Red: 1,
            Yellow: 1,
        },
        abbrev: "PDS II",
        unitPosition: 6,
    },
    {
        localeName: "unit.cruiser_2",
        cardNsid: "card.technology.unit_upgrade:base/cruiser_2",
        type: "unitUpgrade",
        requirements: {
            Red: 1,
            Yellow: 1,
            Green: 1,
        },
        abbrev: "Cruiser II",
        unitPosition: 1,
    },
    {
        localeName: "unit.dreadnought_2",
        cardNsid: "card.technology.unit_upgrade:base/dreadnought_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 2,
            Yellow: 1,
        },
        abbrev: "Dread II",
        unitPosition: 4,
    },
    {
        localeName: "unit.war_sun",
        cardNsid: "card.technology.unit_upgrade:base/war_sun",
        type: "unitUpgrade",
        requirements: {
            Red: 3,
            Yellow: 1,
        },
        abbrev: "War Sun",
        unitPosition: 0,
    },

    {
        localeName: "unit.infantry.letani_warrior_2",
        cardNsid: "card.technology.unit_upgrade.arborec:base/letani_warrior_2",
        type: "unitUpgrade",
        requirements: {
            Green: 1,
        },
        abbrev: "Letani II",
        faction: "arborec",
        unitPosition: 10,
    },
    {
        localeName: "technology.name.bioplasmosis",
        cardNsid: "card.technology.green.arborec:base/bioplasmosis",
        type: "Green",
        requirements: {
            Green: 2,
        },
        abbrev: "Bioplas",
        faction: "arborec",
    },
    {
        localeName: "technology.name.l4_disruptors",
        cardNsid: "card.technology.yellow.letnev:base/l4_disruptors",
        type: "Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "L4 Disrupt",
        faction: "letnev",
    },
    {
        localeName: "technology.name.non_euclidean_shielding",
        cardNsid: "card.technology.red.letnev:base/noneuclidean_shielding",
        type: "Red",
        requirements: {
            Red: 2,
        },
        abbrev: "N.E.S.",
        faction: "letnev",
    },
    {
        localeName: "technology.name.chaos_mapping",
        cardNsid: "card.technology.blue.saar:base/chaos_mapping",
        type: "Blue",
        requirements: {
            Blue: 1,
        },
        abbrev: "Chaos Map",
        faction: "saar",
    },
    {
        localeName: "unit.space_dock.floating_factory_2",
        cardNsid: "card.technology.unit_upgrade.saar:base/floating_factory_2",
        type: "unitUpgrade",
        requirements: {
            Yellow: 2,
        },
        abbrev: " FF II",
        faction: "saar",
        unitPosition: 11,
    },
    {
        localeName: "unit.war_sun.prototype_war_sun_2",
        cardNsid: "card.technology.unit_upgrade.muaat:base/prototype_war_sun_2",
        type: "unitUpgrade",
        requirements: {
            Red: 3,
            Yellow: 1,
        },
        abbrev: " PWS II",
        faction: "muaat",
        unitPosition: 0,
    },
    {
        localeName: "technology.name.magmus_reactor",
        cardNsid: "card.technology.red.muaat:base/magmus_reactor",
        type: "Red",
        requirements: {
            Red: 2,
        },
        abbrev: "Magmus",
        faction: "muaat",
    },
    {
        localeName: "technology.name.quantum_datahub_node",
        cardNsid: "card.technology.yellow.hacan:base/quantum_datahub_node",
        type: "Yellow",
        requirements: {
            Yellow: 3,
        },
        abbrev: "QDHN",
        faction: "hacan",
    },
    {
        localeName: "technology.name.production_biomes",
        cardNsid: "card.technology.green.hacan:base/production_biomes",
        type: "Green",
        requirements: {
            Green: 2,
        },
        abbrev: "Prod. Biomes",
        faction: "hacan",
    },
    {
        localeName: "unit.infantry.spec_ops_2",
        cardNsid: "card.technology.unit_upgrade.sol:base/spec_ops_2",
        type: "unitUpgrade",
        requirements: {
            Green: 2,
        },
        abbrev: "Spec Ops II",
        faction: "sol",
        unitPosition: 10,
    },
    {
        localeName: "unit.carrier.advanced_carrier_2",
        cardNsid: "card.technology.unit_upgrade.sol:base/advanced_carrier_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 2,
        },
        abbrev: "Adv Carrier II",
        faction: "sol",
        unitPosition: 8,
    },
    {
        localeName: "technology.name.wormhole_generator",
        cardNsid: "card.technology.blue.creuss:base/wormhole_generator",
        type: "Blue",
        requirements: {
            Blue: 2,
        },
        abbrev: "Wormhole Gen",
        faction: "creuss",
    },
    {
        localeName: "technology.name.dimensional_splicer",
        cardNsid: "card.technology.red.creuss:base/dimensional_splicer",
        type: "Red",
        requirements: {
            Red: 1,
        },
        abbrev: "D. Splicer",
        faction: "creuss",
    },
    {
        localeName: "unit.dreadnought.super_dreadnought_2",
        cardNsid: "card.technology.unit_upgrade.l1z1x:base/superdreadnought_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 2,
            Yellow: 1,
        },
        abbrev: "SuperDread II",
        faction: "l1z1x",
        unitPosition: 4,
    },
    {
        localeName: "technology.name.inheritance_systems",
        cardNsid: "card.technology.yellow.l1z1x:base/inheritance_systems",
        type: "Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "Inherit. Systems",
        faction: "l1z1x",
    },
    {
        localeName: "technology.name.mirror_computing",
        cardNsid: "card.technology.yellow.mentak:base/mirror_computing",
        type: "Yellow",
        requirements: {
            Yellow: 3,
        },
        abbrev: "Mirror Comp",
        faction: "mentak",
    },
    {
        localeName: "technology.name.salvage_operations",
        cardNsid: "card.technology.yellow.mentak:base/salvage_operations",
        type: "Yellow",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Salvage Ops.",
        faction: "mentak",
    },
    {
        localeName: "unit.fighter.hybrid_crystal_fighter_2",
        cardNsid:
            "card.technology.unit_upgrade.naalu:base/hybrid_crystal_fighter_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 1,
            Green: 1,
        },
        abbrev: " HCF II",
        faction: "naalu",
        unitPosition: 9,
    },
    {
        localeName: "technology.name.neuroglaive",
        cardNsid: "card.technology.green.naalu:base/neuroglaive",
        type: "Green",
        requirements: {
            Green: 3,
        },
        abbrev: "Neuroglaive",
        faction: "naalu",
    },
    {
        localeName: "technology.name.valefar_assimilator_x",
        cardNsid: "card.technology.unknown.nekro:base/valefar_assimilator_x",
        type: "",
        requirements: {},
        abbrev: "",
        faction: "nekro",
    },
    {
        localeName: "technology.name.valefar_assimilator_y",
        cardNsid: "card.technology.unknown.nekro:base/valefar_assimilator_y",
        type: "",
        requirements: {},
        abbrev: "",
        faction: "nekro",
    },
    {
        localeName: "unit.dreadnought.exotrireme_2",
        cardNsid: "card.technology.unit_upgrade.norr:base/exotrireme_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 2,
            Yellow: 1,
        },
        abbrev: "Exotrireme II",
        faction: "norr",
        unitPosition: 4,
    },
    {
        localeName: "technology.name.valkyrie_particle_weave",
        cardNsid: "card.technology.red.norr:base/valkyrie_particle_weave",
        type: "Red",
        requirements: {
            Red: 2,
        },
        abbrev: "Valkyrie PW",
        faction: "norr",
    },
    {
        localeName: "technology.name.spacial_conduit_cylinder",
        cardNsid: "card.technology.blue.jolnar:base/spacial_conduit_cylinder",
        type: "Blue",
        requirements: {
            Blue: 2,
        },
        abbrev: "Spacial Conduit",
        faction: "jolnar",
    },
    {
        localeName: "technology.name.e_res_siphons",
        cardNsid: "card.technology.yellow.jolnar:base/eres_siphons",
        type: "Yellow",
        requirements: {
            Yellow: 2,
        },
        abbrev: "E-Res",
        faction: "jolnar",
    },
    {
        localeName: "technology.name.lazax_gate_folding",
        cardNsid: "card.technology.blue.winnu:base/lazax_gate_folding",
        type: "Blue",
        requirements: {
            Blue: 2,
        },
        abbrev: "Lazax Gate",
        faction: "winnu",
    },
    {
        localeName: "technology.name.hegemonic_trade_policy",
        cardNsid: "card.technology.yellow.winnu:base/hegemonic_trade_policy",
        type: "Yellow",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Hegemonic",
        faction: "winnu",
    },
    {
        localeName: "technology.name.instinct_training",
        cardNsid: "card.technology.green.xxcha:base/instinct_training",
        type: "Green",
        requirements: {
            Green: 1,
        },
        abbrev: "Instinct Train",
        faction: "xxcha",
    },
    {
        localeName: "technology.name.nullification_field",
        cardNsid: "card.technology.yellow.xxcha:base/nullification_field",
        type: "Yellow",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Null. Field",
        faction: "xxcha",
    },
    {
        localeName: "technology.name.yin_spinner",
        cardNsid: "card.technology.green.yin:base/yin_spinner",
        type: "Green",
        requirements: {
            Green: 2,
        },
        abbrev: "Yin Spin",
        faction: "yin",
    },
    {
        localeName: "technology.name.impulse_core",
        cardNsid: "card.technology.yellow.yin:base/impulse_core",
        type: "Yellow",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Impulse",
        faction: "yin",
    },
    {
        localeName: "technology.name.mageon_implants",
        cardNsid: "card.technology.green.yssaril:base/mageon_implants",
        type: "Green",
        requirements: {
            Green: 3,
        },
        abbrev: "Mageon",
        faction: "yssaril",
    },
    {
        localeName: "technology.name.transparasteel_plating",
        cardNsid: "card.technology.green.yssaril:base/transparasteel_plating",
        type: "Green",
        requirements: {
            Green: 1,
        },
        abbrev: "Transparasteel",
        faction: "yssaril",
    },

    {
        localeName: "technology.name.temporal_command_suite",
        cardNsid: "card.technology.yellow.nomad:pok/temporal_command_suite",
        type: "Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "Temp Cmd Suite",
        faction: "nomad",
        source: "PoK",
    },
    {
        localeName: "unit.flagship.memoria_ii",
        cardNsid: "card.technology.unit_upgrade.nomad:pok/memoria_2",
        type: "unitUpgrade",
        requirements: {
            Blue: 1,
            Yellow: 1,
            Green: 1,
        },
        abbrev: "Memoria II",
        faction: "nomad",
        source: "PoK",
        unitPosition: -4,
    },
    {
        localeName: "technology.name.vortex",
        cardNsid: "card.technology.red.vuilraith:pok/vortex",
        type: "Red",
        requirements: {
            Red: 1,
        },
        abbrev: "Vortex",
        faction: "vuilraith",
        source: "PoK",
    },
    {
        localeName: "unit.space_dock.dimensional_tear_2",
        cardNsid:
            "card.technology.unit_upgrade.vuilraith:pok/dimensional_tear_2",
        type: "unitUpgrade",
        requirements: {
            Yellow: 2,
        },
        abbrev: "Dim Tear II",
        faction: "vuilraith",
        source: "PoK",
        unitPosition: 11,
    },
    {
        localeName: "technology.name.aerie_hololattice",
        cardNsid: "card.technology.yellow.argent:pok/aerie_hololattice",
        type: "Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "Aerie Holo",
        faction: "argent",
        source: "PoK",
    },
    {
        localeName: "unit.destroyer.strike_wing_alpha_2",
        cardNsid: "card.technology.unit_upgrade.argent:pok/strike_wing_alpha_2",
        type: "unitUpgrade",
        requirements: {
            Red: 2,
        },
        abbrev: "Strike Wing II",
        faction: "argent",
        source: "PoK",
        unitPosition: 5,
    },
    {
        localeName: "unit.cruiser.saturn_engine_2",
        cardNsid: "card.technology.unit_upgrade.ul:pok/saturn_engine_2",
        type: "unitUpgrade",
        requirements: {
            Red: 1,
            Yellow: 1,
            Green: 1,
        },
        abbrev: "Sat Eng II",
        faction: "ul",
        source: "PoK",
        unitPosition: 1,
    },
    {
        localeName: "unit.pds.hel_titan_2",
        cardNsid: "card.technology.unit_upgrade.ul:pok/heltitan_2",
        type: "unitUpgrade",
        requirements: {
            Red: 1,
            Yellow: 1,
        },
        abbrev: "Hel-Titan II",
        faction: "ul",
        source: "PoK",
        unitPosition: 6,
    },
    {
        localeName: "technology.name.aetherstream",
        cardNsid: "card.technology.blue.empyrean:pok/aetherstream",
        type: "Blue",
        requirements: {
            Blue: 2,
        },
        abbrev: "Aetherstream",
        faction: "empyrean",
        source: "PoK",
    },
    {
        localeName: "technology.name.voidwatch",
        cardNsid: "card.technology.green.empyrean:pok/voidwatch",
        type: "Green",
        requirements: {
            Green: 1,
        },
        abbrev: "Voidwatch",
        faction: "empyrean",
        source: "PoK",
    },
    {
        localeName: "unit.infantry.crimson_legionnaire_2",
        cardNsid:
            "card.technology.unit_upgrade.mahact:pok/crimson_legionnaire_2",

        type: "unitUpgrade",
        requirements: {
            Green: 2,
        },
        abbrev: "Crimson Legin II",
        faction: "mahact",
        source: "PoK",
        unitPosition: 10,
    },
    {
        localeName: "technology.name.genetic_recombination",
        cardNsid: "card.technology.green.mahact:pok/genetic_recombination",
        type: "Green",
        requirements: {
            Green: 1,
        },
        abbrev: "Gene Recomb",
        faction: "mahact",
        source: "PoK",
    },
    {
        localeName: "technology.name.supercharge",
        cardNsid: "card.technology.red.naazrokha:pok/supercharge",
        type: "Red",
        requirements: {
            Red: 1,
        },
        abbrev: "Supercharge",
        faction: "naazrokha",
        source: "PoK",
    },
    {
        localeName: "technology.name.pre_fab_arcologies",
        cardNsid: "card.technology.green.naazrokha:pok/prefab_arcologies",
        type: "Green",
        requirements: {
            Green: 3,
        },
        abbrev: "Pre-Fab Arc",
        faction: "naazrokha",
        source: "PoK",
    },

    {
        localeName: "technology.name.redacted",
        type: "SCENARIO unitUpgrade",
        requirements: {
            Red: 2,
        },
        abbrev: "Scenario Destroyer",
        source: "Codex 1",
        unitPosition: 5,
    },
    {
        localeName: "technology.name.exception_no_id",
        cardNsid: "card.technology.yellow.nekro:codex.ordinian/exception_no_id",
        type: "SCENARIO Yellow",
        requirements: {
            Yellow: 1,
        },
        abbrev: "Scenario Tech",
        source: "Codex 1",
    },
    {
        localeName: "strategy_card.technology.button.nekro",
        type: "unitUpgrade",
        requirements: {},
        abbrev: "Singularity Button",
        faction: "nekro",
        unitPosition: 3,
    },
];
