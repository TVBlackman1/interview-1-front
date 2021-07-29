
import serverHandler from "@/mixins/server-handlers/serverHandler";

export default {
    data() {
        return {
        }
    },
    methods: {
        async _srvGetList(pageNumber = 1) {
            return await this._srvJsonRequest('products/list', {
                pageNumber
            })
        },
        async _srvGetListWithFilters({inStock, maxPrice, startsWith, pageNumber}) {
            return await this._srvJsonRequest('products/filters', {
                inStock, maxPrice, startsWith, pageNumber
            })
        },

    },
    mixins: [serverHandler]
}