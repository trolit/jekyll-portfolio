---
layout: project
type: project
image: images/massiveEvent-cover.jpg
title: System im. masowe
labelColor: blue
language: C#
permalink: projects/MEsystem
# All dates must be YYYY-MM-DD format!
date: 2018-10-02
labels:
  - ASP.NET MVC
  - MSSQL
summary: Aplikacja ułatwiająca obsługę imprez masowych, wykonana na przedmiot Inżynieria Oprogramowania w oparciu o przygotowaną dokumentację.
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/massiveEvent-page-1.png">
  </div>
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/massiveEvent-page-2.png">
  </div>
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/massiveEvent-page-3.png">
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
      <td class="justify-text font-balooChettan2">Przygotowanie implementacji udokumentowanego systemu dla firmy zajmującej się organizacją imprez masowych. Praca wykonana w ramach zadania z przedmiotu inżynieria oprogramowania w czteroosobowym zespole.</td>
    </tr>
    <tr>
      <td>
        <i class="lab icon"></i> Technologie
      </td>
      <td class="font-balooChettan2">ASP.NET MVC, MSSQL</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="users icon"></i> Rola, (rozmiar zespołu)
      </td>
      <td class="font-balooChettan2">Kierownik, Analityk, Programista (zespół 4-os.)</td>
    </tr>
    <tr>
      <td>
        <i class="setting icon"></i> Odpowiedzialność
      </td>
      <td>
      <ul class="font-balooChettan2">
        <li>Przydzielanie zadań</li>
        <li>Udział w przygotowywaniu dokumentacji i implementacji aplikacji</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">02.10.2018 – 22.01.2019</td>
    </tr>
    <tr>
      <td>
        <i class="star icon"></i> Sukcesy
      </td>
      <td class="font-balooChettan2">
        <ul>
          <li>Poznanie .NET MVC</li>
          <li>Rozwój umiejętności programowania w języku C#</li>
          <li>Przygotowanie akceptowalnej implementacji (v0.7) w ciągu 5 dni</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui one column stackable center aligned grid">
    <p style="font-size: 160%; padding: 5% 0% 5% 0%;">Zasoby</p>
  </div>
  <div class="ui two column stackable center aligned grid">
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="github icon"></i>
          Repozytorium
        </div>
        <br>
        <a href="https://github.com/trolit/inzOpr_Aplikacja" target="_blank">
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
          <i class="file pdf outline icon"></i>
          Dokumentacja
        </div>
        <br>
        <a href="https://github.com/trolit/Moje.dokumenty/blob/master/Dokumentacja%20i%20projekty/Projekt%20-%20in%C5%BCynieria%20oprogramowania.pdf" target="_blank">
        <div class="ui animated csharp button" onclick="this.blur();" tabindex="0">
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
    <div class="ui csharp left labeled icon button">
      Zamknij podgląd
      <i class="file image icon"></i>
    </div>
  </div>
</div>