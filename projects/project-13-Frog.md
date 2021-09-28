---
layout: project
type: project
image: images/projectFrog-cover.png
title: Projekt Frog
labelColor: blue
language: C#
permalink: projects/projectFrog
# All dates must be YYYY-MM-DD format!
date: 2017-11-12
labels:
  - WinForms
  - .NET Framework
summary: Pierwszy projekt na GitHub, także w C#. Gra na wzór klasyki czyli Arcade Frogger stworzona w WinForms.
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/projectFrog-page-1.png">
  </div>
</div>

<br>

<div class="ui grid">
  <div class="eight wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/projectFrog-page-2.png">
  </div>
  <div class="eight wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/projectFrog-page-3.png">
  </div>
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
      <td class="justify-text font-balooChettan2">Stworzenie opcjonalnego (nieobowiązkowego) projektu w ramach przedmiotu programowanie obiektowe na uczelni czyli gry na wzór Frogger z drobnymi modyfikacjami i trybem kooperacyjnym.</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="lab icon"></i> Technologie
      </td>
      <td class="font-balooChettan2">.NET Windows.Forms</td>
    </tr>
    <tr>
      <td>
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">12.11.2017 – 13.01.2018</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Poznanie Windows.Forms</li>
          <li>Wykonanie pierwszego większego projektu w C#</li>
          <li>Zyskanie większej pewności siebie w programowaniu</li>
          <li>Zmotywowanie się do stworzenia gry w środowisku Unity</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui icon header font-balooChettan2">
    <i class="github icon"></i>
    Repozytorium projektu <br> dostępne jest pod niniejszym linkiem
  </div>
  <a href="https://github.com/trolit/Projekt-Frog" target="_blank" style="margin-top: 2%;">
    <div class="ui animated csharp button" onclick="this.blur();" tabindex="0">
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
    <div class="ui csharp left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>