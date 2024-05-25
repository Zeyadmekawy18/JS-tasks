

  


var dis = document.getElementById('zzz');
function print() {
  


  var quote = ['“Be yourself; everyone else is already taken.”', '“So many books, so little time.”', '“A room without books is like a body without a soul.”'];
  var namesOf = ['― Oscar Wilde', '-Frank Zappa', '-Marcus Tullius Cicero']; 

  var count = Math.floor(Math.random() * namesOf.length)
  
  dis.innerHTML= namesOf[count] + " " + quote[count];





}


 

