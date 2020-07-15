var botui = new BotUI("hello-bot");

botui.message.add({
  delay: 800,
  content: "Hello there!!! 👋"
}).then(function () {
  botui.message.add({
      delay: 1100,
      content: "My name is Eric Cheng"
  }).then(function () {
      botui.message.add({
          delay: 1100,
          content: "Welcome to my website!"
      }).then(function () {
          botui.action.button({
              delay: 1600,
              action: [{
                  text: "Nice to meet you! 😃",
                  value: "sure"
              }, {
                  text: "Spare me the talk 🙄",
                  value: "skip"
              }]
          }).then(function (a) {
              "sure" == a.value && sure();
              "skip" == a.value && end()
          })
      })
  })
});
var sure = function () {
      botui.message.add({
          delay: 600,
          content: "😘"
      }).then(function () {
          secondpart()
      })
  },
  end = function () {
    botui.message.add({
        delay: 800,
        content: "aww ok then 😢"
    })
      botui.message.add({
          delay: 1600,
          content: "![...](https://media.makeameme.org/created/not-talking-to-a2wmvw.jpg)"
      })
  },
  secondpart = function () {
      botui.message.add({
          delay: 1500,
          content: "I recently graduated from Santa Clara with a Computer Science Degree"
      }).then(function () {
          botui.message.add({
              delay: 1500,
              content: "When I first applied for college I was actually thinking of choosing a biology major"
          }).then(function () {
              botui.message.add({
                  delay: 1200,
                  content: "then I thought Computer Science suited me better lmao"
              }).then(function () {
                  botui.message.add({
                      delay: 1900,
                      content: "I generally use C/C++, Java, and Python as my preferred languages, but also work with HTML/CSS/JS in front end design"
                  }).then(function () {
                      botui.message.add({
                          delay: 1500,
                          content: "I aim to become a software engineer with a focus in big data development and analysis"
                      }).then(function () {
                          botui.message.add({
                              delay: 1500,
                              content: "I also enjoy Front-End work, and might also pursue web and UI design as side projects~"
                          }).then(function () {
                              botui.action.button({
                                  delay: 1100,
                                  action: [{
                                      text: "What are your hobbies? 🤔",
                                      value: "why-mashiro"
                                  }]
                              }).then(function (a) {
                                  thirdpart()
                              })
                          })
                      })
                  })
              })
          })
      })
  },
  thirdpart = function () {
      botui.message.add({
          delay: 1E3,
          content: "I enjoy playing games such as the Super Smash Bros series，the Legend of Zelda, and League of Legends"
      }).then(function () {
          botui.action.button({
              delay: 1500,
              action: [{
                  text: "What else? 🤔",
                  value: "why-cat"
              }]
          }).then(function (a) {
              fourthpart()
          })
      })
  },
  fourthpart = function () {
      botui.message.add({
          delay: 1E3,
          content: "I also really like to travel!"
      }).then(function () {
          botui.message.add({
              delay: 1100,
              content: "Ever since I was a small boy, I yearned to go on adventures abroad and envelop myself in different cultures"
          }).then(function () {
              botui.action.button({
                  delay: 1500,
                  action: [{
                      text: "What travel destinations do you recommend? (ง •_•)ง",
                      value: "why-domain"
                  }]
              }).then(function (a) {
                  fifthpart()
              })
          })
      })
  },
  fifthpart = function () {
      botui.message.add({
          delay: 2300,
          content: "emmmm，I feel like each place has its own unique points，so I can't really explain them well =.= You can check out the photo portfolio on my website!"
      }).then(function () {
          botui.message.add({
              delay: 1600,
              content: "I hope you like it! Enjoy ^_^"
          })  
          setTimeout(function(){
          window.location.replace("https://eccx400.github.io/landing.html");
          }, 4000)
      })
  } 