app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<section class='product'>
  <figure>
    <img v-bind:src='image' alt="macaroon">
  </figure>
  <div class='product_content'>
    <h2>{{title}}</h2>
    <p v-if='inStock>10'>in stock</p>
    <p v-else-if='inStock>0'>sold out soon!</p>
    <p v-else>out of stock</p>
    <p>Discount: {{discountPercent}}</p>
    <ul class='packList'>
      <li class='package' v-for='(product,index) in products' @mouseover='changeInfo(product,index)'>
        {{product.des}}</li>
    </ul>
    <div class='product_cart'>
      <button @click='addCart' :disabled='!inStock' class='button' type="button">Add</button>
      <button @click='removeCart' class='button' type="button">Remove</button>
      <div class='cart'><i class="fas fa-shopping-cart"></i><span>{{cart}}</span></div>
    </div>
  </div>
</section>`,
  data() {
    return {
      title: 'Macaroon',
      packageIndex: 0,
      cart: 0,
      products: [
        { des: 'single pack', image: './image/macaroon-3.jpg', quantity: 20 },
        { des: '3 pack', image: './image/macaroon-1.jpg', quantity: 0 },
        { des: '5 pack', image: './image/macaroon-2.jpg', quantity: 30 },
      ],
    }
  },
  methods: {
    addCart() {
      return this.cart++
    },
    removeCart() {
      return this.cart <= 0 ? 0 : this.cart--
    },
    changeInfo(target, targetIndex) {
      return (this.packageIndex = targetIndex)
    },
  },
  computed: {
    image() {
      return this.products[this.packageIndex].image
    },
    inStock() {
      return this.products[this.packageIndex].quantity
    },
    discountPercent() {
      if (this.premium) {
        return '20% off'
      } else {
        return '10% off'
      }
    },
  },
})
