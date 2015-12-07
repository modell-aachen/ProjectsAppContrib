$('document').ready(function() {
   $('.tasktracker').on('beforeCreate', function(e,t) {
      if(t.parent){
         console.log(t);
         t.form="Projects.TasksForm";
         t.depth=0;
      }
   });
});
