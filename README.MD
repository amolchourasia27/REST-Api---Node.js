# REST API

This is a bare-bones example of a Node.js REST API.

The entire application is contained within the `app.js` file.


## Install

    npm install

## Run the app

    npm run

## Instal postman

    postman url

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /products/`

    'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Thing

### Request

`POST /product/`
```Curl{
curl --location --request POST 'localhost:3000/products' \
--form 'price="200"' \
--form 'name="Pizza without morgan expensive"' \
--form 'productImage=@"/C:/Users/username/Desktop/assets/pizza.png"'
}
```
### Response

    {
    "message": "Created products successfully",
    "createdProduct": {
        "name": "Pizza without morgan expensive",
        "price": 200,
        "_id": "62ea58130e2d89e139286b80"
    }
    }

## Get a specific Thing

### Request

`GET /product/id`

    curl --location --request GET 'localhost:3000/products/62ea58130e2d89e139286b80

### Response

    {
    "product": {
        "_id": "62ea58130e2d89e139286b80",
        "name": "Pizza without morgan expensive",
        "price": 200,
        "productImage": "uploads\\1659525139435pizza.png"
    },
    "request": {
        "type": "GET",
        "description": "Get all products"
    }
    }

## Get a non-existent Product

### Request

`GET /product/id`

    curl -i -H 'Accept: application/json' http://localhost:3000/produts

### Response

    "error": {
        "stringValue": "\"62ea58130e2d89e139286b8\"",
        "valueType": "string",
        "kind": "ObjectId",
        "value": "62ea58130e2d89e139286b8",
        "path": "_id",
        "reason": {},
        "name": "CastError",
        "message": "Cast to ObjectId failed for value \"62ea58130e2d89e139286b8\" (type string) at path \"_id\" for model \"Product\""
    }

## Create another new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Bar&junk=rubbish' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {"id":2,"name":"Bar","status":null}
