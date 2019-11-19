<template>
<div class="main">
  <Header></Header>
    <div class="form">
      <form @submit.prevent="handleSubmit">
        <h1 class="ma-3">Sign up to Dashboard</h1>
        <div>
          <v-text-field 
          v-model="user.fname"
          :class="{'is-invalid': submitted && errors.has('firstName')}"
          outlined 
          dense 
          placeholder="First name" 
          required></v-text-field>
        </div>
        <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{errors.first('firstName')}}</div>

        <div>
          <v-text-field 
          :class="{'is-invalid': submitted && errors.has('lastName')}"
          v-model="user.lname" 
          outlined 
          dense 
          placeholder="last name" 
          required></v-text-field>
        </div>
        <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{errors.first('lastName')}}</div>

        <div>
          <v-text-field 
          :class="{'is-invalid': submitted && errors.has('email')}"
          v-model="user.email" 
          outlined 
          dense 
          placeholder="you@domain.com" 
          type="email" 
          required></v-text-field>
        </div>
        <div v-if="submitted && errors.has('email')" class="invalid-feedabck">{{errors.first('email')}}</div>

        <div>
          <v-text-field 
          v-validate="{required: true, min: 6}" 
          :class="{'is-invalid': submitted && errors.has('password')}"
          name="password"
          v-model="password" 
          outlined 
          dense 
          placeholder="password" 
          type="password"></v-text-field>
        </div>

        <div>
          <v-text-field v-model="confirmPassword" outlined dense placeholder="confirm password" type="password"></v-text-field>
        </div>

        <div>
          <v-btn depressed class="btn" type="submit">Continue</v-btn>
        </div>
      </form>
    </div>
  <Footer></Footer>
  
</div>
  
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer1.vue'
import { mapState, mapActions } from 'vuex'

export default {

  //AUTHENTICATION WITH VUEX
  props: ['nextURL'],
  components: {
    Header,
    Footer
  },

  data() {
    return {
      user: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false
    }
  },

  computed: {
    ...mapState('account', ['status'])
  },

  methods: {
    ...mapActions('account', ['register']),
    handleSubmit(e) {
      e.preventDefaults()
      this.submitted = true
      this.$validator.validate().then(valid => {
        if(valid) {
          this.register(this.user)
        }
      })
    }
  }
}
</script>

<style scoped>
.ma-3 {
  margin-bottom: 30px !important;
}

.form {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 5%;
}

.btn {
  font-weight: bolder;
  width:100%;
  border-radius: 4px !important;
  background: #696969 !important;
  text-transform: capitalize !important;
  color: white;
}

</style>