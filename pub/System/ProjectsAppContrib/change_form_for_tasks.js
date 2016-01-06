$(document).ready(function() {
   $('.tasktracker')
      .on('beforeCreate', function(e,t) {
         if(t.parent){
            t.form= foswiki.preferences.WEB+".TasksForm";
            t.depth=0;
         }

         return t;
      })
      .on('beforeSave', function(e,t) {
         if (t.Parent){
            t.form= foswiki.preferences.WEB+".TasksForm";
         }

         return t;
      });
});
