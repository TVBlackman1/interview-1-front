<template>
  <div class="admin-panel">
    <div class="product-list">
      <input type="text" class="search" v-model="startsWith" @keydown.enter="productsUpdate">
      <div class="filters">
        <div class="filter">
          Не дороже, чем <input type="text" class="text" v-model="maxPrice" @keydown.enter="productsUpdate">
        </div>
        <div class="filter">
          На складе <input type="checkbox" v-model="inStock">
        </div>
      </div>
      <ul class="products">
          <product-editable
              v-for="(product, ind) in products" :key="ind"
              :_id="product._id"
              :name="product.name"
              :price="product.price"
              :count="product.count"
          />
        <div class="num-page">{{currentPage}}</div>
        <button @click="previewPage">preview</button>
        <button @click="nextPage">next</button>
        <product-new />
      </ul>
    </div>
  </div>
</template>

<script>
import ProductEditable from "@/components/ProductEditable";
import serverHandlerProductList from "@/mixins/server-handlers/serverHandlerProductList";
import ProductNew from "@/components/ProductNew";

export default {
  name: "AdminPanel",
  data() {
    return {
      products: [],
      inStock: false,
      maxPrice: 1000,
      startsWith: "",
      currentPage: 1,
    }
  },
  async created() {
    // this.products = await this.uploadProducts(1)
    await this.productsUpdate()
  },
  methods: {
    async uploadProducts(pageNumber) {
      return await this._srvGetList(pageNumber)
    },
    async uploadProductByFilters() {
      let inStock = this.inStock
      let maxPrice = +this.maxPrice
      let startsWith = this.startsWith
      let pageNumber = this.currentPage
      console.log(startsWith)
      return await this._srvGetListWithFilters({inStock, maxPrice, startsWith, pageNumber})
    },
    async productsUpdate() {
      this.products = await this.uploadProductByFilters()
      console.log(this.products)
    },
    async previewPage() {
      this.currentPage--
      await this.productsUpdate()
    },
    async nextPage() {
      this.currentPage++
      await this.productsUpdate()
    }
  },
  watch: {
    inStock: async function () {
      await this.productsUpdate()
    }
  },
  mixins: [serverHandlerProductList],
  components: {ProductNew, ProductEditable}
}
</script>

<style scoped lang="scss">
.admin-panel {
  margin: auto;
  width: 900px;

  font-family: Montserrat-regular, serif;
  font-size: 16px;

  & .filters {
    padding: 1.2em 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & ul {
    padding: 0;

  }
}
</style>