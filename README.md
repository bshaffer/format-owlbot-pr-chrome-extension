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
