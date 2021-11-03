Vue.createApp({
  data() {
    return {
      name: 'Edward',
      age: 32,
      image: 'https://lorempixel.com/400/200/'
    }
  },
  methods: {
    generateRandomNumber() {
      return Math.random()
    },
    calculateAge() {
      return this.age + 5
    }
  }
}).mount('#assignment')
