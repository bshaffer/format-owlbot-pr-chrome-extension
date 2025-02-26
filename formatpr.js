var mergeBox = document.getElementsByClassName('partial-pull-merging-analytics-js')[0]
if (mergeBox) {
    titleField = mergeBox.querySelector('input')
    if (titleField) {
        // remove component name (e.g. "[Datastore]") from PR title
        console.log("Formatted Commit Title")
        console.log("FROM: " + titleField.value)
        titleField.value = titleField.value.replace(/: \[.*\]/, ':')
        console.log("TO:   " + titleField.value)
        commitLine = titleField.value.replace(/ \(\#.*\)/, '')
    }

    messageField = mergeBox.querySelector('textarea')
    if (messageField) {
        // remove remove duplicate commit message if it's on the first line
        // remove owlbot references
        // remove extra whitespace
        console.log("Formatted Commit Description")
        console.log("FROM: \n" + messageField.value)
        messageField.value = messageField.value
            .replace(new RegExp('^\\* ' + commitLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "\n+"), '')
            .replaceAll("\n\nSee https://github.com/googleapis/repo-automation-bots/blob/main/packages/owl-bot/README.md", '')
            .replaceAll("\n\n---------", '')
            .replaceAll("\n\n* 🦉 Updates from OwlBot post-processor", '')
            .replaceAll("\n\nCo-authored-by: Owl Bot <gcf-owl-bot[bot]@users.noreply.github.com>", '')
            .replaceAll("\n\nSource-Link: ", "\nSource-Link: ")
            .replaceAll("\n\nPiperOrigin-RevId: ", "\nPiperOrigin-RevId: ")
            .replaceAll("\n\nCopy-Tag: ", "\nCopy-Tag: ")
            .replace(new RegExp("\n+$"), '')
        console.log("TO: \n" + messageField.value)
    }
} else {
    console.log("Commit not found")
}