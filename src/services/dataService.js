let catalog = [

    {
        "title":"Floffy",
        "category":"clothes",
        "price":189.99,
        "image":"floffy.jpeg",
        "_id":"1",
    },
    {
        "title":"Nude",
        "category":"clothes",
        "price":25.99,
        "image":"nude.jpeg",
        "_id":"2",
    },
    {
        "title":"Relax",
        "category":"clothes",
        "price":259.99,
        "image":"relax.jpeg",
        "_id":"3",
    },
    {
        "title":"Robust",
        "category":"clothes",
        "price":569.99,
        "image":"robust.jpeg",
        "_id":"4",
    },
    {
        "title":"Rustic",
        "category":"clothes",
        "price":340.99,
        "image":"rustic.jpeg",
        "_id":"5",
    },
    {
        "title":"Speaker",
        "category":"clothes",
        "price":1899.99,
        "image":"speaker.jpeg",
        "_id":"6",
    }
];


class DataService{

    getProducts(){
        return catalog;
    }

}

export default DataService;