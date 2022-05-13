<template>
  <v-form
    class="value-form"
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="handleSubmit"
  >
    <v-text-field
      class="value-form__text ma-0 pa-0 rounded-lg"
      clearable
      outlined
      dense
      hide-details="true"
      :value="text"
      :label="label"
      :rules="inputRules"
      required
      @input="$emit('input', $event)"
    ></v-text-field>
    <v-btn
      class="value-form__btn primary rounded-lg"
      elevation="0"
      height="100%"
      type="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "ValueForm",
  props: {
    text: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: () => "Type something...",
    },
  },
  data() {
    return {
      valid: true,
      inputRules: [(v) => !!v || "Is required"],
    };
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        this.$emit("inputSubmit");
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.value-form {
  display: grid;
  grid-template-columns: 1fr 77px;
  gap: 16px;

  &__input {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    outline: 1px solid $light-gray;

    &::placeholder {
      color: $muted;
    }
  }
}
</style>
