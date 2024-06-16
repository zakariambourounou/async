async function waitCall() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Échec de la récupération des données');
      }
      const data = await response.json();
      console.log('Données récupérées:', data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
    }
  }
  
  waitCall();