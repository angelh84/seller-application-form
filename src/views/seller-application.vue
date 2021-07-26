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
        <div class="mb-6 flex flex-row">
          <p class="w-1/2 pr-2 sm:pr-3">
            <label for="first-name">First Name</label>
            <t-input id="first-name" value="" name="first-name" />
          </p>
          <p class="w-1/2 pl-2 sm:pl-3">
            <label for="last-name">Last Name</label>
            <t-input id="last-name" value="" name="last-name" />
          </p>
        </div>
        <div class="mb-6">
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
        <div class="mb-6">
          <p>
            <label for="portfolio-link">Portfolio Link</label>
            <t-input 
              id="portfolio-link" 
              v-model="portfolioUrl" 
              name="portfolio-link" 
            />
          </p>
        </div>
        <div 
          v-if="urlTest"
          class="mb-6"
        >
          <p>
            <label class="flex items-start sm:items-center -mt-3.5">
              <t-checkbox name="options" value="authored-check" />
              <span class="ml-2 font-normal text-base">Yes, I confirm that the content I submit is authored by me.</span>
            </label>
          </p>
        </div>
        <div class="mb-6">
          <p>
            <label class="block mb-4">Do you already have an online store?</label>
            <label class="flex items-center mb-2">
              <t-radio name="options" value="yes" />
              <span class="ml-2 font-normal text-base">Yes</span>
            </label>
            <label class="flex items-center">
              <t-radio name="options" value="no" />
              <span class="ml-2 font-normal text-base">No</span>  
            </label>
          </p>
        </div>
        <div class="mb-6">
          <p>
            <label for="store-urls">Online stores I sell on today</label>
            <t-textarea 
              id="store-urls" 
              placeholder="Enter urls" 
              name="store-urls" 
              class="h-20" 
            />
          </p>
        </div>
        <div class="flow-root">
          <t-button 
            type="button"
            class="font-semibold bg-mock-green w-full sm:w-40 sm:float-right"
          >
            Next
          </t-button>
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
  name: 'SellerApplication',
  components: {
    Steps
  },
  data () {
    return {
      categoryValue: '',
      portfolioUrl: ''
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
    },
    urlTest() {
      const validUrl = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
      return validUrl.test(this.portfolioUrl)
    }
  }
}
</script>
