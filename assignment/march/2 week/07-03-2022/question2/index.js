

   function clicked(n) {
       if (n == 'search') {
         document.getElementById('home2').style.display = "none";
         document.getElementById('search_srh2').style.display = "initial";
         document.getElementById('like2').style.display = "none";
         document.getElementById('profile_js2').style.display = "none";
      }
       else if (n == 'home') {
  
          document.getElementById('home2').style.display = "initial";
          document.getElementById('search_srh2"').style.display = "none";
          document.getElementById('like2').style.display = "none";
          document.getElementById('profile_js2').style.display = "none";
         
      }
     
      else if (n == 'like') {
         document.getElementById('home2').style.display = "none";
         document.getElementById('search_srh2"').style.display = "none";
         document.getElementById('like2').style.display = "initial";
         document.getElementById('profile_js2').style.display = "none";
      }
      else  {
         document.getElementById('home2').style.display = "none";
         document.getElementById('search_srh2"').style.display = "none";
         document.getElementById('like2').style.display = "none";
         document.getElementById('profile_js2').style.display = "initial";
      }
      
     
   }
     
