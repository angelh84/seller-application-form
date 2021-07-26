<template>
  <div class="relative">
    <h1>Seller Application</h1>
    <h2>{{ copy.title }}</h2>
    <Steps :text="stepsText" />
    <p :class="[
      {'font-semibold': currentStep === '2'},
      'mb-5'
    ]">
      {{ copy.description }}
    </p>

    <form>
      <fieldset>
        <div class="mb-5 flex flex-row">
          <p class="w-1/2 pr-3">
            <label for="first-name">First Name</label>
            <t-input id="first-name" value="" name="first-name" />
          </p>
          <p class="w-1/2 pl-3">
            <label for="last-name">Last Name</label>
            <t-input id="last-name" value="" name="last-name" />
          </p>
        </div>
        <div class="mb-5">
          <p>
            <label for="category">Your Shop Category</label>
            <t-select
              id="cateogry"
              v-model="categoryValue"
              :class="{'text-cool-gray-8': categoryValue === ''}"
              placeholder="Select Category"
              :options="[
                'Graphics', 
                'Fonts', 
                'Templates', 
                'Add-ons', 
                'Photos', 
                'Web Themes', 
                '3D'
              ]"
            ></t-select>
          </p>
        </div>
        <div class="mb-5">
          <p>
            <label for="portfolio-link">Portfolio Link</label>
            <t-input id="portfolio-link" value="" name="portfolio-link" />
          </p>
        </div>
      </fieldset>
      <fieldset>

      </fieldset>
    </form>    
  </div>
</template>

<script>
import Steps from '@/components/steps.vue'
export default {
  name: 'Profile',
  components: {
    Steps
  },
  data () {
    return {
      categoryValue: ""
    }
  },
  computed: {
    stepsLength () {
      return this.$router.options.routes.filter(route => {
        return route.name.toLowerCase().includes('step')
      }).length
    },
    currentStep () {
      return this.$route.path.split('-')[1]
    },
    stepsText () {
      return `${this.currentStep} of ${this.stepsLength}`
    },
    copy () {
      switch(this.currentStep) {
        case '1':
          return {
            title: 'Share your work with us',
            description: 'To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you’d be a great seller:'
          }
        case '2':
          return {
            title: 'Tell us a little about yourself',
            description: 'Your answers will help us provide you with a more personalized experience as a seller!'
          }
          default:
            return {
              title: '',
              description: ''
            }
      }
    }
  }
}
</script>
