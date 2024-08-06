
  

<template>
  <div>
    <h1>{{ isEdit ? 'Edit User' : 'Create User' }}</h1>
    <form @submit.prevent="handleSubmit">
      <div id="Usuario">
        <label>Username: </label>
        <input v-model="user.username" required />
      </div>
      <div>
        <label id="email">Email: </label>
        <input v-model="user.email" type="email" required />
      </div>
      <div>
        <label>Password: </label>
        <input v-model="user.password" type="password" required />
      </div>
      <center><button type="submit">Submit</button></center>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      isEdit: false
    };
  },
  created() {
    if (this.$route.params.id) {
      this.isEdit = true;
      this.fetchUser(this.$route.params.id);
    }
  },
  methods: {
    async fetchUser(id) {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleSubmit() {
      try {
        if (this.isEdit) {
          await axios.put(`http://localhost:3000/api/users/${this.$route.params.id}`, this.user);
        } else {
          await axios.post('http://localhost:3000/api/users', this.user);
        }
        this.$router.push({ name: 'UserList' });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>

template{
  background-color: aqua;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}



div {
  margin-bottom: 1em;

 

}

label {
  margin-bottom: 0.5em;
  font-weight: bold;
}

input {
  padding: 0.5em;
  font-size: 1em;
  border-radius: 3px;
  background:rgba(255, 255, 255, 0.842) ;
        text-align:justify;
        border-radius: 6px;
        margin:auto;
        box-shadow: 5px 5px 5px;
        width: 200px;
        height: 3px;

}
#email{

        width: 400px;
        height: 22220px;
}
button {
  padding: 0.5em;
  font-size: 1em;
  cursor: pointer;
  border-radius: 6px;
  text-align: center;
  font-size: 13px;
  width: 70px;
  height: 30px;


}
</style>
