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
      <fieldset v-if="currentStep === '1'">
        <div class="pb-6 relative flex flex-row">
          <p class="w-1/2 pr-2 sm:pr-3">
            <label for="first-name">First Name</label>
            <t-input 
              v-model="applicationData.firstName"
              id="first-name" 
              value="" 
              name="first-name"
              :variant="!applicationData.firstName.length && showValidation ? 'danger' : ''"
            />
            <span
              ref="error1"
              v-if="!applicationData.firstName.length && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
          <p class="w-1/2 pl-2 sm:pl-3">
            <label for="last-name">Last Name</label>
            <t-input 
              v-model="applicationData.lastName"
              id="last-name" 
              value="" 
              name="last-name"
              :variant="!applicationData.lastName.length && showValidation ? 'danger' : ''"
            />
            <span
              ref="error1"
              v-if="!applicationData.lastName.length && showValidation"
              class="absolute bottom-0 left-1/2 pl-2 sm:pl-3 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="pb-6 relative">
          <p>
            <label for="category">Your Shop Category</label>
            <t-select
              id="cateogry"
              v-model="applicationData.categoryValue"
              :variant="!applicationData.categoryValue.length && showValidation ? 'danger' : ''"
              :class="{'text-cool-gray-8': applicationData.categoryValue === ''}"
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
            <span
              ref="error1"
              v-if="!applicationData.categoryValue.length && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="pb-6 relative">
          <p>
            <label for="portfolio-link">Portfolio Link</label>
            <t-input 
              id="portfolio-link" 
              v-model="applicationData.portfolioUrl" 
              name="portfolio-link"
            />
          </p>
        </div>
        <div 
          v-if="urlTest"
          class="pb-6 relative"
        >
          <p>
            <label class="flex items-start sm:items-center -mt-3.5">
              <t-checkbox 
                v-model="applicationData.isAuthor"
                :variant="!applicationData.isAuthor && showValidation ? 'error' : ''"
                name="options"
                :value="true"
              />
              <span class="ml-2 font-normal text-base">Yes, I confirm that the content I submit is authored by me.</span>
            </label>
            <span
              ref="error1"
              v-if="!applicationData.isAuthor && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="pb-6 relative">
          <p>
            <label class="block mb-4">Do you already have an online store?</label>
            <label class="flex items-center mb-2 w-24">
              <t-radio 
                v-model="applicationData.hasOnlineStore"
                :variant="applicationData.hasOnlineStore === null && showValidation ? 'error' : ''"
                name="hasOnlineStore" 
                :value="true"
              />
              <span class="ml-2 font-normal text-base">Yes</span>
            </label>
            <label class="flex items-center w-24">
              <t-radio 
                v-model="applicationData.hasOnlineStore"
                :variant="applicationData.hasOnlineStore === null && showValidation ? 'error' : ''"
                name="hasOnlineStore" 
                :value="false"
              />
              <span class="ml-2 font-normal text-base">No</span>
            </label>
            <span
              ref="error1"
              v-if="applicationData.hasOnlineStore === null && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div 
          v-if="applicationData.hasOnlineStore"
          class="pb-6 relative"
        >
          <p>
            <label for="store-urls">Online stores I sell on today</label>
            <t-textarea 
              v-model="applicationData.storeUrls"
              :variant="!applicationData.storeUrls.length && showValidation ? 'danger' : ''"
              id="store-urls" 
              placeholder="Enter urls" 
              name="store-urls" 
              class="h-20" 
            />
            <span
              ref="error1"
              v-if="!applicationData.storeUrls && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="flow-root mt-3">
          <t-button 
            type="button"
            class="font-semibold bg-mock-green w-full sm:w-40 sm:float-right"
            @click="nextClickHandler"
          >
            Next
          </t-button>
        </div>
      </fieldset>
      <fieldset v-if="currentStep === '2'">
        <div class="pb-6 relative">
          <p>
            <label for="quality">When creating products to sell, which best describes your perspective on quality?</label>
            <t-select
              id="quality"
              v-model="applicationData.describeQuality"
              :variant="!applicationData.describeQuality.length && showValidation ? 'danger' : ''"
              :class="{'text-cool-gray-8': applicationData.describeQuality === ''}"
              placeholder="Select Answer"
              :options="[
                'I don’t care what it takes, my products are the highest quality possible', 
                'I put in enough effort to make my product pretty high quality, but at some point my time is better spent elsewhere', 
                'I try to get quality products out quickly, even if I need to take a shortcut now and then', 
                'I spend the minimum amount of time & effort it takes to create products that are acceptable quality.', 
                'Quantity is more important to me than quality.'
              ]"
            ></t-select>
            <span
              ref="error2"
              v-if="!applicationData.describeQuality.length && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="pb-6 relative">
          <p>
            <label for="experience">How would you describe your experience level as an online seller?</label>
            <t-select
              id="experience"
              v-model="applicationData.experience"
              :variant="!applicationData.experience.length && showValidation ? 'danger' : ''"
              :class="{'text-cool-gray-8': applicationData.experience === ''}"
              placeholder="Select Answer"
              :options="[
                'I sell on multiple marketplaces and through my own website', 
                'I have experience selling through only my own website', 
                'I have experience selling through multiple marketplaces', 
                'I have experience selling through one online marketplace', 
                'I’m new to selling creative products online'
              ]"
            ></t-select>
            <span
              ref="error2"
              v-if="!applicationData.experience.length && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="pb-6 relative">
          <p>
            <label for="business-marketing-understanding">How would you describe your understanding of business and marketing?</label>
            <t-select
              id="business-marketing-understanding"
              v-model="applicationData.understanding"
              :variant="!applicationData.understanding.length && showValidation ? 'danger' : ''"
              :class="{'text-cool-gray-8': applicationData.understanding === ''}"
              placeholder="Select Answer"
              :options="[
                'I have an extensive background in business and/or marketing', 
                'I’m familiar with some skills & techniques, but I’m not sure how to apply them when selling my creative work', 
                'I’m vaguely aware of basic business & marketing concepts', 
                'I have experience selling through one online marketplace', 
                'I’m not interested in understanding business & marketing'
              ]"
            ></t-select>
            <span
              ref="error2"
              v-if="!applicationData.understanding.length && showValidation"
              class="absolute bottom-0 left-0 text-red-500"
            >
              <small>Required</small>
            </span>
          </p>
        </div>
        <div class="flow-root mt-3">
          <t-button 
            type="button"
            class="mx-auto w-full sm:w-auto font-semibold bg-mock-green sm:float-right pl-9 pr-9"
            @click="submitClickHandler"
          >
            Submit Application
          </t-button>
          <router-link 
            class="flex justify-center md:block sm:float-left mt-3" 
            to="/step-1"
           >
            <img 
              class="block w-7 transform rotate-90 inline"
              alt="Back Icon"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23008980' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"
            />
            <span class="text-mock-green inline">Back</span>
          </router-link>
        </div>
      </fieldset>
    </form>
    <t-modal
      header=""
      v-model="showModal"
    >
      <template v-slot:default>
        <p>It look like we already have an entry for <strong>{{ applicationData.firstName }} {{ applicationData.lastName }}</strong>, please try again.</p>
      </template>
      <template v-slot:footer>
        <div class="flex justify-end">
          <t-button 
            type="button"
            class="font-semibold bg-mock-green"
            @click="duplicateEntry"
          >
            Ok
          </t-button>
        </div>
      </template>
    </t-modal>
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
      showValidation: false,
      showModal: false,
      applicationData: {
        firstName: '',
        lastName: '',
        categoryValue: '',
        portfolioUrl: '',
        hasOnlineStore: null,
        isAuthor: null,
        storeUrls: '',
        describeQuality: '',
        experience: '',
        understanding: ''
      }
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
      return validUrl.test(this.applicationData.portfolioUrl)
    }
  },
  methods: {
    nextClickHandler () {
      this.showValidation = true
      this.$nextTick(() => {
        // if there are no errors, push the router to next step
        if (!!(this.$refs.error1) === false) {
          this.showValidation = false
          this.$router.push('/step-2')
        }
      })
    },
    backClickHandler () {
      this.$router.push('/step-1')
    },
    submitClickHandler () {
      this.showValidation = true
      this.$nextTick(() => {
        // if there are no errors, push the router to next step
        if (!!(this.$refs.error2) === false) {
          this.showValidation = false
          // TODO AJAX save to DB
          // this.$router.push('/thank-you')
          this.showModal = true
        }
      })
    },
    duplicateEntry() {
      this.showModal = false
      this.backClickHandler()
    }
  }
}
</script>
