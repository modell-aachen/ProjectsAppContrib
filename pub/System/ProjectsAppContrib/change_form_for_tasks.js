$(document).ready(function() {
   $('.tasktracker:visible').livequery( function() {
      $(this).on('beforeCreate', function(e,t) {
         if(t.parent){
            if(t.context.includes("Prototype")){
                t.form= foswiki.preferences.WEB+".PrototypeTaskForm";
            } else {
                t.form= foswiki.preferences.WEB+".TaskForm";
            }
            t.depth=0;
         }

         return t;
      })
      $(this).on('beforeSave', function(e,t) {
         var opts = $(this).data('tasktracker_options');
         var query = $.parseJSON(opts.query);
         t.Milestone = ""+foswiki.preferences.WEB + "." + foswiki.preferences.TOPIC + query.Milestone.substring;
         if (t.Parent){
             console.log(t.TopicType);
            if(t.TopicType.includes("prototype")){
                t.form= foswiki.preferences.WEB+".PrototypeTaskForm";
            } else {
                t.form= foswiki.preferences.WEB+".TaskForm";
            }
         }

         return t;
      });
   });
});
