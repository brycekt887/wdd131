
const myCharacter = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 7,
    health: 40,
    image: 'images/snortleblat.webp',
  

    attacked: function () {
      this.health = this.health - 20;
      if (this.health <= 0) {
        this.health = 0;
        alert('Character Died');
      }
      renderCharacter();
    },
  
  
    levelUp: function () {
      this.level = this.level + 1;
      renderCharacter();
    }
  };
  
  console.log(myCharacter.name);
  console.log(myCharacter.class);
  
  
  document.querySelector('#characterName').textContent = myCharacter.name;
  document.querySelector('#characterClass').textContent = myCharacter.class;
  
  document.querySelector('img').setAttribute('src', myCharacter.image);
  document.querySelector('img').setAttribute('alt', myCharacter.name);
  

  function renderCharacter() {
    document.querySelector('#characterLevel').textContent = myCharacter.level;
    document.querySelector('#characterHealth').textContent = myCharacter.health;
  }
  
  renderCharacter();
 
  document.querySelector('#attackedBtn').addEventListener('click', function () {
    myCharacter.attacked();
  });
  
  document.querySelector('#levelUpBtn').addEventListener('click', function () {
    myCharacter.levelUp();
  });