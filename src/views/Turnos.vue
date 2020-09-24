<template>
  <section>
    <dash-nav></dash-nav>

    <div class="container turnos">
      <h1 class="title">Solicitud de turno</h1>
      <b-field>
        <b-field label="Especialidad">
          <b-radio-button
            v-model="radioButton"
            native-value="dentista"
            type="is-success"
          >
            <span>Odontologo 🦷</span>
          </b-radio-button>

          <b-radio-button
            v-model="radioButton"
            native-value="nutricionista"
            type="is-success"
            ><span>Nutricionista 🍏</span>
          </b-radio-button>

          <b-radio-button
            v-model="radioButton"
            native-value="oftalmologo"
            type="is-success"
            ><span>Oftalmologo 👁‍🗨</span>
          </b-radio-button>

          <b-radio-button
            v-model="radioButton"
            native-value="kinesiologo"
            type="is-success"
            ><span>Kinesiologo 🦴</span>
          </b-radio-button>
        </b-field>
      </b-field>

      <b-field label="Seleccione el Profesional">
        <b-select placeholder="Select a character" expanded>
          <option value="flint">Black Jack</option>
          <option value="silver">Kurama</option>
        </b-select>
      </b-field>
      <section class="is-inline-flex ">
        <b-field label="Select a date">
          <b-datepicker
            placeholder="Click to select..."
            :min-date="minDate"
            :max-date="maxDate"
          >
          </b-datepicker>
        </b-field>

        <b-field label="Select time" class="mx-4">
          <b-timepicker
            class="is-inline"
            placeholder="Click to select..."
            :min-time="min"
            :max-time="max"
            :incrementMinutes="15"
          ></b-timepicker>
        </b-field>
      </section>
      <div class="buttons">
        <b-button type="is-info" expanded class="my-4"
          >Enviar Solicitud</b-button
        >
      </div>
    </div>

    <dash-footer></dash-footer>
  </section>
</template>

<script>
import DashNav from "@/components/Dashboard/DashNav.vue";
import DashFooter from "@/components/Dashboard/DashFooter.vue";

export default {
  components: {
    DashNav,
    DashFooter,
  },

  data() {
    const today = new Date();
    const min = new Date();
    min.setHours(8);
    min.setMinutes(0);
    const max = new Date();
    max.setHours(19);
    max.setMinutes(0);

    return {
      date: new Date(),
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      maxDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 15
      ),

      minTime: min,
      maxTime: max,
      selected: null,
      radioButton: "",
      users: [],
      isBordered: true,
      isStriped: true,
      isHoverable: true,
      isFocusable: true,
      isLoading: false,
    };
  },

  computed: {
    selectedString() {
      return this.selected ? this.selected.toDateString() : "";
    },
  },
};
</script>
