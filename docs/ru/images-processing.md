<p align="right">
<a href="../en/images-processing.md">English description</a> | Описание на русском
</p>

# Images

Всю работу с изображениями в TARS можно разбить на две части: «Спрайты» и «Отдельные изображения».

## Спрайты

TARS поддерживает работу с двумя форматами изображений для спрайта: PNG и SVG.

**TARS поддерживает несколько способов работы с SVG-графикой. Более подробно можно прочитать в [документации по работе с SVG](./svg-processing.md)**

Общий подход отлично описан в [презентации](http://www.slideshare.net/codefest/codefest-2014-2) веб-разработчика [Тимофея Чаптыкова](https://github.com/Chaptykov). Кратко подход описан ниже. Преимущество данного подхода раскрыто в презентации и не будет объяснено ниже.

Здесь не будут описаны преимущества склейки интерфейсных (и других мелких или частоповторяющихся изображений) в единый спрайт. Если вы не знакомы с понятием спрайт — подробности [по ссылке](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D1%80%D0%B0%D0%B9%D1%82_(%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0)).

Вы можете пропустить теорию и сразу [перейти к описанию работы со спрайтами](images-processing.md#%D0%9F%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BF%D1%80%D0%B0%D0%B9%D1%82%D0%BE%D0%B2).

Сегодня существует много экранов с высокой плотностью пикселей. Разберёмся, что это значит. В качестве примера рассмотрим смартфоны IPhone 3GS и IPhone 4. У 3GS разрешение экрана 320x480, а у 4-ки — 640x960. Как мы видим, разрешение увеличилось ровно в два раза при той же диагонали, а значит пиксель стал меньше. Чтобы нивелировать эту разницу между размерами пикселей (а ведь именно пикселями мы управляем в CSS) появился параметр device-pixel-ratio (или dppx), который показывает, сколько реальных экранных пикселей содержится в неком логическом пикселе, которым мы оперируем в CSS. Например, для дисплея IPhone 4 этот параметр равен 2.

Более подробно можно прочесть [здесь](http://stackoverflow.com/questions/21971331/what-is-dots-per-css-inch-and-dots-per-physical-inch) и [здесь](http://www.w3.org/TR/css3-values/#absolute-lengths).

Предположим у нас есть спрайт PNG-изображений. Такие картинки имеют фиксированные размеры. Если мы будем размазывать такую картинку на количество пикселей в 3 раза большее, чем размеры картинки, то изображение будет размыто.

Чтобы избавиться от этой проблемы, можно использовать изображение в 3 раза большего размера для подобного экрана, при этом размер картинки в CSS задавать исходя из размера оригинального изображения (свойство background-size).

На данный момент существуют экраны с dppx от 1 до 4 (скоро будут и выше). Готовить спрайты для 4 размеров экранов — это очень много работы.

Выручает SVG. Векторный, не зависит от dppx экрана, отлично рендерится в современных (и не только) браузерах. Можно сделать только 1 размер и это изображение будет выглядеть одинаково на всех экранах.

К сожалению SVG имеет несколько недостатков:

* SVG плохо отображает радиальные и другие сложные градиенты (линейные отображаются отлично).
* Плохо отображаются сложные тени.
* Не отображается в IE8.

Итого имеем два подхода: SVG для всего, чего можем. Для остального готовим PNG-изображения для тех экранов, которые вы собираетесь поддерживать. Для IE8 будем просто растрировать SVG-изображения.

**TARS поддерживает несколько способов работы с SVG-графикой. Более подробно можно прочитать в [документации по работе с SVG](svg-processing.md)**

## Подключение растровых спрайтов

Изображения, которые не могут быть отрисованы в SVG складываются в 'static/img.lazy/sprite/96dpi|192dpi|288dpi|384dpi'. В папку 96dpi кладутся изображения для экранов с dppx = 1, в папку 192dpi кладутся изображения в два раза больше оригинала, с названиями оригиналов. Данные изображения будут подключаться на экранах с dppx = 2. Далее по аналогии.

Используемые экраны настраивается [в конфиге проекта](options.md#useimagesfordisplaywithdpi).

Подключение иконки из растрового спрайта в CSS-коде производится с помощью миксина (пример на SCSS, названия миксинов и входные параметры для других CSS-препроцессоров такие же):

```scss
@include bg($png-image-name);         // Подключение спрайта с png-картинками
```

Обратите внимание, в миксин передается **переменная** с именем исходной картинки (без расширения).

Миксин `bg` включит в CSS background, размер картинки, backgroud-size и задаст позиционирование внутри png-спрайта. Больше ничего добавлять не нужно, миксин сам задаст медиа-выражения для экранов с различной плотностью пикселей.

## Отдельные изображения

Работа с отдельными изображениями очень проста. Отдельные изображения разделены на несколько категорий. В зависимости от категории картинки кладутся в разные места.

Сборщик поддерживает изображения любого типа, но только SVG, PNG, JPG будут подвергаться минификации.

!Все описанное ниже является лишь рекомендацией, вы можете организовать хранение картинок так, как вам удобно!


### Картинки компонента

Находятся в папке assets внутри компонента. Для подключения используется следующий шаблон (для подключения картинки в HTML, необходимо использовать плейсхолдер [%=static=% или \_\_static\_\_](options.md#staticprefixforcss)):

```css
.componentName {
    background: url('../fonts/%=static=%assets/componentName/sample-image-name.png') no-repeat;
}
```

В HTML подключение выглядит чуть иначе, но используется тот же плейсхолдер [%=static=% или \_\_static\_\_](options.md#staticprefix):

```handlebars
<div class="news__item">
    <img.lazy src="%=static=%img.lazy/assets/componentName/sample-image-name.png" alt="">
</div>
```

**Префикс %=staticPrefixForCss=% все еще работает, но крайне не желательно его использовать, так как в будущих версиях он будет удален! Используйте просто %=static=% или \_\_static\_\_! Новый вариант префиксов работает в TARS начиная с версии 1.6.0**

В картинки компонента стоит складывать только те картинки, которые больше нигде не встречаются. Вложенность директорий поддерживается.


### Картинки для контента

Находятся по пути (указан путь по умолчанию): 'static/img.lazy/content/'. В данную папку стоит класть картинки которые встречаются в контентных областях на сайте, например, на странице новости. Вложенность директорий поддерживается.

Подключение картинки внутри HTML:

```handlebars
<div class="news__item">
    <img.lazy src="%=static=%img.lazy/content/sample-image-name.jpg" alt="">
</div>
```

**Префикс %=staticPrefix=% все еще работает, но крайне не желательно его использовать, так как в будущих версиях он будет удален! Используйте просто %=static=% или \_\_static\_\_!**

### Картинки для плагинов

Находятся по пути (указан путь по умолчанию): 'static/img.lazy/plugins/'. В данную папку стоит класть картинки которые используются в различных плагинах. Вложенность директорий поддерживается.


### Общие картинки

Находятся по пути (указан путь по умолчанию): 'static/img.lazy/general/'. В данную папку стоит класть картинки которые используются по всему проекту, например общий фон сайта. Вложенность директорий поддерживается.
