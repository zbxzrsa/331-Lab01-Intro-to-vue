const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const inventory  = ref(100)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const cart = ref([])
        const premium = ref(true)

        function updateCart(id) {
            cart.value.push(id)
        }
        function addToCart() {
            cart.value += 1
        }
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })     
        function updateImage(variantImage){
            image.value = variantImage
        }
        function updateVariant(index){
            selectedVariant.value = index;
        }
    
        return {
            cart,
            premium,
            updateCart,
        }
    }
})

app.component('product-display', productDisplay)
app.component('review-list',reviewList)
app.mount('#app')