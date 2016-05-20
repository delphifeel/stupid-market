import $ from "jquery"

class ItemTypesService {
    static load() {
        return $.when([
            {
                id: 1,
                name: "Fruits"
            },
            {
                id: 2,
                name: "Vegetables"
            }
        ]);
    }
}

export default ItemTypesService;