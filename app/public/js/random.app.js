var randomApp = new Vue({
  el: '#randomUser',
  data: {
    randos: {}
  },
  methods: {
    fetchRando() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {randomApp.randos = json.results[0]})
      ;

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    },
      handleCreateBook(book) {
      this.fetchRando();
      // TODO: Pass this data to another Vue app
      console.log(book);
    }
  },

  created() {
    this.fetchRando();
  }
});
