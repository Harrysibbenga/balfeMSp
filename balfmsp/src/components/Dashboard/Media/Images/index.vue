<template>
  <div>
    <h1 class="text-left">Images</h1>
    <hr class="balfe-line" />
    <div v-if="images.length > 0">
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-2"
          v-for="(image, index) in images"
          :key="index"
        >
          <img :src="image.url" class="img-fluid" />
          <p scope="row">Name: {{ image.name }}</p>
          <p scope="row">Alt: {{ image.alt }}</p>
          <div class="d-block">
            <p class="d-inline">
              Uploaded: {{ image.createdOn | formatCreation }}
            </p>
            <div class="d-inline pl-2 text-info" @click="editImage(image)">
              Edit
            </div>
            <div class="d-inline pl-2 text-primary" @click="deleteImage(image)">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Sorry no images yet .......... Add some!</div>
    <b-modal v-model="deleteDialog" hide-footer hide-header centered>
      <div class="d-block text-center">
        <p>
          Are you sure you want to delete this image ? ( be sure to change the
          posts with this image )
        </p>
      </div>
      <div class="d-block text-right pt-3">
        <b-button class="mr-2" @click="deleteOnConfirm">Yes, delete</b-button>
        <b-button variant="primary" @click="deleteOnCancel"
          >No, do not delete it</b-button
        >
      </div>
    </b-modal>
    <b-modal v-model="editDialog" hide-footer hide-header centered>
      <div class="d-block text-center">
        <b-input
          id="title"
          v-model.trim="alt"
          type="text"
          placeholder="Image description goes here"
        ></b-input>
      </div>
      <div class="d-block text-right pt-3">
        <b-button class="mr-2" @click="editOnConfirm">Edit</b-button>
        <b-button variant="primary" @click="editOnCancel">Cancel</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import moment from "moment";
const fb = require("../../../../firebaseConfig");

export default {
  data() {
    return {
      deleteDialog: false,
      editDialog: false,
      toDelete: null,
      toEdit: null,
      alt: "",
    };
  },
  computed: {
    images() {
      return this.$store.getters["images/getImages"];
    },
  },
  methods: {
    deleteImage(image) {
      this.toDelete = image;
      this.deleteDialog = true;
    },
    deleteOnCancel() {
      this.deleteDialog = false;
    },
    deleteOnConfirm() {
      this.deleteDialog = false;
      fb.imageUrlCollection.doc(this.toDelete.id).delete();
    },
    editImage(image) {
      this.toEdit = image;
      this.editDialog = true;
    },
    editOnCancel() {
      this.editDialog = false;
      this.toEdit = "";
    },
    editOnConfirm() {
      fb.imageUrlCollection
        .doc(this.toEdit.id)
        .update({
          alt: this.alt,
        })
        .then(() => {
          this.alt = "";
          this.editDialog = false;
        });
    },
  },
  filters: {
    formatCreation(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).fromNow();
    },
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).format("MMMM Do YYYY");
    },
  },
  created() {
    this.$store.dispatch("images/setImages");
  },
};
</script>
