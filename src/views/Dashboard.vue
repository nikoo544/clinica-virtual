<template>
  <section>
    <dash-nav></dash-nav>

    <div class="section tabla" heigth="200px">
      <b-table
        :data="users"
        :bordered="isBordered"
        :striped="isStriped"
        :hoverable="isHoverable"
        :loading="isLoading"
      >
        <b-table-column field="dni" label="DNI" centered v-slot="props">
          {{ props.row.dni }}
        </b-table-column>
        <b-table-column field="Nombres" label="Nombres" centered v-slot="props">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column
          field="Apellidos"
          label="Apellidos"
          centered
          v-slot="props"
        >
          {{ props.row.email }}
        </b-table-column>

        <b-table-column
          field="birthday"
          label="Cumpleaños"
          centered
          v-slot="props"
        >
          <span class="tag is-success">
            {{ props.row.birthday.toDate().toLocaleDateString() | date: 'dd MMM hh:mm' }}
          </span>
        </b-table-column>

        <b-table-column label="Sexo" centered v-slot="props">
          <span>
            <b-icon
              pack="fas"
              :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
            >
            </b-icon>
            {{ props.row.gender }}
          </span>
        </b-table-column>
      </b-table>
    </div>

    <dash-footer></dash-footer>
  </section>
</template>
<script>
import DashNav from "@/components/Dashboard/DashNav.vue";
import DashFooter from "@/components/Dashboard/DashFooter.vue";
import firebase from "firebase";

export default {
  components: {
    DashNav,
    DashFooter,
  },

  data() {
    return {
      users: [],
      isBordered: true,
      isStriped: true,
      isHoverable: true,
      isFocusable: true,
      isLoading: false,
    };
  },

  async created() {
    let vm = this;

    firebase
      .firestore()
      .collection("users")
      .onSnapshot(
        await function(querySnapshot) {
          vm.users = [];
          querySnapshot.forEach(function(doc) {
            vm.users.push({
              name: doc.data().name,
              email: doc.data().lastname,
              gender: doc.data().gender,
              birthday: doc.data().birthday,
              dni: doc.data().dni,
            });
          });
          console.log(vm.users);
        }
      );
  },

  methods: {
    addUser: async () => {
      await firebase
        .firestore()
        .collection("cities")
        .doc()
        .set({
          name: "Los Angeles",
          state: "CA",
          country: "USA",
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>
