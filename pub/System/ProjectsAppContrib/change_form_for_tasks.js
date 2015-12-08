$('document').ready(function() {
   $('.tasktracker').on('beforeCreate', function(e,t) {
      if(t.parent){
         t.form="Projects.TasksForm";
         t.depth=0;
      }
   });
   $('.tasktracker').on('beforeSave', function(e,t) {
      if (t.Parent){
         t.form="Projects.TasksForm";
      }
   });
});
