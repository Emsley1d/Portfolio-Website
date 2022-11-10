new fullpage('#fullpage', {
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    
    // Get your license at https://alvarotrigo.com/fullPage/pricing/
    licenseKey: '5K9K9-3NWS9-OYK68-O7J2J-YOFXN'
  });
  
  document.querySelector('.show-content').addEventListener('click', showContent);
  
  function showContent(){
    document.querySelector('.extra-content').classList.toggle('active');
  }