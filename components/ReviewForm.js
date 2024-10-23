const reviewForm = {
    template:
        /*html*/
       `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="form.name">

      <label for="review">Review:</label>    
      <textarea id="review" v-model="form.review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="form.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>`,
    setup(props,{emit}) {
        const form = reactive({
            name: '',
            review: '',
            rating: null
        })
        function onSubmit(){
            const productReview = {
                name: form.name,
                review: form.review,
                rating: form.rating
            }
            emit('review-submitted', productReview)
            form.name = ''
            form.review = ''
            form.rating = null
        }
        return {
            form
        }
    }

}