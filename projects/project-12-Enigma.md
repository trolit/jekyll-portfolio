---
layout: project
type: project
image: images/enigmaProject-cover.jpg
title: Project Enigma
labelColor: blue
language: C#
permalink: projects/enigmaProject
# All dates must be YYYY-MM-DD format!
date: 2018-01-07
labels:
  - .NET Framework
summary: Console app that implements three-rotor enigma made while participating in science club. Versions before 2.0 doesn't count :D
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/enigmaProject-page-1.png">
  </div>
</div>

<br>

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/enigmaProject-page-2.gif">
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
      <td class="justify-text font-balooChettan2">Stworzenie aplikacji, która pozwoli na szyfrowanie tekstu za pomocą enigmy z trzema wirnikami. Projekt enigma było zadaniem do wykonania w ramach uczestnictwa w kole naukowym DON’T NET.  </td>
    </tr>
    <tr>
      <td>
        <i class="lab icon"></i> Technologie
      </td>
      <td class="font-balooChettan2">.NET Framework</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">07.01.2018 – 14.08.2018</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Poznanie działania słynnej Enigmy</li>
          <li>Rozwój umiejętności programowania w języku C#</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui icon header font-balooChettan2">
    <i class="github icon"></i>
    Implementacje Enigmy dostępne są w serwisie GitHub
  </div>
  <a href="https://github.com/trolit/Kryptosystemy/tree/master/6.%20Enigma%20I" target="_blank" style="margin-top: 2%;">
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