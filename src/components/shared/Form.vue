<template>
  <div id="form">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="mb-3" v-for="element in formElement" :key="element.id">
          <label for="exampleInputEmail1" :class="element.type !== 'checkbox' ? 'form-label': 'form-check-label'">{{
            element.props.title
          }}</label>
          <input
            :type="element.type"
            v-model="form[element.token]"
            :class="element.type !== 'checkbox' ? 'form-control': 'form-check-input'"
            :id="element.token"
            :checked="element.props.default || false"
            :aria-describedby="element.token"
            :required="element.type === 'date' && form['IS_PERSON_MINOR'] ? true : element.props.required"
            :placeholder="element.props.placeholder || ''"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, inject } from "vue";

export default defineComponent({
  name: "Form",
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const formElement = ref(props.blocks);
    const form = ref([]);
    const emitter = inject('emitter');

    const submitForm = () => {
        try{
          emitter.emit('passGuestData', form.value);
          form.value = {}
        }catch(err) {
            console.log('error', err)
        }
    }

    return { formElement, form, submitForm };
  },
});
</script>
