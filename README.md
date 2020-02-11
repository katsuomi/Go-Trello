<div align="center">
  <img width="197" alt="icon128" src="https://user-images.githubusercontent.com/36298285/74220440-f71eaa00-4cf2-11ea-83f8-e65ed45214c6.png" />
</div>

# Go-Trello

Chrome BrawserExtension / write anchor tag content on trello card

## 🔰 Install & Setup

#### 1. Getting Trello Configs

Getting API Key & API Token from [Docs](https://developers.trello.com/reference/#introduction).

#### 2. Getting source code

```bash
$ git clone https://github.com/katsuomi/Go-Trello.git
```

#### 3. Substitute Your Keys

```bash
$ cd Go-Trello
```

```:index.js
chrome.contextMenus.create({
  title: "Go Trello",
  type: "normal",
  contexts: ["all"],
  onclick: info => {
    const xhr = new XMLHttpRequest();
    // Trello Config
    const idList = "YOUR LIST ID";
    const apiKey = "YOUR API KEY";
    const apiToken = "YOUR API TOKEN";

    xhr.open(
      "POST",
      `https://api.trello.com/1/cards?idList=${idList}&keepFromSource=all&key=${apiKey}&token=${apiToken}&name=${info.selectionText}&desc=${info.linkUrl}`
    );
    xhr.send();
  }
});
```

#### 4. Select cloned Directory

<img width="1785" alt="demo" src="https://user-images.githubusercontent.com/36298285/74222578-2c79c680-4cf8-11ea-9f60-e04e642ea1ae.png">

#### 5. Use from ContextMenus

<div align="center">
  <img width="386" alt="Go Trello" src="https://user-images.githubusercontent.com/36298285/74222851-b4f86700-4cf8-11ea-8c9c-b96c56d5e95b.png">
</div>
