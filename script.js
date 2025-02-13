// Função para verificar se a largura da tela é maior que 991px
function checkScreenSize() {
    if (window.innerWidth > 991) {
        // Obtém as referências dos elementos
        const containerNovo = document.getElementById('container-novo');
        const containerFluido = document.getElementById('container-fluido');

        // Função para detectar quando a rolagem atinge a div e fazer ela se mover ou parar
        function updateScrollPosition() {
            // Posição do topo da página e a altura da janela de visualização
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Posições relativas de container-novo e container-fluido
            const containerOffsetTop = containerNovo.getBoundingClientRect().top + scrollPosition;
            const containerHeight = containerNovo.offsetHeight;
            const containerOffsetBottom = containerOffsetTop + containerHeight;

            const containerFluidoHeight = containerFluido.offsetHeight;

            // Verificar se a rolagem atingiu o topo de container-novo
            if (scrollPosition > containerOffsetTop) {
                // Tornar a div fixa
                containerFluido.classList.add('sticky');
                containerFluido.style.position = 'sticky';
                
                // Verificar se o final de container-novo foi atingido
                if (scrollPosition + windowHeight > containerOffsetBottom - containerFluidoHeight) {
                    // Parar a div no final de container-novo
                    containerFluido.classList.add('stopped');
                } else {
                    containerFluido.classList.remove('stopped');
                }
            } else {
                containerFluido.classList.remove('sticky');
                containerFluido.classList.remove('stopped');
            }
        }

        // Atualiza a posição durante o evento de rolagem
        window.addEventListener('scroll', updateScrollPosition);
    }
}

// Verifica o tamanho da tela e executa a função ao carregar a página
checkScreenSize();

// Também pode adicionar um evento de resize para verificar novamente quando a janela for redimensionada
window.addEventListener('resize', checkScreenSize);
