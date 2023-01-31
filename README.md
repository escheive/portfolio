When im ready, i need to deply to github pages following these steps

7. Push the React app to the GitHub repository
Push the React app to the GitHub repository

$ npm run deploy
That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

$ npm run deploy -- -m "Deploy React app to GitHub Pages"
At this point, the GitHub repository contains a branch named gh-pages, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to serve those files yet.

8. Configure GitHub Pages
Navigate to the GitHub Pages settings page
In your web browser, navigate to the GitHub repository
Above the code browser, click on the tab labeled "Settings"
In the sidebar, in the "Code and automation" section, click on "Pages"
Configure the "Build and deployment" settings like this:
Source: Deploy from a branch
Branch:
Branch: gh-pages
Folder: / (root)
Click on the "Save" button
That's it! The React app has been deployed to GitHub Pages! 🚀

At this point, the React app is accessible to anyone who visits the homepage URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.