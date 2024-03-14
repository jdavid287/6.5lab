function rando() {
    const names = ['Jack', 'Thomas', 'Kristen', 'Isabella', 'Dominic', 'Roxy', 'Teddy', 'Trinity', 'Koda', 'Daphne', 'Jeff'];
    return {
        get name() {
            return names[Math.floor(Math.random() * names.length)];
        },
      }
    } 
