---
layout: project
type: project
image: images/aStar-cover.jpg
title: A★
labelColor: blue
language: C#
website: https://github.com/trolit/Inne/tree/master/Algorytm%20A_star#o-algorytmie-a
permalink: projects/Astar
# All dates must be YYYY-MM-DD format!
date: 2018-08-14
labels:
  - WinForms
  - .NET Framework
summary: First approach to A* algorithm and attempt to visualization through WinForms desktop app.
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/aStar-page-1.png">
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
      <td class="justify-text font-balooChettan2">Poznanie działania algorytmu A* na podstawie artykułu napisanego przez Johann Fradj i próba implementacji we własnym projekcie z wizualizacją w WinForms.</td>
    </tr>
    <tr>
      <td>
        <i class="lab icon"></i> Technologie
      </td>
      <td class="font-balooChettan2">.NET Windows.Forms</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="users icon"></i> Rola, (rozmiar zespołu)
      </td>
      <td class="font-balooChettan2">Programista (zespół 1-os.)</td>
    </tr>
    <tr>
      <td>
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">14.08.2018 – 30.08.2018</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Poznanie algorytmu A*</li>
          <li>Rozwój umiejętności programowania w języku C#</li>
          <li>Poszerzenie wiedzy z zakresu AI (Sztuczna Inteligencja)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui icon header font-balooChettan2">
    <i class="github icon"></i>
    Implementacja na GitHub
  </div>
  <a href="https://github.com/trolit/Moje.dokumenty/tree/master/Algorytm%20A_star" target="_blank" style="margin-top: 2%;">
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
