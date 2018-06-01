
$(document).ready(function() {
  $("#you").submit(function(event) {
    event.preventDefault();

    var dev = $("input:radio[name=dev]:checked").val();
    var andy = $("input:radio[name=andy]:checked").val();
    var design = $("input:radio[name=design]:checked").val();
    var micro = $("input:radio[name=micro]:checked").val();
    var Track = "me";

    if(micro === "love") {
      if(dev === "back") {
        Track = "C#, C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.";
        $("body").css("background-image", "url('img/c.jpg')");
      } else if (dev === "back") {
        Track = " JAVA";
        $("body").css("background-image", "url('img/ki.jpg')");
      } else {
        Track = " C#, C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.";
        $("body").css("url('img/c.jpg')");
      }
    } else if(micro === "hate") {
      if(dev === "front") {
        Track = "JAVA, Java is a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.";
        $("body").css("background-image", "url('img/ki.jpg')");
      } else if (dev === "back") {
        Track = " PHP is by far the most popular backend language today, with 80 percent of websites utilizing it 'server-side'. It is perhaps best known for it's use in content management systems like Wordpress, Drupal, and Joomla. But the versatility of the language and the frameworks it powers make employment options numerous and diverse. If you're keen to work for a fast paced agency that builds websites for lots of clients, or maintain the security and stability of a huge complex of government websites, or if you like the idea of building out small sites for brands, businesses, and organizations - In any of these cases, PHP would be a great way to go.";
        $("body").css("background-image", "url('img/php.jpg')");
      } else {
        Track = " Java";
        $("body").css("background-image", "url('img/ki.jpg')");
      }
    } else {
      Track = " PHP, PHP is by far the most popular backend language today, with 80 percent of websites utilizing it 'server-side'. It is perhaps best known for it's use in content management systems like Wordpress, Drupal, and Joomla. But the versatility of the language and the frameworks it powers make employment options numerous and diverse. If you're keen to work for a fast paced agency that builds websites for lots of clients, or maintain the security and stability of a huge complex of government websites, or if you like the idea of building out small sites for brands, businesses, and organizations - In any of these cases, PHP would be a great way to go.";
      $("body").css("background-image", "url('img/php.jpg')");
    }

    $("#result").text(Track);

  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

});
