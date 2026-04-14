/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_57147065")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_57147065",
    "hidden": false,
    "id": "relation2113787634",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "vendor_",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3236636067",
    "max": 0,
    "min": 0,
    "name": "name_",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
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

  // add field
  collection.fields.addAt(4, new Field({
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
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number1680864486",
    "max": null,
    "min": null,
    "name": "stock_",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3316850135",
    "max": 0,
    "min": 0,
    "name": "category_",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file3536310921",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool1772871495",
    "name": "is_available_",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_57147065")

  // remove field
  collection.fields.removeById("relation2113787634")

  // remove field
  collection.fields.removeById("text3236636067")

  // remove field
  collection.fields.removeById("text4223058517")

  // remove field
  collection.fields.removeById("number3591569850")

  // remove field
  collection.fields.removeById("number1680864486")

  // remove field
  collection.fields.removeById("text3316850135")

  // remove field
  collection.fields.removeById("file3536310921")

  // remove field
  collection.fields.removeById("bool1772871495")

  return app.save(collection)
})
