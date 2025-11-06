// === Dicionário de letras (Você pode adicionar mais aqui!) ===
const letras = {
  musica1: `(Título: A Lenda de Maputo)

Verso 1:
O sol nasceu na Baixa, a brisa sopra forte.
Moçambique, a nossa terra, a nossa casa.

Verso 2:
O meu canto é a voz do povo que não se cala.
No marrabenta encontramos a nossa força e a nossa fala.`,

  musica2: `(Título: Ritmos da Zambézia)

Verso 1:
No vale do Zambeze, a dança já começou.
Batidas que o coração acelerou.

Verso 2:
De Quelimane a Tete, a festa não tem fim.
A alegria do meu povo está aqui dentro de mim.`
};

// === Função para mostrar letra ===
function mostrarLetra(nomeMusica) {
  const letraDiv = document.getElementById('letra');
  letraDiv.textContent = letras[nomeMusica] || "Letra não encontrada.";
  
  // Oculta o vídeo ao mostrar a letra (se estiver visível)
  const videoDiv = document.getElementById('videoPlayer');
  videoDiv.style.display = 'none';
}

// === Função para mostrar/ocultar vídeo ===
function toggleVideo() {
  const videoDiv = document.getElementById('videoPlayer');
  
  // Se o vídeo estiver oculto ou sem estilo, mostra. Caso contrário, oculta.
  if (videoDiv.style.display === 'none' || videoDiv.style.display === '') {
    videoDiv.style.display = 'block';
  } else {
    videoDiv.style.display = 'none';
  }
}

// IMPORTANTE: Removemos o código que bloqueava os links do menu (Início, Vídeos, Contacto).
// Agora, eles tentarão abrir index.html, videos.html e contacto.html.