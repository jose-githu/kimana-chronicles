/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3337635776")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number3591569850",
    "max": null,
    "min": null,
    "name": "price_",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4223058517",
    "max": 0,
    "min": 0,
    "name": "description_",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3337635776")

  // remove field
  collection.fields.removeById("number3591569850")

  // remove field
  collection.fields.removeById("text4223058517")

  return app.save(collection)
})
