---
layout: project
type: project
image: images/recipeBook-cover.png
title: Przepisownik
labelColor: yellow
language: JavaScript
website: http://przepisownik2016.opx.pl/
permalink: projects/recipeBook
# All dates must be YYYY-MM-DD format!
date: 2016-07-19
labels:
  - HTML
  - CSS
summary: Page that stores culinary recipes that got my attention. Project was made to get familiar with gridster library and have mobile recipes book.
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/recipeBook-page-1.png">
  </div>
</div>

<br>

<div style="text-align: justify;text-justify: inter-word;">

Strona jest jeszcze dostępna i można ją odwiedzić klikając <a href="http://przepisownik2016.opx.pl/" target="_blank">w ten odnośnik</a>. Z racji, że jest to darmowy hosting to ostrzegam, że mogą pojawić się reklamy (z rozszerzeniami jak AdBlock po prostu są białe przestrzenie).

</div>

<br>

 <table class="ui celled striped tablet stackable table">
  <thead>
    <tr><th colspan="3">
      Informacje
    </th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <i class="info circle icon"></i> Cel
      </td>
      <td class="justify-text font-balooChettan2">Ćwiczenie projektowania strony za pomocą HTML, CSS i JavaScript, stworzenie miejsca na przepisy warte zapamiętania, wdrażanie gotowych rozwiązań (m.in. biblioteki gridster.js) i ich modyfikacja na potrzeby projektu, opublikowanie projektu na darmowym serwerze prv.</td>
    </tr>
    <tr>
      <td>
        <i class="lab icon"></i> Technologie
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">19.07.2016 – 26.07.2016</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Rozwój znajomości HTML, CSS i JavaScript</li>
          <li>Rozwój umiejętności wdrażania gotowych rozwiązań</li>
          <li>Opublikowanie większego projektu na serwerze</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<!-- Image Modal -->
<div class="tiny modal">
  <div class="image content">
    <div class="ui huge image">
      <img id="imgPlaceholder" src="">
    </div>
  </div>
  <br/>
  <div class="actions">
    <div class="ui javascript left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>
