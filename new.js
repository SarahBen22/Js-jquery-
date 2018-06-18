var hp = $.get("http://hp-api.herokuapp.com/api/characters").then(function(data){

data.forEach(function(personnage){
  console.log(personnage);
  $("#all").append('<div class="card text-white bg-info mb-3" style="max-width: 18rem;"><div class="card-header"><img src="'+personnage.image+'" /></div> <div class="card-body"><h5 class="card-title">Info card title</h5><p class="card-text">' + personnage.name + '</p></div>');
});
});
