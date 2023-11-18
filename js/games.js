addEventListener('DOMContentLoaded', function() {
    var languageFilter = document.getElementById('languageFilter');

    // Обработчик изменения выбранного элемента в списке
    languageFilter.addEventListener('change', function() {
    // Ваш код для обработки изменений, если необходимо
    console.log('Выбранные языки:', Array.from(languageFilter.selectedOptions).map(option => option.value));
});

    // Обработчик клика на ярлык (label)
    document.querySelector('.filter-group label[for="languageFilter"]').addEventListener('click', function() {
    // Переключаем видимость фильтра при клике
    var languageFilterDiv = document.querySelector('.language-filter');
    languageFilterDiv.style.display = (languageFilterDiv.style.display === 'none') ? 'block' : 'none';
});
});

