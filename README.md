# Chrome Extension for Formatting Owlbot PRs

This PR allows us to do the following things to an owlbot (automated) PR message:

1. Removes the "Updates from OwlBot" and "Co-authored-by Owl Bot" footers
1. Deletes the extra whitespace between each line
    - Newlines still exist between `PiperOrigin-RevId` blocks
1. Removes the component name and square brackets from the commit title
    - This returns the title of the PR to the original piper commit message
    - The component name is only important in the PR title, to help differentiate PRs during review.
1. Removes the conventional commit in the commit title from the commit body
    - This ensures it's not duplicated by release-please
    - Usually this line is prefixed by an asterisk

# Installation

1. Clone this directory locally
    ```
    git clone git@github.com:bshaffer/format-owlbot-pr-chrome-extension
    ```
1. Install the extension
    1. type `chrome://extensions` in the url bar and press enter.
    1. Turn on the switch on the top right of the page that says "Developer mode";
    1. Click on the button on the top left of the page that says "Load unpacked".
    1. Select a folder where you cloned this extension (should be `format-owlbot-pr-chrome-extension`)

1. When you are merging an OwlBot PR, click the icon for this extension and the PR will be formatted
