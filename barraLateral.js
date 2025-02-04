console.log("ola mundo");

const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

// Função para alternar a visibilidade da barra lateral
toggleButton.addEventListener('click', () => {
  const isOpen = sidebar.classList.contains('show');
  
  if (isOpen) {
    sidebar.classList.remove('show');
    toggleButton.setAttribute('src', 'https://www.example.com/open-icon.png'); // Altere para a imagem de abrir
    toggleButton.setAttribute('data-state', 'closed');
  } else {
    sidebar.classList.add('show');
    toggleButton.setAttribute('src', 'https://www.example.com/close-icon.png'); // Altere para a imagem de fechar
    toggleButton.setAttribute('data-state', 'open');
  }
});

// Função para fechar a barra lateral quando o botão de fechar for clicado
closeButton.addEventListener('click', () => {
  sidebar.classList.remove('show');
  toggleButton.setAttribute('src', './assets/abrirMenu.png'); // Imagem de abrir
  toggleButton.setAttribute('data-state', 'closed');
});