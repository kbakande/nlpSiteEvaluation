# Evaluating news website using natural language processing

This repo will take a url input of a target website and return the sentiment analysis result for the website. It uses the [meaningcloud](https://www.meaningcloud.com/developer/sentiment-analysis) sentiment analysis API endpoint.

## Get Up and Running

Fork this repo, then clone your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/nlpSiteEvaluation.git -- 
```

`cd` into your new folder and run:
- ```npm install```
- ```npm run build prod```
- ```npm start``` to start the app
- this app runs on localhost:8081, but you can of course edit that in index.js

## Get sentiment analysis

Enter the URL of the target website and the sentiment analysis done using meaning cloud sentiment analysis api endpoint wll be returned.

# Error handling

The form outputs error message if the url submitted is not valid.
