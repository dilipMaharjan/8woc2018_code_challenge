function findVerse()
{
   var book = document.getElementById("book").value;
   var chapter_num = document.getElementById("chapter").value;
   var verse_num - document.getElementById("verse").value;
   var verse_text_area = document.getElementById("verse_text");
   var xhttp = new XMLHttpRequest();
   var url = "http://localhost:8000/verses/" + book + "/" + chapter_num + "/" + verse_num;
   var result;

   xhttp.open( "GET",    //configuring GET request
               url,
               false);
   xhttp.send();   //send GET request
   result = JSON.parse(xhttp.responseText);
   verse_text_area.value = result;
}
