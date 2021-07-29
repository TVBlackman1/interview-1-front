<template>
  <div class="product" :style="cssVars">
    <input type="text" v-model="editableData.name">
    <div class="properties">
      Price: <input type="text" v-model="editableData.price">
      In stock: <input type="text" v-model="editableData.count">
      <button @click="save">save</button>
      <button @click="del">del</button>
    </div>
  </div>
</template>

<script>
import serverHandlerProduct from "@/mixins/server-handlers/serverHandlerProduct";

export default {
  name: "ProductEditable",
  props: ['_id', 'name', 'price', 'count'],
  data() {
    return {
      editableData: {
        name: this.name,
        price: this.price,
        count: this.count
      },
      bgColor: "white"
    }
  },
  created() {
    let val = this.editableData.count
    if(val <= 0) {
      this.bgColor = "#c92d51"
    } else {
      this.bgColor = "white"
    }
  },
  methods: {
    save() {
      const name = this.editableData.name
      const price = this.editableData.price
      const count = this.editableData.count
      this._srvSave(this._id, {name, price, count})
    },
    del() {
      this._srvDelete(this._id)
    }
  },
  computed: {
    cssVars() {
      return {
        '--bg-color': this.bgColor,
        '--height': this.height + 'px'
      }
    }
  },
  watch: {
    name: function (val) {
      this.editableData.name = val
    },
    price: function (val) {
      this.editableData.price = val
    },
    count: function (val) {
      this.editableData.count = val
      if(val <= 0) {
        this.bgColor = "#c92d51"
      } else {
        this.bgColor = "white"
      }
    }
  },
  mixins: [serverHandlerProduct]
}
</script>

<style scoped lang="scss">
@import "~@/css/fonts.css";

.product {
  width: 100%;
  border: 2px solid steelblue;
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
  background-color: var(--bg-color);

  &:hover {
    cursor: pointer;
    background-color: #75e3b1;
    border-color: #21895a;
  }
}
</style>