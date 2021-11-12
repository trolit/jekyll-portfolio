---
layout: project
type: project
image: images/WW-cover.png
title: Wszystko-wojskowe
website: https://github.com/trolit/Inne/tree/master/Projekty%20stron(PA%20WWW)
permalink: projects/ww
# All dates must be YYYY-MM-DD format!
date: 2019-01-02
labels:
  - HTML
  - JavaScript
  - Bootstrap
  - CSS
summary: WWW page projects made for studies.
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/WW-page-1.png">
  </div>
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/WW-page-2.png">
  </div>
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/WW-page-3.png">
  </div>
</div>

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
      <td class="font-balooChettan2">Wykonanie projektu strony z prawidłowo przygotowaną bazą znaczników i z zachowaniem norm W3 oraz poznanie framework'a Bootstrap.</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">02.01.2019 – 16.01.2019</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Poznanie wersji 5 HTML</li>
          <li>Przypomnienie CSS i JavaScript</li>
          <li>Poznanie framework'a Bootstrap</li>
          <li>Poznanie IDE - WebStorm</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui icon header font-balooChettan2">
    <i class="github icon"></i>
    Projekty wykonane w ramach programowania aplikacji WWW <br/> (wraz ze zdjęciami)
  </div>
  <a href="https://github.com/trolit/Moje.dokumenty/tree/master/Projekty%20stron(PA%20WWW)" target="_blank" style="margin-top: 2%;">
    <div class="ui animated violet button" onclick="this.blur();" tabindex="0">
      <div class="visible content font-balooChettan2">Sprawdź</div>
      <div class="hidden content">
        <i class="right arrow icon"></i>
      </div>
    </div>
  </a>
</div>

<!-- Image Modal -->
<div class="tiny modal">
  <div class="image content">
    <div class="ui huge image">
      <img id="imgPlaceholder" src="">
    </div>
  </div>
  <br/>
  <div class="actions">
    <div class="ui teal left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>
