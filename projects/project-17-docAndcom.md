---
layout: project
type: project
image: images/docAndCom-cover.png
title: docAndCom
labelColor: blue
language: C#
permalink: projects/docAndCom
# All dates must be YYYY-MM-DD format!
date: 2020-04-17
labels:
  - Xamarin.Forms
  - Android
  - SQLite
summary: Aplikacja mobilna, która pozwala na dokumentowanie zdjęć pod etykietami a następnie wygodne ich zestawianie w wygenerowanych plikach pdf.
---

<div class="ui centered grid">
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-1.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-2.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-3.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-4.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-5.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-6.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-7.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-8.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-9.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-10.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-11.PNG"></div>
  <div class="four wide column clickable" onclick="showModalWithImage(this)"><img class="ui small image" src="../images/oval.svg" data-echo="../images/docAndCom-page-12.png"></div>
</div>

<div class="ui icon message">
  <i class="comment outline icon"></i>
  <div class="content">
    <div class="header">
      Opis
    </div>
      <br>
      <div style="text-align: justify; text-justify: inter-word;">
        docAndCom to realizacja pomysłu stworzenia aplikacji mobilnej, która ułatwia proces weryfikowania skuteczności produktów. O co chodzi? Użytkownik tworzy sobie etykiety(w wersji angielskiej rozumiane jako tagi) pod którymi może dokumentować zdjęcia(robiąc nowe za pomocą aparatu lub wybierając z galerii). W każdej chwili może podejrzeć udokumentowane zdjęcia w kalendarzu i zarządzać nimi. Kiedy padnie decyzja, że zebrana została już odpowiednia liczba fotografii pod etykietą, użytkownik może wygenerować plik pdf za pomocą którego łatwo można porównać czy między zdjęciami są widoczne zmiany. Takiego dokumentu nie trzeba własnoręcznie przygotowywać, można go też szybko udostępnić. Nie ma limitu odnośnie plików pdf i zdjęć. Dostępny jest język polski i angielski, łatwo przygotować też inne języki za pomocą plików res.
      </div>
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
      <td class="justify-text font-balooChettan2">Przygotowanie aplikacji, która pozwoli na łatwe dokumentowanie pod etykietami zdjęć a po zebraniu pewnej liczby danych porównanie zmian w wygenerowanym przez aplikację pliku/plikach pdf.</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">17.04.2020 - 28.04.2020 (v1.0) <br/>
          29.04.2020 - 05.05.2020 (z testami, korektami i dokumentacją) <br/>
          11.07.2020 - 12.07.2020 (v1.1.1)
      </td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Poznanie Xamarin.Forms</li>
          <li>Zrealizowanie postawionego sobie zadania</li>    
          <li>Stworzenie kolejnej aplikacji open source:)</li>      
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui one column stackable center aligned grid">
    <p style="font-size: 160%; padding: 5% 0% 5% 0%;">docAndCom</p>
  </div>
  <div class="ui two column stackable center aligned grid">
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="github icon"></i>
          Repozytorium
        </div>
        <br>
        <a href="https://github.com/trolit/document-and-compare" target="_blank">
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
          <i class="android icon"></i>
          Aplikacja (.apk)
        </div>
        <br>
        <a href="https://github.com/trolit/document-and-compare/releases/download/1.1.1/docAndCom_1.1.1.apk" target="_blank">
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
    <div class="ui medium image">
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