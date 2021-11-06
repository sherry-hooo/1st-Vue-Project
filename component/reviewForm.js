app.component('review-form', {
  template:
    /*html*/
    `
    <ul>
    <li v-for='review in reviews'>{{review.name}} rates stars{{review.rating}}
    <p>" {{review.comment}} "</p>
    </li>
   </ul>
    <form class='reviewForm'  @submit.prevent='formSubmit'>
  <label for="name">Name:
    <input v-model='name' id='name' type="text" placeholder="Hooo">
  </label>
  <label for="rating">Rating:</label>
    <select v-model='rating' name="rating" id="rating">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

  <label for="review">Review:</label>
  <textarea v-model='comment' name="" id="review" cols="15" rows="10" placeholder="leave your comment here..."></textarea>

  <input value='Submit' type="submit">
</form>`,
  data() {
    return {
      name: '',
      rating: '',
      comment: '',
      reviews: [
        { name: 'Hooo', rating: 5, comment: 'The best mararoon in the world' },
      ],
    }
  },
  methods: {
    check() {
      console.log(this.name)
      this.reviews.push(12)
      console.log(this.reviews)
    },
    formSubmit() {
      let review = {
        name: this.name,
        rating: this.rating,
        comment: this.comment,
      }
      this.reviews.push(review)
      console.log('ji')
      this.name = ''
      this.rating = ''
      this.comment = ''
    },
  },
})
