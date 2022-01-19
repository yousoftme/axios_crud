    store () {
      axios.post('', {
        key: value,
      }).then((response) => {
        if (response.status == 200) {
          
        } else {
          console.warn(response.data);
        }
      }).catch((error) => {
        if (error.response.status == 422) {
          
        } else {
          console.error(error.response.statusText);
        }
      });
    },

    update (id) {
      axios.put('', {
        key: value,
      }).then((response) => {
        if (response.status == 200) {
          
        } else {
          console.warn(response.data);
        }
      }).catch((error) => {
        if (error.response.status == 422) {
          
        } else {
          console.error(error.response.statusText);
        }
      });
    },

    destroy (id) {
      axios.delete('').then((response) => {
        if (response.status == 200) {
          
        } else {
          console.warn(response.data);
        }
      }).catch((error) => {
        console.error(error.response.statusText);
      });
    },
