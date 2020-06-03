# Hacker News Reader

## Installing and running

This app can be installed locally by running the command

```
npm i
```

The local dev server can be run by

```
npm start
```

Unit tests can be run by

```
npm test
```

## Introduction

This is a demo React app to read Hacker News via the Hacker News Firebase API.

Goals:

1. Develop a web application in ReactJS that is consuming HackerNews REST API to:
   _ Display the top 10 Stories; and
   _ Display top 20 comments of those stories; and
   * Is responsive design
   *Note\* Please keep in mind the following three main factors:
   Performance
   Efficiency
   Build and design for extensibility
2. Please provide your test in a public git repository
3. Bonus point, include Unit Tests
   Documentation:

This API is pretty low-level so it was difficult to efficiently collect the top ten stories without making a lot of requests. The API returns an unsorted list of more than 400 story IDs. Each story ID needed to be retrieved to get the score for the story. Only the ten highest stories needed to be displayed so a lot of data needs to be retrieved and then thrown away.

My first attempts didn't produce a good result. Making 400 requests and then waiting for the results wasn't going to be a good user experience so I decided to start displaying the results as they started coming in and replacing lower scoring stories with higher ones on the fly. This worked better. After running the app a number of times I noticed that the bulk of the list returned pretty quickly but the last few took longer and longer. I decided to settle for only retieving the first 100 stories and finding the top 10 from amongst those. This gave much better performance and allowed me to move onto the next problem of retrieving the comments.

Comments are easier because they don't have a score to worry about. I simply retrieved the first 20 top level comments for each story. I decided however to not retrieve comments automatically on load because this would require 200 more requests tying up the system. Instead I added a button to each story so that the user could retrieve them is they were interested. Once the comments were retrieved they would stay cached in memory. http://localhost:1334/top-ten

As a second experiment I simply loaded the first 10 items for the top stories api and displayed them. This of course was much faster. This produced only 10 requests and I added them as they arrived while continuing to sort the list by score. The scores of these stories are not as high as the first approach. http://localhost:1334/first-ten