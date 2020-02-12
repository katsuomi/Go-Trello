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
    console.log(info);

    xhr.open(
      "POST",
      `https://api.trello.com/1/cards?idList=${idList}&keepFromSource=all&key=${apiKey}&token=${apiToken}&name=${info.selectionText}&desc=${info.pageUrl}`
    );
    xhr.send();
  }
});
