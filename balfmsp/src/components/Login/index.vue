<template>
  <div class="container">
    <transition name="fade">
      <div v-if="performingRequest" class="loading">
        <p>Loading...</p>
      </div>
    </transition>
    <b-form v-if="showLoginForm" @submit.prevent>
      <h1 class="text-left">Login</h1>
      <b-form-group
        id="email"
        label="Email address: "
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-input
          id="email"
          v-model.trim="formdata.email"
          type="email"
          required
          placeholder="you@email.com"
          :class="{ invalid: $v.formdata.email.$error }"
          @blur="$v.formdata.email.$touch()"
        ></b-input>
        <div class v-if="$v.formdata.email.$error">
          <p class="error-lablel" v-if="!$v.formdata.email.required">
            This field is required
          </p>
          <p class="error-lablel" v-if="!$v.formdata.email.email">
            Please enter a valid email
          </p>
        </div>
      </b-form-group>
      <b-form-group id="password" label="Password: " label-for="password">
        <b-input
          v-model.trim="formdata.password"
          type="password"
          id="password"
          required
          placeholder="Enter Password"
          aria-describedby="password-help-block"
          @blur="$v.formdata.password.$touch()"
          :class="{ invalid: $v.formdata.password.$error }"
        ></b-input>
        <div v-if="$v.formdata.password.$error">
          <p class="error-lablel" v-if="!$v.formdata.password.required">
            This field is required
          </p>
          <p class="error-lablel" v-if="!$v.formdata.password.minLength">
            At Least 4 characters
          </p>
        </div>
      </b-form-group>
      <b-button @click="login" variant="primary">Login</b-button>

      <div class="d-block py-2">
        <a @click="togglePasswordReset" class="text-primary">Forgot Password</a>
      </div>
    </b-form>

    <b-form v-if="showForgotPassword" @submit.prevent class="password-reset">
      <div v-if="!passwordResetSuccess">
        <h1>Reset Password</h1>
        <p>We will send you an email to reset your password</p>

        <b-form-group id="email3" label="Email: " label-for="email3">
          <b-input
            v-model.trim="signupForm.email"
            type="text"
            id="email3"
            required
            placeholder="you@email.com"
          ></b-input>
        </b-form-group>

        <b-button @click="resetPassword" variant="secondary">Submit</b-button>

        <div class="py-2">
          <a @click="toggleForm" class="text-secondary">Back to Log In</a>
        </div>
      </div>
      <div v-else>
        <h1>Email Sent</h1>
        <p>check your email for a link to reset your password</p>
        <div class="py-2">
          <a @click="toggleForm" class="text-secondary">Back to Log In</a>
        </div>
      </div>
    </b-form>

    <transition name="fade">
      <div v-if="errorMsg !== ''" class="error-msg">
        <p>{{ errorMsg }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { auth } from "../../firebaseConfig";
export default {
  data() {
    return {
      formdata: {
        email: "",
        password: "",
      },
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: "",
      },
      passwordForm: {
        email: "",
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: "",
    };
  },
  validations: {
    formdata: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    toggleForm() {
      this.errorMsg = "";
      this.showLoginForm = !this.showLoginForm;
      if (this.showForgotPassword) {
        this.showForgotPassword = false;
        this.passwordResetSuccess = false;
      }
    },
    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true;
        this.showForgotPassword = false;
        this.passwordResetSuccess = false;
      } else {
        this.showLoginForm = false;
        this.showForgotPassword = true;
      }
    },
    login() {
      this.performingRequest = true;
      auth
        .signInWithEmailAndPassword(this.formdata.email, this.formdata.password)
        .then((user) => {
          this.$store.commit("admin/setCurrentUser", user.user);
          this.performingRequest = false;
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },
    resetPassword() {
      this.performingRequest = true;
      auth
        .sendPasswordResetEmail(this.passwordForm.email)
        .then(() => {
          this.performingRequest = false;
          this.passwordResetSuccess = true;
          this.passwordForm.email = "";
        })
        .catch((err) => {
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style lang="css" scoped>
.form-control.invalid {
  border: red 1.5px solid !important;
}
</style>
