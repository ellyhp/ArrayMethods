

    const btnUnshift = document.getElementById('btn-unshift');
    const contentUnshift = document.getElementById('content-unshift');
    const btnUnshiftSelect = document.getElementById('btn-unshift-select');

        btnUnshift.addEventListener('click', () => {
            contentUnshift.classList.add('hidden');
        });

        btnUnshiftSelect.addEventListener('click', () => {
            contentUnshift.classList.remove('hidden')
        });