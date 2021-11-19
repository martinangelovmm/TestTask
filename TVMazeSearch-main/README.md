# TVMazeSearch

## Setup

### On ARM (M1)
Install x86_64 ffi

`sudo arch -x86_64 gem install ffi`

### Installation
Navigate to project's directory and run the following commands:
```
yarn
cd ios && pod install
cd ../
```

### iOS
Run the app

`yarn ios`


### Android
Run the app

`yarn android`




## Things I would like to do if there was time:
- Add Redux to the app, so we can save the data we get from the server. Then, we can query that data (filter, etc.) when the user starts typing on the search input field.
However, I saw that the `/search/shows?q=:query` doesn't have pagination implemented.
Later, I understood that I could use the `/shows?page=:num` API, but it was too late, and it required changing the model, and that would mean changing a lot of code in the app.
Saving data to Redux or SQLite database is something I've done multiple times during my experience as React Native developer, including pagination, so that wouldn't be a problem for me to implement if there was more time.
- Add unit testing to cover some critical parts of the app. Testing is important, especially when the project is huge and complex, so I would have spent more time on it.

- Add favorite show list for the user. I could add a `STAR` button on each item, as well as one in the Details screen, so the user could save those items in device. Another screen would be needed in order to display the favorited items.

- Add a Fullscreen option, so the user could see the show image(s) in full screen. 

- Implement a WebView screen, so the user doesn't navigate from our app to the browser when opening the show url address.


## App Preview

![App preview](./TVMazeApp.gif)