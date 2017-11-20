(function() {
  var am = "data:image/png;base64,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";
  var pm = "data:image/png;base64,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";

  function walk(rootNode) {
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    var node;

    while (node = walker.nextNode()) {
      handleText(node);
    }
  }

  var ampmRegex = /(\d+?\s*?)([ap]\.?m\.?)/gi

  function handleText(textNode) {
    if (ampmRegex.test(textNode.nodeValue)) {
      var tokens = textNode.nodeValue.replace(ampmRegex, function(match, digits, ampm) {
        return `${digits}<ampm>__${ampm[0]}m__<ampm>`;
      }).split("<ampm>");

      var container = document.createElement('span');
      tokens.forEach(function(token) {
        var node;

        if (token === "__am__") {
          node = document.createElement('img');
          node.setAttribute('src', am);
          node.setAttribute('style', 'position: relative; top: 2px');
        } else if (token === "__pm__") {
          node = document.createElement('img');
          node.setAttribute('src', pm);
          node.setAttribute('style', 'position: relative; top: 7px');
        } else {
          node = document.createTextNode(token);
        }

        container.appendChild(node);
      });

      textNode.parentNode.insertBefore(container, textNode);
      textNode.parentNode.removeChild(textNode);
    }
  }

  function isForbiddenNode(node) {
    return node.isContentEditable || // DraftJS and many others
      (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
      (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
                        node.tagName.toLowerCase() == "input"));
  }

  function observerCallback(mutations) {
    var i, node;

    mutations.forEach(function(mutation) {
      for (i = 0; i < mutation.addedNodes.length; i++) {
        node = mutation.addedNodes[i];

        if (isForbiddenNode(node)) {
          // Should never operate on user-editable content
          continue;
        } else if (node.nodeType === 3) {
          // Replace the text for text nodes
          handleText(node);
        } else {
          // Otherwise, find text nodes within the given node and replace text
          walk(node);
        }
      }
    });
  }

  function setupAmpm() {
    walk(document.body);

    var observerConfig = {
      characterData: true,
      childList: true,
      subtree: true
    }

    var bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(document.body, observerConfig);
  }

  console.log("SETTING UOP");

  setupAmpm();
})();
