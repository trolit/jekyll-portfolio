---
layout: project
type: project
image: images/ezGitDoc-cover.png
title: EzGitDoc
labelColor: yellow
language: JavaScript
permalink: projects/ezGitDoc
# All dates must be YYYY-MM-DD format!
date: 2020-02-23
labels:
  - HTML
  - MDBootstrap
  - LESS
summary: Narzędzie WYSIWYG pozwalające na zaprojektowanie dokumentu repozytorium. Stabilną, pierwszą wersję pomysłu zrealizowano w 6 dni.
---

<div class="ui centered grid">
  <div class="six wide column">
    <p class="ui center aligned segment">v1.4 (01.04.2020)</p>
  </div>
  <div class="ten wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/ezGitDoc-page-3.PNG">
  </div>
  <div class="six wide column">
    <p class="ui center aligned segment">v1.2 (24.03.2020)</p>
  </div>
  <div class="ten wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/ezGitDoc-page-2.PNG">
  </div>
  <div class="six wide column">
    <p class="ui center aligned segment">v1.0 (29.02.2020)</p>
  </div>
  <div class="ten wide column clickable" onclick="showModalWithImage(this)"> 
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/ezGitDoc-page-1.PNG">
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
      <td class="justify-text font-balooChettan2">Przygotowanie strony pozwalającej na tworzenie układu/schematu dokumentu(szczególnie tego do repozytorium).</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="users icon"></i> Rola, (rozmiar zespołu)
      </td>
      <td class="font-balooChettan2">Developer (zespół 1-os.)</td>
    </tr>
    <tr>
      <td>
        <i class="setting icon"></i> Odpowiedzialność
      </td>
      <td>
      <ul>
        <li class="font-balooChettan2">Zrealizowanie projektu EzGitDoc od strony funkcjonalnej i wizualnej</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">
      23.02.2020 - 29.02.2020 <kbd><small>(1.0)</small></kbd><br/>
      szczegółowe wersjonowanie dostępne jest <a href="https://trolit.github.io/EzGitDoc-documentation/changelog" target="_blank">tutaj</a>
      </td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td>
        <ul class="font-balooChettan2">
          <li>Spełnienie postawionych sobie założeń projektowych</li>
          <li>Wykonanie generatora szablonów dokumentacji</li>
          <li>Rozwijanie umiejętności w języku JavaScript</li>
          <li>Pierwsze podejście do framework'u MDBootstrap</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui one column stackable center aligned grid">
    <p style="font-size: 160%; padding: 5% 0% 5% 0%;">Zasoby EzGitDoc</p>
  </div>
  <div class="ui two column stackable center aligned grid">
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="github icon"></i>
          Repozytorium
        </div>
        <br>
        <a href="https://github.com/trolit/EzGitDoc" target="_blank">
        <div class="ui animated javascript button" onclick="this.blur();" tabindex="0">
          <div class="visible content font-balooChettan2">Sprawdź</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
        </a>
      </div>
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="js icon"></i>
          Narzędzie
        </div>
        <br>
        <a href="https://trolit.github.io/EzGitDoc/" target="_blank">
        <div class="ui animated javascript button" onclick="this.blur();" tabindex="0">
          <div class="visible content font-balooChettan2">Sprawdź</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
        </a>
      </div>
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="folder open icon"></i>
          Dokumentacja
        </div>
        <br>
        <a href="https://trolit.github.io/EzGitDoc-documentation/" target="_blank">
        <div class="ui animated javascript button" onclick="this.blur();" tabindex="0">
          <div class="visible content font-balooChettan2">Sprawdź</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
        </a>
      </div>
    </div>
  </div>
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
    <div class="ui javascript left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>