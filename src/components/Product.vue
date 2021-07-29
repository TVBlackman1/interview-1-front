<template>
  <div class="product">
    <div class="name">{{name}}</div>
    <div class="properties">
      Price: {{price}}
      In stock: {{count}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['name', 'price', 'count']
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

  &:hover {
    cursor: pointer;
    background-color: #75e3b1;
    border-color: #21895a;
  }
}
</style>