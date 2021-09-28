---
layout: project
type: project
image: images/ezGitDoc-doc-cover.png
title: Dokumentacja
labelColor: yellow
language: JavaScript
permalink: projects/ezGitDocDocumentation
# All dates must be YYYY-MM-DD format!
date: 2020-10-01
labels:
  - Docusaurus2
  - React
summary: Przygotowanie dokumentacji dla EzGitDoc na odseparowanej stronie. Projekt zbudowany z pomocą Docusaurus2. 
---

<div class="ui centered grid">
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/ezGitDoc-doc-page-1.png">
  </div>
  <div class="fourteen wide column clickable" onclick="showModalWithImage(this)">
    <img class="ui image img-center" src="../images/oval.svg" data-echo="../images/ezGitDoc-doc-page-2.png">
  </div>
</div>

<br/>

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
      <td class="justify-text font-balooChettan2">Przygotowanie odseparowanej dokumentacji projektu od EzGitDoc z racji jego znacznej rozbudowy i w celu uproszczenia dostępu do niej. Strona została wykonana i zmodyfikowana w narzędziu przygotowanym przez Facebook, Docusaurus2 w React. Dokumentacja wykorzystuje także react-awesome-slider, react-awesome-button oraz rozwiązanie wyszukiwarki od firmy Algolia znanej jako DocSearch. Uznania do wykorzystanych elementów znajdują się <a href="https://trolit.github.io/EzGitDoc-documentation/about#documentation" target="_blank">tutaj</a>.</td>
    </tr>
    <tr>
      <td class="collapsing">
        <i class="clock icon"></i> Ramy czasowe
      </td>
      <td class="font-balooChettan2">
      01.10.2020 - 12.10.2020 <small><kbd>(v1.0)</kbd></small>
      </td>
    </tr>
  </tbody>
</table>

<div class="ui placeholder segment">
  <div class="ui one column stackable center aligned grid">
    <p style="font-size: 160%; padding: 5% 0% 5% 0%;">EzGitDoc Documentation</p>
  </div>
  <div class="ui two column stackable center aligned grid">
    <div class="middle aligned row">
      <div class="column">
        <div class="ui icon header font-balooChettan2">
          <i class="github icon"></i>
          Repozytorium
        </div>
        <br>
        <a href="https://github.com/trolit/EzGitDoc-documentation" target="_blank">
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
          <i class="newspaper outline icon"></i>
          Strona
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
    <div class="ui massive image">
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