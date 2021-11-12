---
layout: project
type: project
image: images/3vry-cover.png
title: 3vry
labelColor: orange
language: Kotlin
website: https://github.com/trolit/3vry#3vry
permalink: projects/3vry
# All dates must be YYYY-MM-DD format!
date: 2020-06-03
labels:
  - Android
  - SQLite
  - YoutubeAPI
summary: Mobile app that allows to add favourite artists and playlists, receive one suggestion per day from YouTube service and play it.
---

<div class="ui centered grid">
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-1.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-2.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-3.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-4.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-5.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-6.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-7.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-8.png"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/3vry-page-9.png"></div>
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
      <td class="justify-text font-balooChettan2">Stworzenie aplikacji, która zachęci do odtworzenia przynajmniej jednego utworu dziennie i da szansę odkryć ciekawe piosenki ulubionych artystów z serwisu YouTube. W najnowszej wersji można dodać także playlisty i jeżeli taka playlista zostanie wylosowana to zostanie z niej wybrana piosenka w sposób pseudolosowy.</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">
      03.06.2020 - 29.06.2020 <kbd><small>(v1.0)</small></kbd><br/>
      20.07.2020 - 22.07.2020 <kbd><small>(v1.1)</small></kbd>
      </td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td>
        <ul class="font-balooChettan2">
          <li>Poznanie języka Kotlin i IDE IntelliJ IDEA</li>
          <li>Wykorzystanie API YouTube</li>  
		  <li>Wykorzystanie biblioteki Retrofit do wysyłania żądań do serwera</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<h4>Krótka demonstracja</h4>

<div class="ui embed" data-source="youtube" data-id="ZJ2wglKpu5M" > </div>

<br>

<div class="ui placeholder segment">
  <div class="ui one column stackable center aligned grid">
    <p style="font-size: 160%; padding: 5% 0% 5% 0%;">3vry</p>
  </div>
  <div class="ui two column stackable center aligned grid">
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="github icon"></i>
          Repozytorium<br/>
          <small>(wraz z dokumentacją)</small>
        </div>
        <br>
        <a href="https://github.com/trolit/3vry" target="_blank">
        <div class="ui animated kotlin button" onclick="this.blur();" tabindex="0">
          <div class="visible content font-balooChettan2">Sprawdź</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
        </a>
      </div>
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="android icon"></i>
          Aplikacja (.apk)
        </div>
        <br>
        <a href="https://github.com/trolit/3vry/releases/download/v1.1/3vry_1.1.apk" target="_blank">
        <div class="ui animated kotlin button" onclick="this.blur();" tabindex="0">
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
    <div class="ui medium image">
      <img id="imgPlaceholder" src="">
    </div>
  </div>
  <br/>
  <div class="actions">
    <div class="ui kotlin left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>
