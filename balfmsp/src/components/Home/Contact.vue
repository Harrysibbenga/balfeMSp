<template>
  <div id="contact">
    <!-- Section: Contact v.1 -->
    <section class="py-5">
      <!-- Section heading -->
      <div class="bg-primary d-flex flex-centre p-3 pl-5 w-50 mb-5 text-light">
        <h2 class="ml-5">Contact us</h2>
      </div>
      <h2 class="h1-responsive font-weight-bold text-center my-5"></h2>
      <!-- Section description -->
      <p class="text-center w-responsive mx-auto pb-5"></p>

      <!-- Grid row -->
      <div class="row m-0">
        <!-- Grid column -->
        <div class="col-lg-5 mb-lg-0 mb-4">
          <!-- Form with header -->
          <form
            class="needs-validation"
            novalidate
            @submit.prevent="submitForm"
          >
            <div
              class="g-recaptcha"
              data-sitekey="6LcHrrgZAAAAAKGcGY4_CL2SqUwZit7iZ_xDVHM7"
            ></div>
            <div class="card border-0">
              <div class="card-body bg-dark">
                <!-- Body -->

                <div class="md-form">
                  <i class="fas fa-user prefix grey-text"></i>
                  <label for="form-name">Your name</label>
                  <input
                    v-model="fields.name"
                    type="text"
                    id="form-name"
                    class="form-control"
                  />
                </div>
                <div class="md-form">
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <label for="form-email">Your email</label>
                  <input
                    v-model="fields.email"
                    type="text"
                    id="form-email"
                    class="form-control"
                  />
                </div>
                <div class="md-form">
                  <i class="fas fa-tag prefix grey-text"></i>
                  <label for="form-Subject">Subject</label>
                  <input
                    v-model="fields.subject"
                    type="text"
                    id="form-Subject"
                    class="form-control"
                  />
                </div>
                <div class="md-form">
                  <i class="fas fa-pencil-alt prefix grey-text"></i>
                  <label for="form-text">Message</label>
                  <textarea
                    v-model="fields.message"
                    id="form-text"
                    class="form-control md-textarea"
                    rows="3"
                  ></textarea>
                </div>
                <div class="text-center">
                  <button class="btn btn-secondary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <!-- Form with header -->
          <div class="row text-center m-0">
            <div class="col-md-4">
              <p>Balfe Motorsport</p>
              <p>Richmond House</p>
              <p>Brant Road, Fulbeck</p>
              <p>Grantham, Lincolnshire</p>
              <p class="mb-md-0">NG32 3JZ</p>
            </div>
            <div class="col-md-4 my-auto">
              <b-icon icon="telephone"></b-icon>
              <p>01400 273 344</p>
            </div>
            <div class="col-md-4  my-auto">
              <b-icon icon="envelope-open"></b-icon>
              <p>info@balfe-motorsport.com</p>
            </div>
          </div>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-7">
          <!--Google map-->
          <div
            id="map-container-section"
            class="z-depth-1-half map-container-section mb-4"
            style="height: 500px"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d38381.3941208386!2d-0.6281606744855633!3d53.04126436379512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4878380124f8d913%3A0x1a5b5c94d2faa8c!2sBalfe%20Motorsport%2C%20Richmond%20House%2C%20Brant%20Road%2C%20Grantham%20NG32%203JZ%2C%20United%20Kingdom!3m2!1d53.0412179!2d-0.5931413999999999!4m5!1s0x4878380124f8d913%3A0x1a5b5c94d2faa8c!2sBalfe%20Motorsport%2C%20Richmond%20House%2C%20Brant%20Road%2C%20Grantham%20NG32%203JZ%2C%20United%20Kingdom!3m2!1d53.0412179!2d-0.5931413999999999!5e0!3m2!1sen!2sus!4v1596206725880!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </section>
    <!-- Section: Contact v.1 -->
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      modal: false,
      fields: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    validate() {
      const form = [...arguments];
      const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      for (let index in form) {
        let field = form[index];
        if (field === "email" && !emailRegexp.test(this.fields[field])) {
          return false;
        } else if (this.fields[field] === "") {
          return false;
        }
      }
      return true;
    },
    submitForm(event) {
      event.target.classList.add("was-validated");
      console.log("clicked");
      if (this.validate("email", "name", "message", "subject")) {
        emailjs
          .sendForm(
            "gmail_balfe",
            "balfe_template_CogtKdJO",
            event.target,
            "user_NneW5XuAU0JIqdI7Wr8RN"
          )
          .then(
            result => {
              console.log("SUCCESS!", result.status, result.text);
              event.target.classList.remove("was-validated");
              this.fields = {};
            },
            error => {
              console.log("FAILED...", error);
            }
          );
      }
    }
  }
};
</script>
