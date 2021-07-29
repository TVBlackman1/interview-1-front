<template>
  <div class="product">
    <input type="text" v-model="editableData.name">
    <div class="properties">
      Price: <input type="text" v-model="editableData.price">
      In stock: <input type="text" v-model="editableData.count">
      <button @click="create">create</button>
    </div>
  </div>
</template>

<script>
import serverHandlerProduct from "@/mixins/server-handlers/serverHandlerProduct";

export default {
  name: "ProductNew",
  data() {
    return {
      editableData: {
        name: this.name,
        price: this.price,
        count: this.count
      }
    }
  },
  methods: {
    create() {
      const name = this.editableData.name
      const price = this.editableData.price
      const count = this.editableData.count
      this._srvCreate(name, price, count)
    }
  },
  mixins: [serverHandlerProduct]
}
</script>

<style scoped lang="scss">
@import "~@/css/fonts.css";

.product {
  width: 100%;
  border: 2px solid red;
  border-radius: 6px;
  padding: 0.5em 0.8em;
  font-size: 18px;
  font-family: Montserrat-medium, serif;
  text-align: left;
  transition: 0.15s;

  margin-bottom: 0.4em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    background-color: #e3e175;
    border-color: #979007;
  }
}
</style>