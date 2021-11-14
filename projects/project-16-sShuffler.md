---
layout: project
type: project
image: images/sShuffler-cover.PNG
title: sShuffler
labelColor: blue
language: C#
website: https://github.com/trolit/sShuffler
permalink: projects/sShuffler
# All dates must be YYYY-MM-DD format!
date: 2020-04-12
labels:
  - WinForms
  - .NET Framework
summary: Small tool to quickly rearrange playlists and maintain format that is respected by car players.
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/sShuffler-page-1.png">
  </div>
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/sShuffler-page-2.png">
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
      <td class="justify-text font-balooChettan2">Przygotowanie aplikacji, która pozwoli w sposób pseudolosowy przetasować muzykę i wygenerować właściwy format tytułu, który będzie respektowany przez nawet te najbardziej oporne odtwarzacze audio.</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">12.04.2020 - 13.04.2020 (dla wersji 1.1)</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Przypomnienie WinForms</li>
          <li>Zrealizowanie postawionego sobie zadania</li>          
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui one column stackable center aligned grid">
    <p style="font-size: 160%; padding: 5% 0% 5% 0%;">sShuffler</p>
  </div>
  <div class="ui two column stackable center aligned grid">
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="github icon"></i>
          Repozytorium
        </div>
        <br>
        <a href="https://github.com/trolit/sShuffler" target="_blank">
        <div class="ui animated csharp button" onclick="this.blur();" tabindex="0">
          <div class="visible content font-balooChettan2">Sprawdź</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
        </a>
      </div>
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="cloud download icon"></i>
          Aplikacja
        </div>
        <br>
        <a href="https://github.com/trolit/sShuffler/releases/download/v1.1/sShuffler_desktop.zip" target="_blank">
        <div class="ui animated csharp button" onclick="this.blur();" tabindex="0">
          <div class="visible content font-balooChettan2">Pobierz</div>
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
    <div class="ui csharp left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>
