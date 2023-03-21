// This is a generated file. Do not edit it directly.
// Make your changes to presets/rushdown.json then rebuild
// this file with `npm run build-presets -- rushdown`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"rushdown","name":"Rushdown","description":"Use safe logic, but with lower average complexity.","author":"3snow_p7im, setz, and soba","weight":-900},"stats":false,"lockLocation":[{"location":"Soul of Bat","comment":"Requires Mist + at least Leap Stone","locks":["Form of Mist + Leap Stone","Form of Mist + Gravity Boots","Form of Mist + Soul of Bat","Form of Mist + Power of Mist"],"blockRelic":["Heart of Vlad","Tooth of Vlad","Rib of Vlad","Ring of Vlad","Eye of Vlad"]},{"location":"Fire of Bat","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Echo of Bat","comment":"Requires flight + a transformation","locks":["Soul of Bat","Gravity Boots + Leap Stone + Form of Mist","Gravity Boots + Leap Stone + Soul of Wolf","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Force of Echo","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Power of Wolf","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Skill of Wolf","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Form of Mist","comment":"Requires at least Leap Stone","locks":["Leap Stone","Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Power of Mist","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Gas Cloud","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gravity Boots","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Leap Stone","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Leap Stone","Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Holy Symbol","locks":["Jewel of Open + Merman Statue"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Merman Statue","comment":"Requires Jewel of Open","locks":["Jewel of Open"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Bat Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Ghost Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Faerie Card","comment":"Requires at least Gravity Boots","locks":["Gravity Boots","Soul of Bat","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Demon Card","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Sword Card","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Heart of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Tooth of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Rib of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone + Form of Mist","Holy glasses + Gravity Boots + Leap Stone + Soul of Wolf","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Eye of Vlad","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Spike Breaker","locks":["Jewel of Open + Soul of Bat + Echo of Bat"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Gold ring","comment":"Requires Jewel of Open + flight","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Silver ring","locks":["Jewel of Open + Spike Breaker + Form of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Holy glasses","locks":["Silver ring + Gold ring"],"comment":"Access must also give flight","escapeRequires":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Crystal cloak","locks":["Jewel of Open"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Mormegil","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Leap Stone","Jewel of Open + Soul of Bat","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"],"blockRelic":["Tooth of Vlad","Rib of Vlad","Eye of Vlad","Ring of Vlad","Heart of Vlad"]},{"location":"Dark Blade","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Ring of Arcana","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Trio","comment":"In second castle","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Holy mail","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Jewel sword","comment":"Requires Wolf + Bat","locks":["Soul of Wolf + Soul of Bat"]},{"location":"Mystic pendant","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ankh of Life","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Morningstar","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Goggles","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Silver plate","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Cutlass","comment":"Requires Jewel of Open or at least Leap Stone","locks":["Jewel of Open","Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Platinum mail","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Falchion","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Gold plate","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bekatowa","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Holy rod","comment":"Requires at least Leap Stone","locks":["Leap Stone","Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Library Onyx","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Alucart sword","comment":"Requires at least Cube of Zoe + at least Leap Stone","locks":["Cube of Zoe + Soul of Bat","Cube of Zoe + Leap Stone","Cube of Zoe + Gravity Boots","Cube of Zoe + Form of Mist + Power of Mist"]},{"location":"Broadsword","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Estoc","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Olrox Garnet","comment":"Requires flight","locks":["Soul of Bat","Gravity Boots + Leap Stone","Form of Mist + Power of Mist"]},{"location":"Blood cloak","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Shield rod","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Knight shield","comment":"Requires at least Leap Stone","locks":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Holy sword","comment":"Requires at least Gravity Boots","locks":["Soul of Bat","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bandanna","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Secret boots","comment":"Requires Jewel of Open + flight","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Gravity Boots + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Nunchaku","comment":"Requires Jewel of Open + Holy Symbol","locks":["Jewel of Open + Holy Symbol"]},{"location":"Knuckle duster","comment":"Requires Jewel of Open","locks":["Jewel of Open"]},{"location":"Caverns Onyx","comment":"Requires Jewel of Open + at least Leap Stone","locks":["Jewel of Open + Merman Statue","Jewel of Open + Soul of Bat","Jewel of Open + Holy Symbol + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"]},{"location":"Combat knife","comment":"Requires Jewel of Open + at least Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"comments":"Access must also give at least Leap Stone","escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Ring of Ares","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Demon Card + Soul of Bat","Jewel of Open + Demon Card + Leap Stone","Jewel of Open + Demon Card + Form of Mist + Power of Mist","Jewel of Open + Demon Card + Soul of Wolf + Power of Wolf","Jewel of Open + Nosedevil Card + Soul of Bat","Jewel of Open + Nosedevil Card + Leap Stone","Jewel of Open + Nosedevil Card + Form of Mist + Power of Mist","Jewel of Open + Nosedevil Card + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Bloodstone","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Icebrand","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Form of Mist + Power of Mist"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Walk armor","comment":"Access must also give at least Leap Stone","locks":["Jewel of Open + Soul of Bat","Jewel of Open + Leap Stone","Jewel of Open + Form of Mist + Power of Mist","Jewel of Open + Soul of Wolf + Power of Wolf"],"escapeRequires":["Soul of Bat","Leap Stone","Gravity Boots","Form of Mist + Power of Mist"]},{"location":"Beryl circlet","comment":"Requires Holy glasses + Bat + Wolf","locks":["Holy glasses + Soul of Bat + Soul of Wolf"]},{"location":"Talisman","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Goddess shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Twilight cloak","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Talwar","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sword of Dawn","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Bastard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Royal cloak","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Lightning mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Moon rod","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sunstone","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Luminus","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Dragon helm","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Shotel","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Staurolite","comment":"Requires Holy glasses + Mist + flight","locks":["Holy glasses + Form of Mist + Soul of Bat","Holy glasses + Form of Mist + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Badelaire","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Forbidden Library Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Opal","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Reverse Caverns Garnet","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Osafune katana","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard shield","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard sword","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Necklace of J","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Floating Catacombs Diamond","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Sword of Hador","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Alucard mail","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Gram","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]},{"location":"Fury plate","comment":"Requires Holy glasses + flight","locks":["Holy glasses + Soul of Bat","Holy glasses + Gravity Boots + Leap Stone","Holy glasses + Form of Mist + Power of Mist"]}],"complexityGoal":{"min":1,"goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]}})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
