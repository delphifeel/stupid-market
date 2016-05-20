import $ from "jquery"

class ItemsService {
    static loadItems() {
        return $.when([
            {
                id: 1,
                name: "Apples",
                price: 10.99,
                itemType: 1
            },
            {
                id: 2,
                name: "Bananas",
                price: 20.99,
                itemType: 1
            },
            {
                id: 3,
                name: "Carrot",
                price: 1.99,
                itemType: 2
            }
        ]);
    }
}

export default ItemsService;