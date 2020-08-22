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
                                      text: "What projects have you done 🤔",
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
          delay: 1900,
          content: "I created a program to collect patient vital signs and analyze them to highlight any trends or information that might be useful for medical professionals"
      }).then(function () {
            botui.message.add({
                delay: 1600,
                content: "I am also thinking of implementing a Machine Learning algorithm to further analyze the data"
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
      })
  },
  fourthpart = function () {
      botui.message.add({
          delay: 1E3,
          content: "I used Qt Quick to create a functional app interface with sliders and touchscreen applications"
      }).then(function () {
          botui.message.add({
              delay: 1500,
              content: "I also created a remote logging system using rsyslog that would wirelessly transfer files"
          }).then(function () {
              botui.action.button({
                  delay: 1500,
                  action: [{
                      text: "Tell me more! (ง •_•)ง",
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
          content: "Sure! Here's a website I made to better showcase myself. Have a look!"
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