import serverHandler from "@/mixins/server-handlers/serverHandler";

export default {
    data() {
        return {}
    },
    methods: {
        async _srvSave(id, {name, price, count}) {
            return await this._srvJsonRequest('products/save', {
                id, properties: {name, price, count}
            })
        },
        async _srvDelete(id) {
            return await this._srvJsonRequest('products/delete', {
                id
            })
        },
        async _srvCreate(name, price, count) {
            return await this._srvJsonRequest('products/create', {
                name, price, count
            })
        },
        async _srvSetImage(file) {
            return await this._srvFileRequest('products/upload', file)
        },

        // async _srvGetListWithFilters({inStock, maxPrice}) {
        //     return await this._srvJsonRequest('products/filters', {
        //         inStock, maxPrice
        //     })
        // },

    },
    mixins: [serverHandler]
}