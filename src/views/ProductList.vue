<template>
  <div class="product-list">
    <input type="text" class="search" v-model="startsWith" @keydown.enter="productsUpdate">
    <div class="filters">
      <div class="filter">
        Не дороже, чем <input type="text" class="text" v-model="maxPrice" @keydown.enter="productsUpdate">
      </div>
      <div class="filter">
        На складе <input type="checkbox" v-model="inStock">
      </div></div>
    <ul class="products">
      <template v-for="(product, ind) in products" :key="ind">
        <product
                 :name="product.name"
                 :price="product.price"
                 :count="product.count"
        />
      </template>
      <div class="num-page">{{currentPage}}</div>
      <button @click="previewPage">preview</button>
      <button @click="nextPage">next</button>
    </ul>
  </div>
</template>

<script>
import Product from "@/components/Product";
import serverHandlerProductList from "@/mixins/server-handlers/serverHandlerProductList";

export default {
  name: "ProductList",
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
      return await this._srvGetListWithFilters({inStock, maxPrice, startsWith, pageNumber})
    },
    async productsUpdate() {
      this.products = await this.uploadProductByFilters()
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
    inStock: async function() {
      await this.productsUpdate()
    }
  },
  components: {Product},
  mixins: [serverHandlerProductList]
}
</script>

<style scoped lang="scss">
@import "~@/css/fonts.css";

.product-list {
  margin: auto;
  width: 600px;

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